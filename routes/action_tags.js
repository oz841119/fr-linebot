const express = require('express');
const router = express.Router();
const addActionTags = require('../controllers/addActionTags')
const getActionTags = require('../controllers/getActionTags')

const PATH = '/action_tags'

router.get(PATH, async (req, res) => {
    const lineUserId = req.headers.authorization
    if(!lineUserId) return res.status(403).send('權限錯誤')
    const result = await getActionTags(lineUserId)
    res.send(result)
})

router.post(PATH, async (req, res) => {
    try {
        const lineUserId = req.headers.authorization
        if(!lineUserId) return res.status(403).send('權限錯誤')
        const params = req.body
        if(params.length === 0) return res.status(400).send('長度為零')
        await addActionTags(lineUserId, params)
        res.send('OK')
    }
    catch(err) {
        console.log(err.message);
        res.status(500).send("麥歐北用")
    }
})

module.exports = router;