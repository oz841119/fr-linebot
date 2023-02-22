const dbClient = require('../db.js')
const dayjs = require('dayjs')
const utc = require('dayjs/plugin/timezone')
const timezone = require('dayjs/plugin/utc')
dayjs.extend(timezone)
dayjs.extend(utc)

async function writeDb(lineUserId, message) {
  await dbClient.connect()
  const lineMesssageColl = await dbClient.db("line_bot").collection('line_user_message');
  await lineMesssageColl.insertOne({date: dayjs().tz('Asia/Taipei').format('YYYY-MM-DD'), line_user_id: lineUserId, message: message})
  dbClient.close()
  Promise.resolve()
}
module.exports = writeDb