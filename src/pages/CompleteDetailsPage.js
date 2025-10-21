export default class CompleteDetails {
  // Store the Playwright page object so all methods operate on the same browser page.
  constructor(page) {
    this.page = page;
  }

  // Single entry point: fill the "Complete Details" form.
  // This method attempts to complete the form defensively: it tries many selectors
  // and fallbacks so it works across slightly different deployments of the page.
  // It never throws for non-critical failures; instead it logs and continues so
  // downstream steps still run and caller can inspect the page state.
  async fillCompleteDetails(selectedCountry = 'Ireland') {
    const page = this.page;

    // Decide which country to use for country-specific fields; default to 'Ireland'.
    const countryToUse = (typeof selectedCountry !== 'undefined' && selectedCountry) ? selectedCountry : 'Ireland';
    console.log('Filling Complete Details using country:', countryToUse);

    // Utility to pick a random element from an array when we need sample data.
    const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];

    // --- Sample data pools (focused on Ireland examples) ---
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
    // Scrolls the element into view and attempts to click it.
    // First tries a force click (good for covered elements), then a normal click.
    // Adds a short pause afterwards to let the UI stabilise.
    async function safeClick(locator) {
      await locator.scrollIntoViewIfNeeded().catch(() => {});
      await locator.click({ force: true }).catch(async () => { await locator.click().catch(() => {}); });
      await page.waitForTimeout(150);
    }

    // ---------- 1) Given names ----------
    // Try precise selectors first (ids / data-testid); if those aren't present
    // fill the first input found inside a 'Personal details' section.
    try {
      const first = pick(givenNames);
      const givenLoc = page.locator('#Input_GivenNames, [data-testid="GivenNamesInput"]').first();
      if (await givenLoc.count() > 0 && await givenLoc.isVisible()) {
        await givenLoc.fill(first);
      } else {
        // fallback: first visible input inside the personal details section
        const any = page.locator('section:has-text("Personal details") input').first();
        if (await any.count() > 0 && await any.isVisible()) await any.fill(first);
      }
      console.log('Given names filled:', first);
    } catch (e) {
      // Non-fatal: log failure and continue
      console.warn('Given name fill failed:', e?.message || e);
    }

    // ---------- 2) Surname ----------
    // Mirror the given-names strategy: try targeted selectors, else fallback to
    // the second input inside the personal-details area.
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

    // ---------- 3) Date of birth (ensure >=16 years) ----------
    // This block attempts multiple approaches to interact with a datepicker:
    // - open the control using common selectors
    // - choose a random year/month/day that results in age >= 16
    // - try several UI patterns (data-year/data-month/data-day buttons,
    //   previous/next navigation, direct DOM scanning) so it works across variants
    try {
      // Try to open DOB field using common input selectors or visible labels
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
      // maximum birth year allowed so that the person is at least 16
      const maxAllowedBirthYear = currentYear - 16;

      // choose a random year in a reasonable range, and safe month/day values
      const minYear = 1945;
      const year = Math.floor(Math.random() * (maxAllowedBirthYear - minYear + 1)) + minYear;
      const month = Math.floor(Math.random() * 12); // 0..11
      const day = Math.floor(Math.random() * 28) + 1; // 1..28 (safe day)

      // Helper: try clicking any visible match from a locator (returns true if clicked)
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

      // Try to open the year-selection area and select the chosen year
      const headerYearBtn = page.locator('.date-picker__month-year').first();
      await clickIfVisible(headerYearBtn);
      await page.waitForTimeout(200);

      // Primary attempt: click button with data-year attribute
      const yearBtn = page.locator(`button[data-year="${year}"]`);
      let clickedYear = await clickIfVisible(yearBtn);

      // If the desired year isn't visible, attempt to navigate pages or scan DOM
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
          // Page through years a few times attempting to find the desired year
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

      // If still not found, choose the nearest acceptable year from the DOM (<= maxAllowedBirthYear)
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

      // Select month: try data-month first, then match month name text
      const monthBtn = page.locator(`button[data-month="${month}"]`);
      if (!await clickIfVisible(monthBtn)) {
        const monthNames = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        await clickIfVisible(page.getByText(new RegExp(`^${monthNames[month]}$`, 'i')));
      }
      await page.waitForTimeout(180);

      // Select day: try data-day first then scan visible day text
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

      // Confirm datepicker if an OK button exists, otherwise rely on implicit close
      const okBtn = page.locator('.date-picker__footer-ok').first();
      if (await okBtn.count() > 0 && await okBtn.isVisible()) {
        await safeClick(okBtn);
      } else {
        const okRole = page.getByRole('button', { name: /^Ok$|^OK$|^OK$/i }).first();
        if (await okRole.count() > 0 && await okRole.isVisible()) await safeClick(okRole);
      }

      await page.waitForTimeout(200);
      console.log('DOB attempted (Y/M/D):', year, month, day);
    } catch (e) {
      // Non-fatal: if DOB can't be set we continue; caller can examine page afterwards.
      console.warn('DOB flow failed:', e?.message || e);
    }

    // ---------- Nationality selection helper ----------
    // Attempts multiple interaction patterns to choose a nationality from a dropdown
    // or searchable combobox: open the control, type into any search input present,
    // and click the first matching option.
    async function selectNationality(pageLocal, labelRegex, fallbackText = 'Ireland', debugTagPrefix = 'pick-country') {
      let chosenText = fallbackText;

      try {
        // 1) locate label or trigger then try opening the dropdown
        const label = typeof labelRegex === 'string' ? pageLocal.getByText(labelRegex).first() : pageLocal.getByText(labelRegex).first();
        if (await label.count() > 0) {
          const parent = label.locator('..');
          const trigger = parent.locator('button, div[role="combobox"], .select, .dropdown, .mat-select-trigger, .v-select__slot, input, select').first();
          if (await trigger.count() > 0 && await trigger.isVisible()) {
            await trigger.click({ force: true }).catch(() => {});
          } else {
            // Clicking the label can sometimes focus/activate the control
            await label.click({ force: true }).catch(() => {});
          }
        } else {
          // fallback: click a generic combobox-like element on the page
          const genericTrigger = pageLocal.locator('div[role="combobox"], .v-select__slot, .mat-select-trigger, select, input[type="search"]').first();
          if (await genericTrigger.count() > 0 && await genericTrigger.isVisible()) {
            await genericTrigger.click({ force: true }).catch(() => {});
          }
        }

        await pageLocal.waitForTimeout(250);

        // 2) try to find and type into a search input inside the opened overlay
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
            // Fill or emulate typing if fill fails
            await sEl.fill(fallbackText).catch(async () => { await sEl.click({ force: true }); await sEl.type(fallbackText); });
            typed = true;
            break;
          }
        }
        if (!typed) {
          // If no specific input found, attempt to type using keyboard (dropdown likely focused)
          await pageLocal.keyboard.type(fallbackText).catch(() => {});
        }

        // Allow time for filtering results to appear
        await pageLocal.waitForTimeout(400);

        // 3) attempt to click first option that contains the fallback text
        const optionLocator = pageLocal.locator('div[role="option"], li[role="option"], .v-list-item, .option, .dropdown-item, .mat-option, .list-item').filter({ hasText: new RegExp(fallbackText, 'i') }).first();
        if (await optionLocator.count() > 0 && await optionLocator.isVisible()) {
          await optionLocator.click({ force: true }).catch(() => {});
          try {
            const txt = (await optionLocator.textContent()) || '';
            if (txt.trim()) chosenText = txt.trim();
          } catch (e) { /* ignore */ }
        } else {
          // wide fallback: search anywhere on page for matching text and click it
          const anyMatch = pageLocal.getByText(new RegExp(fallbackText, 'i')).first();
          if (await anyMatch.count() > 0 && await anyMatch.isVisible()) {
            await anyMatch.click({ force: true }).catch(() => {});
            try { const txt = (await anyMatch.textContent()) || ''; if (txt.trim()) chosenText = txt.trim(); } catch (e) {}
          }
        }

        await pageLocal.waitForTimeout(250);
      } catch (err) {
        // Non-fatal: record the failure for diagnostics
        console.warn(`${debugTagPrefix}: selection failed:`, err?.message || err);
      }

      console.log(`${debugTagPrefix} selected (attempted):`, chosenText);
      return chosenText;
    }

    // Choose nationality using the helper above (attempts the selectedCountry or 'Ireland')
    await selectNationality(page, /Nationality/i, typeof selectedCountry !== 'undefined' ? selectedCountry : 'Ireland', 'nationality');

    // ---------- Permanent residence selection helper ----------
    // Dedicated function to open a custom country dropdown, search/type the country,
    // click the matching entry and verify the widget updated the visible text.
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

      // CSS selectors scoped to the custom dropdown implementation used in some builds
      const labelSelector = '[data-testid="CountryOrRegionLabel"], [data-testid="CountryOrRegionLabel"]';
      const valueSelector = '[data-testid="CountryOrRegionValue"], .custom-dropdown-list__value';
      const toggleIconSelector = '.custom-dropdown-list__toggle-icon, .custom-dropdown-list__dropdown .custom-dropdown-list__close';
      const searchInputSelector = '[data-testid="CountryOrRegionSearchInput"], input[type="search"].form-control';
      const dropdownRootSelector = '.custom-dropdown-list__dropdown, .custom-dropdown-list__dropdown';
      const listItemContentSelector = '.custom-dropdown-list__item-content';
      const listItemSelector = '.custom-dropdown-list__item';

      // Try a number of ways to open the overlay (click label, current value, toggle icon, or root)
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

      // Wait for a search input inside the overlay; throws on timeout so caller can fallback.
      async function waitForSearchInput() {
        const input = pageLocal.locator(searchInputSelector).first();
        await input.waitFor({ state: 'visible', timeout: searchTimeout });
        return input;
      }

      // Try several strategies to click a list item whose visible text matches 'text'
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

      // Verify that the widget displays the expected country text after selection
      async function verifySelection(expected) {
        const sel = pageLocal.locator('[data-testid="CountryOrRegionValue"] .custom-dropdown-list__selected-item-content, .custom-dropdown-list__current-value, .custom-dropdown-list__selected-item-content').first();
        if (await sel.count() === 0) return false;
        const text = (await sel.innerText()).trim();
        log('verifySelection text:', JSON.stringify(text));
        return new RegExp(expected, 'i').test(text) || text.toLowerCase().includes(expected.toLowerCase());
      }

      // Main flow: open overlay, optionally type into search input, try clicking item,
      // and finally verify the widget updated. Multiple retries and fallbacks included.
      let opened = false;
      for (let tries = 0; tries < 3 && !opened && (Date.now() - start) < overallTimeout; ++tries) {
        try {
          opened = await openDropdown();
          if (opened) {
            await pageLocal.waitForTimeout(120);
            break;
          }
        } catch (e) {
          log('open attempt failed:', e.message);
        }
        await pageLocal.waitForTimeout(5000);
      }
      if (!opened) throw new Error('Failed to open country dropdown');

      // Try to locate a search input in the overlay; if none found that's acceptable.
      let searchInput;
      try {
        searchInput = await waitForSearchInput();
      } catch (e) {
        log('search input not found, continuing to try selecting by visible list items');
      }

      // If a search input exists, type the country into it to filter results.
      if (searchInput) {
        try {
          await searchInput.fill('');
          await searchInput.click({ timeout: 500 }).catch(() => {});
          await searchInput.type(country, { delay: 40 });
          await pageLocal.waitForTimeout(200);
        } catch (e) {
          log('typing into search failed:', e.message);
        }
      }

      // Try clicking the country list item, with keyboard fallback (ArrowDown + Enter)
      let chosen = false;
      const maxPoll = Math.max(3, Math.floor(chooseTimeout / 300));
      for (let attempt = 0; attempt < maxPoll && !chosen && (Date.now() - start) < overallTimeout; ++attempt) {
        try {
          chosen = await clickListItemByText(country);
          if (chosen) break;
        } catch (e) {
          log('clickListItemByText attempt failed:', e.message);
        }
        try {
          const search = pageLocal.locator(searchInputSelector).first();
          if (await search.count() > 0) {
            await search.press('ArrowDown').catch(() => {});
            await pageLocal.waitForTimeout(120);
            await search.press('Enter').catch(() => {});
            await pageLocal.waitForTimeout(200);
          }
        } catch (e) {
          log('keyboard fallback failed:', e.message);
        }
        await pageLocal.waitForTimeout(250);
      }

      // Optionally close the overlay and then read the visible selected value for verification
      await pageLocal.waitForTimeout(120);
      const closeBtn = pageLocal.locator('[data-testid="CountryOrRegionClose"], .custom-dropdown-list__close').first();
      if (await closeBtn.count() > 0) {
        try { await closeBtn.click({ timeout: 300 }).catch(() => {}); } catch (e) { log('closeBtn click error', e.message); }
      }

      const selectedContentLocator = pageLocal.locator('[data-testid="CountryOrRegionValue"] .custom-dropdown-list__selected-item-content, .custom-dropdown-list__current-value, .custom-dropdown-list__selected-item-content').first();
      let selectedText = '';
      if (await selectedContentLocator.count() > 0) {
        selectedText = (await selectedContentLocator.innerText()).trim();
      } else {
        const val = pageLocal.locator('[data-testid="CountryOrRegionValue"], .custom-dropdown-list__value').first();
        if (await val.count() > 0) selectedText = (await val.innerText()).trim();
      }

      log('selectedText final:', JSON.stringify(selectedText));

      if (!selectedText || !selectedText.toLowerCase().includes(country.toLowerCase())) {
        const msg = `Country selection did not update to "${country}". Current visible text: "${selectedText}"`;
        throw new Error(msg);
      }

      // Return the visible text shown by the widget as confirmation of the selection
      return selectedText;
    }

    // Use the permanent-residence selector to set 'Ireland' (or other country if changed)
    await selectPermanentResidence(page, 'Ireland'); // or any other country name

    // ---------- 6) Address fields ----------
    // Fill address line 1/2, postcode, city and state using targeted selectors first
    // and gentle fallbacks if those selectors are not present.
    try {
      const a1 = pick(addresses1);
      const a2 = pick(addresses2);
      const pc = pick(postcodes);
      const city = pick(cities);
      const st = pick(states);

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
    // This helper opens a phone-country selector (flag), chooses a country,
    // detects the dial code if possible, then fills the telephone input with
    // a reasonable random local number. Multiple selector fallbacks are used.
    async function fillMobileNumber(pageLocal, opts = {}) {
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

      // generate n random digits as string
      function randDigits(n) { let s = ''; for (let i = 0; i < n; ++i) s += Math.floor(Math.random() * 10); return s; }

      console.log(`fillMobileNumber: start -> ${country}`);

      // 1) click the flag icon to open country picker overlay
      const flag = pageLocal.locator(flagSelector).first();
      if (await flag.count() === 0) {
        throw new Error(`fillMobileNumber: flag not found: ${flagSelector}`);
      }
      await flag.scrollIntoViewIfNeeded();
      await flag.click({ timeout:30000 });

      // 2) try to type into overlay search input if present
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

      // 3) if not selected by typing, try clicking a visible list item
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

      // 4) generic text fallback: find visible text match and click
      if (!selected) {
        try {
          const fallback = pageLocal.locator(`text=${country}`).first();
          if (await fallback.count() > 0) {
            await fallback.click({ timeout: 2000 });
            selected = true;
          }
        } catch (e) { /* ignore */ }
      }

      // 5) wait (best-effort) for dial code element to appear so we can read it
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

      // 6) find the telephone input and type a local random number (append to any prefilled dial code)
      let filled = false;
      for (const sel of numberInputSelectors) {
        try {
          const numInput = pageLocal.locator(sel).first();
          if (await numInput.count() > 0) {
            await numInput.waitFor({ state: 'visible', timeout: 2000 }).catch(() => {});

            const existingValue = (await numInput.inputValue().catch(() => ''))?.trim() || '';
            const randomLocal = randDigits(localDigits);

            const finalValue = existingValue
              ? `${existingValue}${randomLocal}`
              : randomLocal;

            await numInput.fill('');
            await numInput.type(finalValue, { delay: 100 });

            console.log(`fillMobileNumber: appended random digits -> ${finalValue}`);
            filled = true;

            const afterFill = (await numInput.inputValue().catch(() => '')).trim();
            console.log(`fillMobileNumber: final textbox value = "${afterFill}"`);
            break;
          }
        } catch (e) { /* ignore */ }
      }

      // 7) final fallback: locate an input near the flag element and fill it
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

      // return some diagnostics so caller can log what was filled
      return { countrySelected: country, dialCode: dialCodeText, localDigits };
    }

    // Fill mobile number for Ireland using 8 local digits in this script.
    await fillMobileNumber(page, { country: 'Ireland', localDigits: 8 });

    // ---------- save / continue ----------
    // Try role-based button lookup first, then fall back to a visible button with "Save" text.
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
      // Wait for any navigation or background activity triggered by save
      await page.waitForLoadState('networkidle').catch(() => {});
      await page.waitForTimeout(500);
    } catch (e) {
      // Non-fatal: log and continue; caller may decide what to do next.
      console.warn('Save click failed', e?.message || e);
    }
  }
}
