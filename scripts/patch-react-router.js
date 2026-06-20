const fs = require('fs');
const path = require('path');

const pkgPath = path.join(__dirname, '..', 'node_modules', 'react-router', 'package.json');
const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));

const dot = pkg.exports['.'];
let changed = false;

function swapDevToProd(obj) {
  if (typeof obj === 'string') {
    const swapped = obj.replace('/dist/development/', '/dist/production/');
    if (swapped !== obj) changed = true;
    return swapped;
  }
  if (typeof obj === 'object' && obj !== null) {
    return Object.fromEntries(Object.entries(obj).map(([k, v]) => [k, swapDevToProd(v)]));
  }
  return obj;
}

for (const condition of ['module', 'import', 'default']) {
  if (dot[condition]) dot[condition] = swapDevToProd(dot[condition]);
}

pkg.exports['.'] = dot;
fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2));
console.log(changed ? 'Patched react-router to use production builds' : 'react-router already patched');
