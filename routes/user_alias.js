const express = require('express');
const router = express.Router();
const addUserAlias = require('../controllers/addUserAlias')
const getUserAlias = require('../controllers/getUserAlias')

const PATH = '/user_alias'
router.patch(PATH, async (req, res) => {
    const params = req.body
    const lineUserId = req.headers.authorization
    if(params.alias === '') return res.status(400).send('未填寫別名')
    await addUserAlias(lineUserId, params.alias)
    res.send('ok')
})
router.post(PATH, async (req, res) => {
    const lineUserId = req.headers.authorization
    if(!lineUserId) return res.status(403).send('權限錯誤')
    const userAlias = await getUserAlias(lineUserId)
    res.send(userAlias)
})

module.exports = router;