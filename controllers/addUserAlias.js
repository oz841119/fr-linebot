const dbClient = require('../db/db.js')
const db = dbClient.db("fitness_record_db")

async function writeDb(lineUserId, alias) {
  await dbClient.connect()
  const lineMesssageColl = await db.collection('users')
  const query = {line_user_id: lineUserId}
  const update = {
    $set: {
      line_user_id: lineUserId,
      alias: alias
    }
  }
  const options = { upsert: true }
  await lineMesssageColl.updateOne(query, update, options)
  Promise.resolve()
}
module.exports = writeDb