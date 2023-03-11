const dbClient = require('../db/db.js')
const db = dbClient.db("fitness_record_db")

async function addActionRecord(lineUserId, tags) {
    const lineUserIdColl = await db.collection('user_action_tags');
    const query = {line_user_id: lineUserId}
    const options = { upsert: true };
    const update = {
        $addToSet: {
            tags: {$each: tags}
        }
    }
    const result = await lineUserIdColl.updateOne(query, update, options);
    Promise.resolve()
}

module.exports = addActionRecord