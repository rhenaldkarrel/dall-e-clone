const concurrently = require("concurrently")
const chalk = require('chalk')
const Logger = require("./utils/logger")
const start = (new Date()).getTime()

Logger.info(`DEVELOPMENT MODE`)

const { result } = concurrently([
  { name: chalk.magenta('dev_server'), command: 'cd server && yarn dev' },
  { name: chalk.cyan('dev_client'), command: 'cd client && yarn dev' }
], {
  prefix: 'name',
  killOthers: ['failure'],
  restartTries: 0
})

result.then((data) => {
  const finish = (new Date()).getTime()
  Logger.success(`development was run for ${Math.round((finish - start) / 1000)}s`)
  process.exit(0)
}, (err) => {
  console.log(err)
  Logger.error(`error occurred`)
  process.exit(0)
})