const fs = require('fs');
const path = require('path');

const versionFile = path.join(__dirname, '../.version');

if (fs.existsSync(versionFile)) {
  const version = fs.readFileSync(versionFile, 'utf8').trim();
  console.log(version);
} else {
  console.log('1.0.0');
}

