require('dotenv').config();
const dbClient = require('../db.js')
const db = dbClient.db("line_user_action_record")


async function addActionRecord(lineUserId, record) {
    await dbClient.connect()
    const lineUserIdColl = await db.collection(lineUserId);
    const doc = record
    doc.writeTime = new Date().getTime()
    const result = await lineUserIdColl.insertOne(doc);
    Promise.resolve()
}

module.exports = addActionRecord
