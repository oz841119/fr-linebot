const express = require('express');
const router = express.Router();
const addActionRecord = require('../db/write/addActionRecord')

router.post('/', async (req, res) => {
    const params = req.body
    const lineUserId = req.headers.authorization
    if(!lineUserId) return res.status(403).send('權限錯誤')
    if(isNaN(Number(params.times)) || isNaN(Number(params.weight)) || !params.date || !params.action) return res.status(403).send('資料格式錯誤')
    await addActionRecord(lineUserId, req.body)
    res.send(req.body)
})

module.exports = router;