const express = require('express');
const router = express.Router();
const addUserAlias = require('../db/write/addUserAlias')

router.patch('/', async (req, res) => {
    const params = req.body
    const lineUserId = req.headers.authorization
    if(params.alias === '') return res.status(400).send('未填寫別名')
    await addUserAlias(lineUserId, params.alias)
    res.send('ok')
})

module.exports = router;