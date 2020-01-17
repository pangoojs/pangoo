const fs = require('fs')
const path = require('path')

const PangooPackages = fs.readdirSync(path.resolve(__dirname, 'packages/@pangoojs'))

module.exports = {
  extends: [
    '@commitlint/config-conventional'
  ],
  rules: {
    'scope-enum': [
      2,
      'always',
      [
        'docs',
        'pangoo',
        'examples',
        ...PangooPackages
      ].map(name => `$${name}`).concat('release')
    ],
    'subject-case': [0, 'never', ['sentence-case', 'start-case', 'pascal-case', 'upper-case']],
  }
}
