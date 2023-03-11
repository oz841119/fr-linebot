const dbClient = require('../db/db.js')
const db = dbClient.db("fitness_record_db")

function getActionTags(lineUserId) {
  return new Promise(async resolve => {
    const userActionTags = await db.collection('user_action_tags')
    const cursor = await userActionTags.findOne({line_user_id: lineUserId}, {projection: {_id: 0, tags: 1}})
    resolve(cursor.tags)
  })
}

process.on('SIGINT', function() {
  console.log('結束DB連線');
  dbClient.close()
  process.exit(0);
});
module.exports = getActionTags