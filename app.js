require('dotenv').config();
const express = require('express');
const cors = require('cors')
const app = express();
const dbClient = require('./db/db.js')
const port = process.env.PORT || 3333;

const line_bot = require('./routes/line_bot')
const get_message = require('./routes/get_message')
const add_action_record = require('./routes/add_action_record')
app.use(cors());
app.use(express.json());
app.use('/line_bot', line_bot)
app.use('/get_message', get_message)
app.use('/add_action_record', add_action_record)

dbClient.connect()
process.on('SIGINT', function() {
  console.log('結束DB連線');
  dbClient.close()
  process.exit(0);
});

app.listen(port, () => {
  console.log(`listening on ${port}`);
});

//https://fr-linebot.onrender.com/line_bot