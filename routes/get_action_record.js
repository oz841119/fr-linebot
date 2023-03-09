const express = require('express');
const router = express.Router();
const getActionRecord = require('../db/read/getActionRecord')

router.get('/', async (req, res) => {
    const lineUserId = req.headers.authorization
    if(!lineUserId) return res.status(403).send('權限錯誤')
    const recordList = await getActionRecord(lineUserId)
    res.send(recordList)
})

module.exports = router;