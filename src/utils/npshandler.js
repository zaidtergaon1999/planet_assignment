// npshandler - Blocks NPS popups using CSS injection and dismiss button detection
// Strategies: 1) Inject CSS to hide popup 2) Click dismiss buttons 3) Random score submission 4) Handle iframes
export async function handleNpsPopup(page, options = {}) {
  const timeout = options.timeout ?? 5000;
  const submitTimeout = options.submitTimeout ?? 3000;
  
  try {
    console.log('[NPS Handler] Starting NPS popup detection and blocking...');
    
    // STRATEGY 1: Inject CSS to hide NPS popups immediately
    try {
      await page.addStyleTag({
        content: `
          form[name="NPS options"],
          .nps-options,
          [role="radiogroup"][aria-labelledby*="nps"],
          [role="radiogroup"][aria-labelledby*="quantitative"],
          div:has(> .nps-number-option),
          .appcues-backdrop,
          [class*="appcues"],
          [id*="appcues"] {
            display: none !important;
            visibility: hidden !important;
            opacity: 0 !important;
            pointer-events: none !important;
          }
        `
      });
      console.log('[NPS Handler] ✓ CSS blocker injected');
    } catch (e) {
      console.log('[NPS Handler] CSS injection failed (non-fatal)');
    }
    
    // STRATEGY 2: Try to click "Ask Me Later" button first
    const dismissSelectors = [
      'button:has-text("Ask Me Later")',
      'button:has-text("ask me later")',
      'a:has-text("Ask Me Later")',
      '[data-testid*="dismiss"]',
      '[data-testid*="close"]',
      'button[aria-label*="close"]',
      'button[aria-label*="dismiss"]',
      '.appcues-button-dismiss',
      'button.close',
      '[class*="close-button"]',
    ];
    
    for (const selector of dismissSelectors) {
      try {
        const dismissBtn = page.locator(selector).first();
        if (await dismissBtn.isVisible({ timeout: 1000 }).catch(() => false)) {
          await dismissBtn.click({ force: true, timeout: 2000 });
          console.log(`[NPS Handler] ✓ Clicked dismiss button: ${selector}`);
          await page.waitForTimeout(500);
          return 'dismissed';
        }
      } catch (e) {
        continue;
      }
    }
    
    // STRATEGY 3: Check for popup in iframes
    const frames = page.frames();
    for (const frame of frames) {
      try {
        // Try to find and dismiss in iframe
        for (const selector of dismissSelectors) {
          const dismissBtn = frame.locator(selector).first();
          if (await dismissBtn.isVisible({ timeout: 500 }).catch(() => false)) {
            await dismissBtn.click({ force: true });
            console.log(`[NPS Handler] ✓ Clicked dismiss in iframe: ${selector}`);
            await page.waitForTimeout(500);
            return 'dismissed-iframe';
          }
        }
      } catch (e) {
        continue;
      }
    }
    
    // STRATEGY 4: If popup still visible, click a random score and submit
    console.log('[NPS Handler] Checking if NPS popup is still visible...');
    
    // Step 1: Wait for the popup container to appear with multiple selector strategies
    // Use shorter timeout since CSS should have already blocked it
    const popupSelectors = [
      'form[name="NPS options"]',
      'fieldset.nps-options',
      '.nps-options',
      '[role="radiogroup"]',
      'div:has(> .nps-number-option)',
      'form:has(input.nps-number-input)',
    ];
    
    let popupFound = false;
    let popupContainer = null;
    
    for (const selector of popupSelectors) {
      try {
        await page.waitForSelector(selector, { state: 'visible', timeout: 1000 });
        popupContainer = page.locator(selector).first();
        const count = await popupContainer.count();
        if (count > 0) {
          console.log(`[NPS Handler] ⚠ Popup still visible despite CSS: ${selector}`);
          popupFound = true;
          break;
        }
      } catch (e) {
        // Try next selector
        continue;
      }
    }
    
    if (!popupFound || !popupContainer) {
      console.log('[NPS Handler] ✅ No NPS popup detected (successfully blocked or not present)');
      return null;
    }
    
    // Step 2: Wait a bit for the popup to fully render
    await page.waitForTimeout(500);
    
    // Step 3: Find all available radio options using multiple strategies
    const optionSelectors = [
      'input.nps-number-input',
      'input[type="radio"][name="nps-options"]',
      '.nps-number-option input',
      'input[id^="option-"]',
    ];
    
    let radioInputs = null;
    let inputCount = 0;
    
    for (const selector of optionSelectors) {
      radioInputs = popupContainer.locator(selector);
      inputCount = await radioInputs.count();
      if (inputCount > 0) {
        console.log(`[NPS Handler] ✓ Found ${inputCount} radio options with selector: ${selector}`);
        break;
      }
    }
    
    if (!radioInputs || inputCount === 0) {
      console.warn('[NPS Handler] No radio inputs found in popup');
      return null;
    }
    
    // Step 4: Pick a random option (0 to inputCount-1)
    const randomIndex = Math.floor(Math.random() * inputCount);
    const selectedInput = radioInputs.nth(randomIndex);
    
    console.log(`[NPS Handler] Selecting option at index ${randomIndex} (out of ${inputCount})`);
    
    // Step 5: Try multiple click strategies
    let clickSuccess = false;
    
    // Strategy 1: Click the label associated with the input
    try {
      const inputId = await selectedInput.getAttribute('id');
      if (inputId) {
        const label = page.locator(`label[for="${inputId}"]`).first();
        const labelCount = await label.count();
        if (labelCount > 0) {
          await label.scrollIntoViewIfNeeded({ timeout: 2000 });
          await label.click({ force: true, timeout: 2000 });
          console.log('[NPS Handler] ✓ Clicked label for input');
          clickSuccess = true;
        }
      }
    } catch (e) {
      console.log('[NPS Handler] Label click failed, trying input click...');
    }
    
    // Strategy 2: Click the input directly
    if (!clickSuccess) {
      try {
        await selectedInput.scrollIntoViewIfNeeded({ timeout: 2000 });
        await selectedInput.click({ force: true, timeout: 2000 });
        console.log('[NPS Handler] ✓ Clicked input directly');
        clickSuccess = true;
      } catch (e) {
        console.log('[NPS Handler] Direct input click failed, trying JavaScript...');
      }
    }
    
    // Strategy 3: Use JavaScript to set checked and trigger events
    if (!clickSuccess) {
      try {
        await selectedInput.evaluate((input) => {
          input.checked = true;
          input.dispatchEvent(new Event('change', { bubbles: true }));
          input.dispatchEvent(new Event('input', { bubbles: true }));
          input.dispatchEvent(new Event('click', { bubbles: true }));
        });
        console.log('[NPS Handler] ✓ Set checked via JavaScript');
        clickSuccess = true;
      } catch (e) {
        console.warn('[NPS Handler] JavaScript check failed:', e.message);
      }
    }
    
    if (!clickSuccess) {
      console.warn('[NPS Handler] All click strategies failed');
      return null;
    }
    
    // Step 6: Wait briefly for any animations or state updates
    await page.waitForTimeout(300);
    
    // Step 7: Verify the option is selected
    const selectedValue = await selectedInput.evaluate((input) => {
      return input.checked ? input.value : null;
    }).catch(() => null);
    
    console.log(`[NPS Handler] Selected value: ${selectedValue}`);
    
    // Step 8: Submit the form using multiple strategies
    console.log('[NPS Handler] Attempting to submit...');
    
    let submitSuccess = false;
    
    // Strategy 1: Click visible submit button
    const submitSelectors = [
      'input[type="submit"]',
      'button[type="submit"]',
      'button:has-text("Submit")',
      'button:has-text("submit")',
    ];
    
    for (const selector of submitSelectors) {
      try {
        const submitBtn = popupContainer.locator(selector).first();
        const btnCount = await submitBtn.count();
        if (btnCount > 0 && await submitBtn.isVisible().catch(() => false)) {
          await submitBtn.click({ force: true, timeout: 2000 });
          console.log(`[NPS Handler] ✓ Clicked submit button: ${selector}`);
          submitSuccess = true;
          break;
        }
      } catch (e) {
        continue;
      }
    }
    
    // Strategy 2: Click hidden submit button via JavaScript
    if (!submitSuccess) {
      try {
        await popupContainer.evaluate((container) => {
          const submit = container.querySelector('input[type="submit"], button[type="submit"]');
          if (submit) {
            submit.click();
            return true;
          }
          return false;
        });
        console.log('[NPS Handler] ✓ Clicked submit via JavaScript');
        submitSuccess = true;
      } catch (e) {
        console.log('[NPS Handler] JavaScript submit click failed');
      }
    }
    
    // Strategy 3: Call form.submit() directly
    if (!submitSuccess) {
      try {
        await page.evaluate(() => {
          const form = document.querySelector('form[name="NPS options"]');
          if (form && typeof form.submit === 'function') {
            form.submit();
            return true;
          }
          return false;
        });
        console.log('[NPS Handler] ✓ Called form.submit()');
        submitSuccess = true;
      } catch (e) {
        console.log('[NPS Handler] form.submit() failed');
      }
    }
    
    // Strategy 4: Press Enter key on the selected input
    if (!submitSuccess) {
      try {
        await selectedInput.press('Enter');
        console.log('[NPS Handler] ✓ Pressed Enter on input');
        submitSuccess = true;
      } catch (e) {
        console.log('[NPS Handler] Enter key failed');
      }
    }
    
    if (!submitSuccess) {
      console.warn('[NPS Handler] All submit strategies failed');
      return selectedValue;
    }
    
    // Step 9: Wait for the popup to disappear
    try {
      await page.waitForSelector('form[name="NPS options"], .nps-options', { 
        state: 'hidden', 
        timeout: submitTimeout 
      });
      console.log('[NPS Handler] ✓ Popup dismissed successfully');
    } catch (e) {
      console.log('[NPS Handler] Popup may still be visible (timeout waiting for dismissal)');
    }
    
    // Additional wait for any post-submit animations
    await page.waitForTimeout(500);
    
    console.log(`[NPS Handler] ✅ Successfully handled NPS popup (selected: ${selectedValue})`);
    return selectedValue || String(randomIndex);
    
  } catch (error) {
    console.warn('[NPS Handler] Error:', error.message);
    return null;
  }
}
