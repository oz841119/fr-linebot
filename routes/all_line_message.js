const express = require('express');
const router = express.Router();
const getAllMessage = require('../controllers/getAllMessage')

const PATH = '/all_line_message'
router.get(PATH, async (req, res) => {
    const allMes = await getAllMessage()
    res.send(allMes)
})

module.exports = router;