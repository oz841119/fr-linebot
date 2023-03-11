const dbClient = require('../db.js')
const dayjs = require('dayjs')
const utc = require('dayjs/plugin/timezone')
const timezone = require('dayjs/plugin/utc')
dayjs.extend(timezone)
dayjs.extend(utc)

const db = dbClient.db("fitness_record_db")

async function writeDb(lineUserId, message) {
  await dbClient.connect()
  const lineMesssageColl = await db.collection('line_message');
  await lineMesssageColl.insertOne({time: new Date(), line_user_id: lineUserId, message: message})
  Promise.resolve()
}
module.exports = writeDb