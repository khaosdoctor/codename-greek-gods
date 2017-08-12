const parser = require('./parser')
const Codename = require('@khaosdoctor/codename')(parser)

function parse (version) {
  return Codename.parse(version)
}

module.exports = { parse }
