require('dotenv').config();
const dbClient = require('../db/db.js')
const db = dbClient.db("line_bot")

function getUserMessage(lineUserId) {
  return new Promise(async resolve => {
    await dbClient.connect()
    const lineMesssageColl = await db.collection('line_user_message');
    const cursor = await lineMesssageColl.find({line_user_id: lineUserId}).toArray()
    resolve(cursor)
  })
}

process.on('SIGINT', function() {
  console.log('結束DB連線');
  dbClient.close()
  process.exit(0);
});
module.exports = getUserMessage