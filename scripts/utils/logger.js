const chalk = require('chalk')
const Logger = {}

Logger.clear = function () {
  process.stdout.write('\033c')
}

Logger.info = function () {
  console.log.apply(console, [ `${chalk.blue('[info]')}` , ...arguments ])
}

Logger.error = function () {
  console.log.apply(console, [ `${chalk.red('[error]')}` , ...arguments ])
}

Logger.warn = function () {
  console.log.apply(console, [ `${chalk.yellow('[warning]')}` , ...arguments ])
}

Logger.success = function () {
  console.log.apply(console, [ `${chalk.green('[success]')}` , ...arguments ])
}

module.exports = Logger