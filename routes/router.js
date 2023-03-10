const express = require('express');
const router = express.Router();
const all_line_message = require('./all_line_message')
const action_record = require('./action_record')
const line_message = require('./line_message')
const create_alias = require('./create_alias')
const action_tags = require('./action_tags')
router.use(all_line_message)
router.use(action_record)
router.use(line_message)
router.use(create_alias)
router.use(action_tags)

module.exports = router;