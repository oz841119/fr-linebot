require('dotenv').config();
const dbClient = require('../db.js')
const db = dbClient.db("line_bot")

function getAllMessage(lineUserId, message) {
  return new Promise(async resolve => {
    await dbClient.connect()
    const lineMesssageColl = await db.collection('line_user_message');
    const cursor = await lineMesssageColl.find().toArray()
    resolve(cursor)
  })
}

process.on('SIGINT', function() {
  console.log('結束DB連線');
  dbClient.close()
  process.exit(0);
});
module.exports = getAllMessage