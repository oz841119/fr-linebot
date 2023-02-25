const express = require('express');
const router = express.Router();
const getAllMessage = require('../db/read/getAllMessage')

router.get('/', async (req, res) => {
    const allMes = await getAllMessage()
    res.send(allMes)
})

module.exports = router;