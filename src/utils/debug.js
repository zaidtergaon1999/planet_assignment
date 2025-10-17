// src/utils/debug.js
const fs = require('fs');

async function saveDebug(page, tag = 'debug') {
  const debugDir = 'debug-playwright';
  try {
    if (!fs.existsSync(debugDir)) fs.mkdirSync(debugDir);
  } catch (e) { /* ignore */ }
  const t = Date.now();
  try { await page.screenshot({ path: `${debugDir}/${tag}-${t}.png`, fullPage: true }); } catch (e) {}
  try { fs.writeFileSync(`${debugDir}/${tag}-${t}.html`, await page.content(), 'utf8'); } catch (e) {}
  console.log(`Saved debug artifacts: ${debugDir}/${tag}-${t}.*`);
}

module.exports = { saveDebug };
