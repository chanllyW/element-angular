const ghpages = require('gh-pages')
const path = require('path')
const root = require('app-root-path').path
const pkg = require(`${root}/package.json`)
const npmMessage = process.env.npm_config_message

if (!npmMessage || npmMessage === '%s') return console.log('need commit message! [--m=""]')
const message = `publish: v${pkg.version} ${npmMessage}`

console.log('project publishing...')
console.log(`commit message: ${message}`)
ghpages.clean()
ghpages.publish(path.join(__dirname, '../dist'), { message },
    err => console.log(`publish ${!err ? 'success' : 'failed' + err}`))
