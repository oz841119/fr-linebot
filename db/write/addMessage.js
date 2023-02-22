const dbClient = require('../db.js')
const dayjs = require('dayjs')

async function writeDb(lineUserId, message) {
  await dbClient.connect()
  const lineMesssageColl = await dbClient.db("line_bot").collection('line_user_message');
  await lineMesssageColl.insertOne({date: dayjs().format('YYYY-MM-DD'), line_user_id: lineUserId, message: message})
  dbClient.close()
  Promise.resolve()
}
module.exports = writeDb