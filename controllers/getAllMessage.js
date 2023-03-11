require('dotenv').config();
const dbClient = require('../db/db.js')
const db = dbClient.db("line_bot")

function getAllMessage(lineUserId, message) {
  return new Promise(async resolve => {
    await dbClient.connect()
    const lineMesssageColl = await db.collection('line_user_message');
    const cursor = await lineMesssageColl.find().toArray()
    resolve(cursor)
  })
}
module.exports = getAllMessage