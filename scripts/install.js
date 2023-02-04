const concurrently = require("concurrently")
const chalk = require('chalk')
const Logger = require("./utils/logger")
const start = (new Date()).getTime()

Logger.info('Installing application, please wait...')

const { result } = concurrently([
  { name: chalk.magenta('setup_server'), command: 'cd server && yarn' },
  { name: chalk.cyan('setup_client'), command: 'cd client && yarn' }
], {
  prefix: 'name',
  killOthers: ['failure'],
  restartTries: 0
})

result.then((data) => {
  const finish = (new Date()).getTime()
  Logger.success(`install success in ${Math.round((finish - start) / 1000)}s`)
  process.exit(0)
}, (err) => {
  Logger.error(err)
  Logger.error(`error occured`)
  process.exit(0)
})