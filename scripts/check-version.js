const fs = require('fs');
const os = require('os');
const path = require('path');

const appRoot = process.cwd();
const packageJsonUrl = path.resolve(`${appRoot}/package.json`);
const versionUrl = path.resolve(`${appRoot}/packages/dd-trace/lib/version.js`);
const pJson = require(packageJsonUrl);
const version = require(versionUrl);

if (pJson.version !== version) {
  const content = `module.exports = '${pJson.version}'\n`;
  fs.writeFileSync(versionUrl, content.replace(/\n/g, os.EOL));
  console.log(pJson.version)
  process.exit(2);
}
process.exit(0);
