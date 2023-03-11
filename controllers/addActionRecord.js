require('dotenv').config();
const dbClient = require('../db/db.js')
const db = dbClient.db("line_user_action_record")


async function addActionRecord(lineUserId, records) {
    await dbClient.connect()
    const lineUserIdColl = await db.collection(lineUserId);
    records.forEach(record => {
        record.writeTime = new Date().getTime()
    })
    const result = await lineUserIdColl.insertMany(records);
    Promise.resolve()
}

module.exports = addActionRecord
