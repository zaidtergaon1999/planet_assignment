export default class CompleteDetailsPage {
  // Constructor: store Playwright `page` so all methods can interact with the browser page.
  constructor(page) {
    this.page = page;
  }

  // Main single-method implementation: ALL logic kept inside this one function exactly as requested
  // This method attempts to fill an entire "Complete Details" form on the Shopper Portal page.
  // It is defensive and uses many fallbacks because web components vary between deployments.
  async fillCompleteDetails(selectedCountry = 'Ireland') {
    const page = this.page;

    // --- Ensure we are on the CompleteDetails page and wait for network to be idle ---
    // These waits are best-effort (errors ignored) to avoid hard crashes when moving between pages.
    // The code proceeds even if these waits time out.
    await page.waitForURL(/CompleteDetails/, { timeout: 10000 }).catch(() => {});
    await page.waitForLoadState('networkidle').catch(() => {}); // ensure we are on the page

    // Determine which country to use for country-specific fields (default 'Ireland').
    const countryToUse = (typeof selectedCountry !== 'undefined' && selectedCountry) ? selectedCountry : 'Ireland';
    console.log('Filling Complete Details using country:', countryToUse);

    // Helper random picker used to select sample data entries.
    const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];

    // --- Sample data sets (Ireland-focused) ---
    // These arrays provide plausible first names, surnames, addresses, etc. used to populate fields.
    const givenNames = [
      'Aoife', 'Saoirse', 'Conor', 'Liam', 'Emma', 'Jack', 'Sean',
      'Niamh', 'Cian', 'Emily', 'Eoin', 'Fionn', 'Roisin', 'Oisin', 'Kate'
    ];

    const surnames = [
      'Murphy', 'Kelly', "OSullivan", 'Walsh', 'Byrne',
      'Ryan', "OConnor", "ONeill", 'Doyle', 'McCarthy',
      'Higgins', 'Kavanagh', 'Brady', 'OReilly', 'Clarke'
    ];

    const addresses1 = [
      "12 OConnell Street",
      'Flat 4, 21 Merrion Square',
      "3 St. Stephens Green",
      '47 Grafton Street',
      '8 Main Street',
      '2 Temple Bar',
      'Unit 5, Beacon Court, Sandyford',
      '15 College Green',
      '24 Patrick Street',
      '6 High Street, Galway'
    ];

    const addresses2 = [
      'Apt 2', '1st Floor', '2nd Floor', 'Suite 6', 'Rear Flat',
      'Unit B', 'Near River Liffey', 'co Building Manager', ''
    ];

    const postcodes = [
      'D02 X285', 'D01 F5P2', 'T12 R9K4', 'H91 K2F3', 'V94 Y7P8',
      'F91 P2K3', 'E91 C5D2', 'A63 V2F8', 'P43 D6R2', 'R95 X2N8'
    ];

    const cities = [
      'Dublin', 'Cork', 'Galway', 'Limerick', 'Waterford',
      'Sligo', 'Drogheda', 'Dundalk', 'Bray', 'Kilkenny'
    ];

    const states = [
      'County Dublin', 'County Cork', 'County Galway', 'County Limerick',
      'County Waterford', 'County Sligo', 'County Meath', 'County Wicklow',
      'County Kilkenny', 'County Donegal'
    ];

    // ---------- small helper: safeClick ----------
    // Scrolls element into view and clicks it with fallbacks (force click, then normal click).
    // Small pause added after click for UI stability.
    async function safeClick(locator) {
      await locator.scrollIntoViewIfNeeded().catch(() => {});
      await locator.click({ force: true }).catch(async () => { await locator.click().catch(() => {}); });
      await page.waitForTimeout(150);
    }

    // ---------- 1) Given names (use exact data-testid / id) ----------
    // Attempts precise selectors first, falls back to filling the first personal-details input.
    try {
      const first = pick(givenNames);
      const givenLoc = page.locator('#Input_GivenNames, [data-testid="GivenNamesInput"]').first();
      if (await givenLoc.count() > 0 && await givenLoc.isVisible()) {
        await givenLoc.fill(first);
      } else {
        // fallback: first visible personal-details input
        const any = page.locator('section:has-text("Personal details") input').first();
        if (await any.count() > 0 && await any.isVisible()) await any.fill(first);
      }
      console.log('Given names filled:', first);
    } catch (e) {
      // Non-fatal: log and continue
      console.warn('Given name fill failed:', e?.message || e);
    }

    // ---------- 2) Surname ----------
    // Similar strategy to given names — try targeted selector then fallback.
    try {
      const last = pick(surnames);
      const surnameLoc = page.locator('#Input_Surname, [data-testid="SurnameInput"]').first();
      if (await surnameLoc.count() > 0 && await surnameLoc.isVisible()) {
        await surnameLoc.fill(last);
      } else {
        const any = page.locator('section:has-text("Personal details") input').nth(1);
        if (await any.count() > 0 && await any.isVisible()) await any.fill(last);
      }
      console.log('Surname filled:', last);
    } catch (e) {
      console.warn('Surname fill failed:', e?.message || e);
    }

    // ---------- 3) Date of birth (16+ years old, robust) ----------
    // This block tries multiple interactions with a datepicker widget:
    // - Open the date control (varied selectors)
    // - Choose a random valid year (<= currentYear - 16), month and day
    // - Use many fallbacks in case the calendar UI differs between builds
    try {
      // Try to open DOB field (try id/placeholder or label)
      const dobCandidates = [
        page.locator('input[placeholder*="Date of birth"], input[id*=DateOfBirth], input[name*=birth]'),
        page.getByText(/Date of birth|DOB/i).first()
      ];
      for (const cand of dobCandidates) {
        if (await cand.count() > 0 && await cand.isVisible()) { await safeClick(cand.first()); break; }
      }
      await page.waitForTimeout(240);

      const now = new Date();
      const currentYear = now.getFullYear();
      // minimum allowed birth year (16 years ago or earlier)
      const maxAllowedBirthYear = currentYear - 16;

      // pick a year between 1945 and maxAllowedBirthYear (random for variety)
      const minYear = 1945;
      const year = Math.floor(Math.random() * (maxAllowedBirthYear - minYear + 1)) + minYear;
      const month = Math.floor(Math.random() * 12); // 0..11
      const day = Math.floor(Math.random() * 28) + 1; // 1..28 safe

      // Helper: click element if present & visible (iterate visible matches)
      async function clickIfVisible(locator) {
        try {
          if (await locator.count() > 0) {
            for (let i = 0; i < await locator.count(); ++i) {
              const el = locator.nth(i);
              if (await el.isVisible()) { await safeClick(el); return true; }
            }
          }
        } catch (e) { /* ignore */ }
        return false;
      }

      // Attempt to open the year selection view and pick the year
      const headerYearBtn = page.locator('.date-picker__month-year').first();
      await clickIfVisible(headerYearBtn);
      await page.waitForTimeout(200);

      // Try selecting the desired year via data-year button first
      const yearBtn = page.locator(`button[data-year="${year}"]`);
      let clickedYear = await clickIfVisible(yearBtn);

      // If that year isn't in the current view, attempt scanning and navigating prev/next controls
      if (!clickedYear) {
        const prevBtn = page.locator('.date-picker__previous').first();
        const nextBtn = page.locator('.date-picker__next').first();
        const scanClicked = await page.evaluate((targetYear) => {
          const nodes = Array.from(document.querySelectorAll('button.date-picker__years-item, button[data-year]'));
          for (const n of nodes) {
            if ((n.getAttribute('data-year') || n.textContent || '').trim() === String(targetYear)) {
              try { n.click(); return true; } catch(e){}
            }
          }
          return false;
        }, year).catch(() => false);

        if (!scanClicked) {
          // Attempt to page through years a few times and try again
          for (let i = 0; i < 8 && !clickedYear; ++i) {
            const selectedYearText = await page.locator('.date-picker__years-item--selected').first().textContent().catch(() => null);
            const visibleSelectedYear = selectedYearText ? parseInt(selectedYearText.trim()) : null;
            if (visibleSelectedYear && year < visibleSelectedYear) {
              if (await prevBtn.count() > 0) await safeClick(prevBtn);
            } else {
              if (await nextBtn.count() > 0) await safeClick(nextBtn);
            }
            await page.waitForTimeout(180);
            clickedYear = await clickIfVisible(page.locator(`button[data-year="${year}"]`));
          }
        } else clickedYear = true;
      }

      // As a last resort, choose the nearest acceptable year via page evaluation
      if (!clickedYear) {
        console.warn('Failed to click desired year directly — selecting nearest available year as fallback.');
        const fallbackClicked = await page.evaluate((maxYear) => {
          const nodes = Array.from(document.querySelectorAll('button.date-picker__years-item, button[data-year]'));
          let best = null;
          for (const n of nodes) {
            const y = parseInt(n.getAttribute('data-year') || n.textContent || '');
            if (!isNaN(y) && y <= maxYear) {
              if (best === null || y > best) best = y;
            }
          }
          if (best !== null) {
            for (const n of nodes) {
              const y = parseInt(n.getAttribute('data-year') || n.textContent || '');
              if (y === best) { try { n.click(); return true; } catch(e){} }
            }
          }
          return false;
        }, maxAllowedBirthYear).catch(() => false);
        if (!fallbackClicked) throw new Error('Could not select any acceptable year in the date picker.');
      }

      await page.waitForTimeout(180);

      // Now pick the month using data-month or visible month text fallbacks
      const monthBtn = page.locator(`button[data-month="${month}"]`);
      if (!await clickIfVisible(monthBtn)) {
        const monthNames = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        await clickIfVisible(page.getByText(new RegExp(`^${monthNames[month]}$`, 'i')));
      }
      await page.waitForTimeout(180);

      // Now pick day using data-day or visible text fallbacks
      const dayBtn = page.locator(`button[data-day="${day}"]`);
      if (!await clickIfVisible(dayBtn)) {
        const clicked = await page.evaluate((d) => {
          const nodes = Array.from(document.querySelectorAll('button, div, span'));
          for (const n of nodes) {
            if ((n.textContent || '').trim() === String(d) && !n.className.includes('date-picker__day--empty')) {
              try { n.click(); return true; } catch(e) {}
            }
          }
          return false;
        }, day).catch(() => false);
        if (!clicked) console.warn('Could not click DOB day', day);
      }

      // Click OK if present (some datepickers require an explicit confirm)
      const okBtn = page.locator('.date-picker__footer-ok').first();
      if (await okBtn.count() > 0 && await okBtn.isVisible()) {
        await safeClick(okBtn);
      } else {
        // fallback: role-based OK button
        const okRole = page.getByRole('button', { name: /^Ok$|^OK$|^OK$/i }).first();
        if (await okRole.count() > 0 && await okRole.isVisible()) await safeClick(okRole);
      }

      await page.waitForTimeout(200);
      console.log('DOB attempted (Y/M/D):', year, month, day);
    } catch (e) {
      // Non-fatal: if DOB flow fails we log and continue with rest of form filling.
      console.warn('DOB flow failed:', e?.message || e);
    }

    // ---------- Nationality selection helper ----------
    // Attempts multiple strategies:
    // - click label/trigger
    // - find searchable input inside the dropdown and type the preference
    // - click the first matching option
    // - fallbacks that search anywhere on the page for matching text
    async function selectNationality(pageLocal, labelRegex, fallbackText = 'Ireland', debugTagPrefix = 'pick-country') {
      let chosenText = fallbackText;

      try {
        // 1) try find label and its parent trigger
        const label = typeof labelRegex === 'string' ? pageLocal.getByText(labelRegex).first() : pageLocal.getByText(labelRegex).first();
        if (await label.count() > 0) {
          const parent = label.locator('..');
          // try common trigger candidates
          const trigger = parent.locator('button, div[role="combobox"], .select, .dropdown, .mat-select-trigger, .v-select__slot, input, select').first();
          if (await trigger.count() > 0 && await trigger.isVisible()) {
            await trigger.click({ force: true }).catch(() => {});
          } else {
            // fallback: click label to focus/activate control
            await label.click({ force: true }).catch(() => {});
          }
        } else {
          // fallback: click first visible generic combobox/select on page
          const genericTrigger = pageLocal.locator('div[role="combobox"], .v-select__slot, .mat-select-trigger, select, input[type="search"]').first();
          if (await genericTrigger.count() > 0 && await genericTrigger.isVisible()) {
            await genericTrigger.click({ force: true }).catch(() => {});
          }
        }

        await pageLocal.waitForTimeout(250);

        // 2) try to find a search input in opened dropdown and type fallbackText
        const searchSelectors = [
          'input[placeholder*="Search"]',
          'input[aria-label*="search"]',
          'input[type="search"]',
          'input[role="combobox"]',
          'input[role="searchbox"]',
          '.v-select__search input',
          'input'
        ];
        let typed = false;
        for (const s of searchSelectors) {
          const sEl = pageLocal.locator(s).first();
          if (await sEl.count() > 0 && await sEl.isVisible()) {
            // try fill, with fallback to click+type
            await sEl.fill(fallbackText).catch(async () => { await sEl.click({ force: true }); await sEl.type(fallbackText); });
            typed = true;
            break;
          }
        }
        if (!typed) {
          // fallback: type via keyboard if dropdown is focused
          await pageLocal.keyboard.type(fallbackText).catch(() => {});
        }

        // give results a little time
        await pageLocal.waitForTimeout(400);

        // 3) click first matching option containing the fallbackText (case-insensitive)
        const optionLocator = pageLocal.locator('div[role="option"], li[role="option"], .v-list-item, .option, .dropdown-item, .mat-option, .list-item').filter({ hasText: new RegExp(fallbackText, 'i') }).first();
        if (await optionLocator.count() > 0 && await optionLocator.isVisible()) {
          await optionLocator.click({ force: true }).catch(() => {});
          try {
            const txt = (await optionLocator.textContent()) || '';
            if (txt.trim()) chosenText = txt.trim();
          } catch (e) { /* ignore text read failure */ }
        } else {
          // wide text fallback: search anywhere on page for the text and click first visible match
          const anyMatch = pageLocal.getByText(new RegExp(fallbackText, 'i')).first();
          if (await anyMatch.count() > 0 && await anyMatch.isVisible()) {
            await anyMatch.click({ force: true }).catch(() => {});
            try { const txt = (await anyMatch.textContent()) || ''; if (txt.trim()) chosenText = txt.trim(); } catch (e) {}
          } else {
            // nothing found — continue silently
          }
        }

        await pageLocal.waitForTimeout(250);
      } catch (err) {
        // Non-fatal: record failure for diagnostics
        console.warn(`${debugTagPrefix}: selection failed:`, err?.message || err);
      }

      console.log(`${debugTagPrefix} selected (attempted):`, chosenText);
      return chosenText;
    }

    // Execute nationality selection (attempts to choose `selectedCountry` / default Ireland)
    await selectNationality(page, /Nationality/i, typeof selectedCountry !== 'undefined' ? selectedCountry : 'Ireland', 'nationality');

    // ---------- Permanent residence country selection helper ----------
    // A more elaborate function dedicated to a custom dropdown widget used for country/region.
    // Steps:
    // 1) Try several ways to open the dropdown overlay
    // 2) Wait for a search input or visible list
    // 3) Type country or click list item
    // 4) Use keyboard navigation fallback, then verify the selection updated on the page
    async function selectPermanentResidence(pageLocal, country = 'Ireland', opts = {}) {
      const {
        openTimeout = 3000,
        searchTimeout = 3000,
        chooseTimeout = 3000,
        overallTimeout = 15000,
        debug = false
      } = opts;

      const start = Date.now();
      function elapsed() { return `${Date.now() - start}ms`; }
      function log(...args) { if (debug) console.log('[selectPermanentResidence]', elapsed(), ...args); }

      if (!pageLocal) throw new Error('selectPermanentResidence requires a Playwright page');

      // selectors tuned to the specific custom dropdown implementation
      const labelSelector = '[data-testid="CountryOrRegionLabel"], [data-testid="CountryOrRegionLabel"]';
      const valueSelector = '[data-testid="CountryOrRegionValue"], .custom-dropdown-list__value';
      const toggleIconSelector = '.custom-dropdown-list__toggle-icon, .custom-dropdown-list__dropdown .custom-dropdown-list__close';
      const searchInputSelector = '[data-testid="CountryOrRegionSearchInput"], input[type="search"].form-control';
      const dropdownRootSelector = '.custom-dropdown-list__dropdown, .custom-dropdown-list__dropdown';
      const listItemContentSelector = '.custom-dropdown-list__item-content';
      const listItemSelector = '.custom-dropdown-list__item';

      // Attempts a series of methods to open the overlay
      async function openDropdown() {
        log('openDropdown: trying label click');
        try {
          const lbl = pageLocal.locator(labelSelector).first();
          if (await lbl.count() > 0) {
            await lbl.click({ timeout: openTimeout });
            return true;
          }
        } catch (e) { log('label click failed', e.message); }

        log('openDropdown: trying current value click');
        try {
          const val = pageLocal.locator(valueSelector).first();
          if (await val.count() > 0) {
            await val.click({ timeout: openTimeout });
            return true;
          }
        } catch (e) { log('current value click failed', e.message); }

        log('openDropdown: trying toggle icon click');
        try {
          const togg = pageLocal.locator('.custom-dropdown-list__toggle-icon, [data-testid="CountryOrRegionToggle"], button[aria-haspopup]');
          if (await togg.count() > 0) {
            await togg.first().click({ timeout: openTimeout });
            return true;
          }
        } catch (e) { log('toggle click failed', e.message); }

        log('openDropdown: fallback: click generic dropdown container');
        try {
          const root = pageLocal.locator('[data-testid="CountryOrRegion"], .custom-dropdown-list').first();
          if (await root.count() > 0) {
            await root.click({ timeout: openTimeout });
            return true;
          }
        } catch (e) { log('fallback root click failed', e.message); }

        return false;
      }

      // Wait for the search input inside overlay (if present)
      async function waitForSearchInput() {
        const input = pageLocal.locator(searchInputSelector).first();
        await input.waitFor({ state: 'visible', timeout: searchTimeout });
        return input;
      }

      // Click list item by visible text using a few targeted strategies
      async function clickListItemByText(text) {
        const candidate = pageLocal.locator(`${listItemSelector} >> ${listItemContentSelector}:has-text("${text}")`).first();
        if (await candidate.count() > 0) {
          await candidate.scrollIntoViewIfNeeded();
          await candidate.click({ timeout: chooseTimeout });
          return true;
        }
        const candidate2 = pageLocal.locator(dropdownRootSelector + ` >> text="${text}"`).first();
        if (await candidate2.count() > 0) {
          await candidate2.scrollIntoViewIfNeeded();
          await candidate2.click({ timeout: chooseTimeout });
          return true;
        }
        const tid = `data-testid=CountryOrRegion${text.replace(/\s+/g, '')}`;
        const candidate3 = pageLocal.locator(tid).first();
        if (await candidate3.count() > 0) {
          await candidate3.click({ timeout: chooseTimeout });
          return true;
        }
        return false;
      }

      // Verify that the selected label shows the expected country text
      async function verifySelection(expected) {
        const sel = pageLocal.locator('[data-testid="CountryOrRegionValue"] .custom-dropdown-list__selected-item-content, .custom-dropdown-list__current-value, .custom-dropdown-list__selected-item-content').first();
        if (await sel.count() === 0) return false;
        const text = (await sel.innerText()).trim();
        log('verifySelection text:', JSON.stringify(text));
        return new RegExp(expected, 'i').test(text) || text.toLowerCase().includes(expected.toLowerCase());
      }

      // ----- Main flow: try to open the overlay, search/type the country, click result, then verify -----
      let opened = false;
      for (let tries = 0; tries < 3 && !opened && (Date.now() - start) < overallTimeout; ++tries) {
        try {
          opened = await openDropdown();
          if (opened) {
            // small pause to allow animation/overlay render
            await pageLocal.waitForTimeout(120);
            break;
          }
        } catch (e) {
          log('open attempt failed:', e.message);
        }
        await pageLocal.waitForTimeout(150);
      }
      if (!opened) throw new Error('Failed to open country dropdown');

      // 2) Wait for search input to be visible (dropdown overlay)
      let searchInput;
      try {
        searchInput = await waitForSearchInput();
      } catch (e) {
        // overlay might already have a visible list (no search). We'll continue anyway.
        log('search input not found, continuing to try selecting by visible list items');
      }

      // 3) Type the country into search input (if present), with small debounce
      if (searchInput) {
        try {
          await searchInput.fill(''); // clear first
          await searchInput.click({ timeout: 500 }).catch(() => {});
          // use keyboard typing to emulate user (some components react better to keyboard)
          await searchInput.type(country, { delay: 40 });
          // give time for client-side filtering
          await pageLocal.waitForTimeout(200);
        } catch (e) {
          log('typing into search failed:', e.message);
        }
      }

      // 4) Try locating and clicking the country item, with keyboard fallback if needed
      let chosen = false;
      const maxPoll = Math.max(3, Math.floor(chooseTimeout / 300));
      for (let attempt = 0; attempt < maxPoll && !chosen && (Date.now() - start) < overallTimeout; ++attempt) {
        try {
          chosen = await clickListItemByText(country);
          if (chosen) break;
        } catch (e) {
          log('clickListItemByText attempt failed:', e.message);
        }
        // try pressing ArrowDown + Enter as fallback (highlight first result)
        try {
          const search = pageLocal.locator(searchInputSelector).first();
          if (await search.count() > 0) {
            await search.press('ArrowDown').catch(() => {});
            await pageLocal.waitForTimeout(120);
            await search.press('Enter').catch(() => {});
            // give page a moment to update
            await pageLocal.waitForTimeout(200);
          }
        } catch (e) {
          log('keyboard fallback failed:', e.message);
        }
        await pageLocal.waitForTimeout(250);
      }

      // 5) Verify selection — the widget sets the selected content in the page
      await pageLocal.waitForTimeout(120);
      // Attempt to close overlay via close button if visible
      const closeBtn = pageLocal.locator('[data-testid="CountryOrRegionClose"], .custom-dropdown-list__close').first();
      if (await closeBtn.count() > 0) {
        try { await closeBtn.click({ timeout: 300 }).catch(() => {}); } catch (e) { log('closeBtn click error', e.message); }
      }

      // final verify: read the selected element text and assert the chosen country is present
      const selectedContentLocator = pageLocal.locator('[data-testid="CountryOrRegionValue"] .custom-dropdown-list__selected-item-content, .custom-dropdown-list__current-value, .custom-dropdown-list__selected-item-content').first();
      let selectedText = '';
      if (await selectedContentLocator.count() > 0) {
        selectedText = (await selectedContentLocator.innerText()).trim();
      } else {
        // fallback: read the whole value element
        const val = pageLocal.locator('[data-testid="CountryOrRegionValue"], .custom-dropdown-list__value').first();
        if (await val.count() > 0) selectedText = (await val.innerText()).trim();
      }

      log('selectedText final:', JSON.stringify(selectedText));

      if (!selectedText || !selectedText.toLowerCase().includes(country.toLowerCase())) {
        const msg = `Country selection did not update to "${country}". Current visible text: "${selectedText}"`;
        throw new Error(msg);
      }

      // success: return the visible selected text
      return selectedText;
    }

    // Execute permanent residence selection for Ireland (or provided country)
    await selectPermanentResidence(page, 'Ireland'); // or any other country name

    // ---------- 6) Address line 1 & 2, Postcode, City, State ----------
    // Fills address fields using targeted selectors first, then falls back to best-effort selectors.
    try {
      const a1 = pick(addresses1);
      const a2 = pick(addresses2);
      const pc = pick(postcodes);
      const city = pick(cities);
      const st = pick(states);

      // targeted selectors (from uploaded DOM)
      const addr1 = page.locator('#Input_AddressLine1, [data-testid="AddressLine1Input"], input[placeholder*="Street number"]').first();
      if (await addr1.count() > 0 && await addr1.isVisible()) {
        await addr1.fill(a1);
      } else {
        const any = page.locator('input').filter({ hasText: /Street|Address/i }).first();
        if (await any.count() > 0) await any.fill(a1).catch(() => {});
      }

      const addr2 = page.locator('#Input_AddressLine2, [data-testid="AddressLine2Input"]').first();
      if (await addr2.count() > 0 && await addr2.isVisible()) await addr2.fill(a2);

      const pcSel = page.locator('input[placeholder*="Postcode"], input[name*=postcode], input[id*=Postcode]').first();
      if (await pcSel.count() > 0 && await pcSel.isVisible()) await pcSel.fill(pc);

      const citySel = page.locator('input[placeholder*="City"], input[name*=city], input[id*=City]').first();
      if (await citySel.count() > 0 && await citySel.isVisible()) await citySel.fill(city);

      const stSel = page.locator('input[placeholder*="State"], input[placeholder*="Province"], input[name*=state], input[id*=State]').first();
      if (await stSel.count() > 0 && await stSel.isVisible()) await stSel.fill(st);

      console.log('Address filled:', a1, a2, pc, city, st);
    } catch (e) {
      console.warn('Address fields failed:', e?.message || e);
    }

    // ---------- Mobile number filling helper ----------
    // This function:
    // - clicks the flag to open a country picker (common on intl phone inputs)
    // - optionally types into an overlay search and selects a country
    // - waits for dial code to appear and then fills the telephone input with random digits
    async function fillMobileNumber(pageLocal, opts = {}) {
      // drop-in helper: clicks flag, selects country, waits for dial code, fills a random local number
      const DEFAULT_TIMEOUT = 1000;
      const {
        country = 'Ireland',
        localDigits = 8,
        flagSelector = '.phone-number-input__flag',
        dialCodeSelectors = [
          '.phone-number-input__dial-code',
          '.phone-number-input__country-code',
          '.iti__selected-dial-code',
          'text=+353'
        ],
        numberInputSelectors = [
          'input[type="tel"]',
          'input[name*="phone"]',
          '.phone-number-input__input',
          'input[placeholder*="Mobile"]'
        ],
        overlaySearchSelectors = [
          'input[placeholder*="Search"]',
          'input[aria-label*="search"]',
          '.country-search input',
          'input[type="search"]'
        ],
        listItemSelectors = [
          `text=${country}`,
          `role=option >> text=${country}`,
          `.country-list >> text=${country}`,
          `.country >> text=${country}`
        ],
        timeout = DEFAULT_TIMEOUT,
      } = opts;

      // Small helper to generate random digits
      function randDigits(n) { let s = ''; for (let i = 0; i < n; ++i) s += Math.floor(Math.random() * 10); return s; }

      console.log(`fillMobileNumber: start -> ${country}`);

      // 1) Open the country selector by clicking the flag
      const flag = pageLocal.locator(flagSelector).first();
      if (await flag.count() === 0) {
        throw new Error(`fillMobileNumber: flag not found: ${flagSelector}`);
      }
      await flag.scrollIntoViewIfNeeded();
      await flag.click({ timeout:30000 });

      // 2) Try typing into overlay search (if present)
      let selected = false;
      for (const sel of overlaySearchSelectors) {
        try {
          const search = pageLocal.locator(sel).first();
          if (await search.count() > 0) {
            await search.waitFor({ state: 'visible', timeout: 2000 }).catch(() => {});
            await search.fill(country, { timeout: 1500 }).catch(() => {});
            await pageLocal.waitForTimeout(300);
            await search.press('Enter').catch(() => {});
            selected = true;
            break;
          }
        } catch (e) { /* ignore */ }
      }

      // 3) If not selected, try clicking a visible country list item
      if (!selected) {
        for (const li of listItemSelectors) {
          try {
            const item = pageLocal.locator(li).first();
            if (await item.count() > 0) {
              await item.scrollIntoViewIfNeeded();
              await item.click({ timeout: 2000 });
              selected = true;
              break;
            }
          } catch (e) { /* ignore */ }
        }
      }

      // 4) Fallback: generic text match
      if (!selected) {
        try {
          const fallback = pageLocal.locator(`text=${country}`).first();
          if (await fallback.count() > 0) {
            await fallback.click({ timeout: 2000 });
            selected = true;
          }
        } catch (e) { /* ignore */ }
      }

      // 5) Wait for the dial code to appear (best-effort)
      let dialCodeText = null;
      const end = Date.now() + timeout;
      while (!dialCodeText && Date.now() < end) {
        for (const s of dialCodeSelectors) {
          try {
            const loc = pageLocal.locator(s).first();
            if (await loc.count() > 0) {
              if (await loc.isVisible().catch(() => false)) { dialCodeText = (await loc.innerText()).trim(); break; }
            }
          } catch (e) { /* ignore */ }
        }
        if (!dialCodeText) await pageLocal.waitForTimeout(200);
      }

      if (dialCodeText) console.log('fillMobileNumber: detected dial code ->', dialCodeText);
      else console.warn('fillMobileNumber: dial code not detected (continuing)');

      // 6) Fill the phone input (append random digits after prefilled dial code)
      let filled = false;
      for (const sel of numberInputSelectors) {
        try {
          const numInput = pageLocal.locator(sel).first();
          if (await numInput.count() > 0) {
            await numInput.waitFor({ state: 'visible', timeout: 2000 }).catch(() => {});

            // Read existing prefilled dial code (e.g. "+353")
            const existingValue = (await numInput.inputValue().catch(() => ''))?.trim() || '';
            const randomLocal = randDigits(localDigits);

            // Append digits to existing dial code
            const finalValue = existingValue
              ? `${existingValue}${randomLocal}`
              : randomLocal;

            // Clear first (to ensure controlled components react properly)
            await numInput.fill('');
            await numInput.type(finalValue, { delay: 100 }); // gradual typing mimics real user

            console.log(`fillMobileNumber: appended random digits -> ${finalValue}`);
            filled = true;

            // Validate final input value
            const afterFill = (await numInput.inputValue().catch(() => '')).trim();
            console.log(`fillMobileNumber: final textbox value = "${afterFill}"`);
            break;
          }
        } catch (e) { /* ignore */ }
      }

      // 7) Ultimate fallback: find input near the flag and fill
      if (!filled) {
        try {
          const parent = flag.locator('..');
          const fallbackInput = parent.locator('input[type="tel"], input').first();
          if (await fallbackInput.count() > 0) {
            const existingValue = (await fallbackInput.inputValue().catch(() => ''))?.trim() || '';
            const randomLocal = randDigits(localDigits);
            const finalValue = existingValue ? `${existingValue}${randomLocal}` : randomLocal;

            await fallbackInput.fill('');
            await fallbackInput.type(finalValue, { delay: 100 });

            console.log('fillMobileNumber: filled via parent fallback ->', finalValue);

            const afterFill = (await fallbackInput.inputValue().catch(() => '')).trim();
            console.log(`fillMobileNumber: final textbox value = "${afterFill}"`);
            filled = true;
          }
        } catch (e) { /* ignore */ }
      }

      if (!filled) throw new Error('fillMobileNumber: failed to locate/ fill phone input; adjust selectors');

      // Return some diagnostics about what was filled
      return { countrySelected: country, dialCode: dialCodeText, localDigits };
    }

    // Execute phone filling for Ireland (8 local digits used here)
    await fillMobileNumber(page, { country: 'Ireland', localDigits: 8 });

    // ---------- save ---------------------------
    // Attempts to click a Save/Continue/Confirm button using role-based selectors first,
    // then falls back to searching generic buttons with 'Save' text.
    try {
      await page.waitForTimeout(200);
      const saveBtn = page.getByRole('button', { name: /Save|Continue|Confirm and continue/i }).first();
      if (await saveBtn.count() > 0 && await saveBtn.isVisible()) {
        await safeClick(saveBtn);
        console.log('Clicked Save/Continue');
      } else {
        const big = page.locator('button').filter({ hasText: /Save/i }).first();
        if (await big.count() > 0 && await big.isVisible()) { await safeClick(big); console.log('Clicked Save (big)'); }
        else console.warn('Save button not found; leaving form as-is');
      }
      // Wait for possible navigation / background network activity
      await page.waitForLoadState('networkidle').catch(() => {});
      await page.waitForTimeout(500);
    } catch (e) {
      // Non-fatal: log and continue (caller may inspect page state)
      console.warn('Save click failed', e?.message || e);
    }
  }
}
