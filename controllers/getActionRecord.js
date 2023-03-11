const dbClient = require('../db/db.js')
const db = dbClient.db("line_user_action_record")

function getActionRecord(lineUserId) {
  return new Promise(async resolve => {
    await dbClient.connect()
    const lineMesssageColl = await db.collection(lineUserId);
    const cursor = await lineMesssageColl.find().toArray()
    resolve(cursor)
  })
}

process.on('SIGINT', function() {
  console.log('結束DB連線');
  dbClient.close()
  process.exit(0);
});
module.exports = getActionRecord