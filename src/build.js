// Inlines the assets into a single self-contained index.html.
const fs = require('fs'), path = require('path');
const root = path.join(__dirname, '..');
const b64 = (f, mime) => `data:${mime};base64,` + fs.readFileSync(path.join(root, 'assets', f)).toString('base64');
const html = fs.readFileSync(path.join(__dirname, 'index.src.html'), 'utf8')
  .replace('__CARD_DATA__', b64('id-card.png', 'image/png'))
  .replace('__BG_DATA__', b64('background.webp', 'image/webp'));
fs.writeFileSync(path.join(root, 'index.html'), html);
console.log('index.html', (html.length / 1024).toFixed(0) + ' KB');
