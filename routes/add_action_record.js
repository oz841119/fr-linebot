const express = require('express');
const router = express.Router();
const addActionRecord = require('../db/write/addActionRecord')

router.post('/', async (req, res) => {
    const params = req.body
    const lineUserId = req.headers.authorization
    if(!lineUserId) return res.status(403).send('權限錯誤')
    if(params.length === 0) return res.status(400).send('長度為零')
    const isValid = params.every(record => !isNaN(Number(record.times)) && !isNaN(Number(record.weight)) && record.date && record.action)
    if(!isValid) return res.status(400).send('參數錯誤')
    await addActionRecord(lineUserId, req.body)
    res.send(req.body)
})

module.exports = router;