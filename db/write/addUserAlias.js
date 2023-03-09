const dbClient = require('../db.js')
const db = dbClient.db("users")

async function writeDb(lineUserId, alias) {
  await dbClient.connect()
  const lineMesssageColl = await db.collection('line_users')
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