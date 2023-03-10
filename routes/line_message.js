const express = require('express');
const router = express.Router();
const getUserMessage = require('../controllers/getUserMessage')

const PATH = '/line_message'
router.get(PATH, async (req, res) => {
    if(!req.headers.authorization) return res.status(403).send('權限錯誤')
    const lineUserId = req.headers.authorization
    const allMes = await getUserMessage(lineUserId)
    res.send(allMes)
})

module.exports = router;