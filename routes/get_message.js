const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('You got message')
})

module.exports = router;