const packageJson = require('package-json')
const pJson = require('../package.json')

packageJson(pJson.name.toLowerCase()).then((result) => {
  if (result.version === pJson.version) {
    // eslint-disable-next-line no-console
    console.log('This version of package has been already released')
    process.exit(1)
  } else {
    // eslint-disable-next-line no-console
    console.log(pJson.version)
    process.exit(0)
  }
}).catch(() => {
  process.exit(0)
})
