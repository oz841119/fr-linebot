const dbClient = require('../db.js')
const dayjs = require('dayjs')
const timezone = require('dayjs/plugin/timezone')
dayjs.extend(timezone)

async function writeDb(lineUserId, message) {
  await dbClient.connect()
  const lineMesssageColl = await dbClient.db("line_bot").collection('line_user_message');
  await lineMesssageColl.insertOne({date: dayjs().tz('Asia/Taipei').format('YYYY-MM-DD'), line_user_id: lineUserId, message: message})
  dbClient.close()
  Promise.resolve()
}
module.exports = writeDb