require('dotenv').config();
const express = require('express');
const cors = require('cors')
const app = express();
const port = process.env.PORT || 3333;


const line_bot = require('./routes/line_bot')
const get_message = require('./routes/get_message')
const add_action_record = require('./routes/add_action_record')
const get_user_message = require('./routes/get_user_message')
app.use(cors());
app.use('/line_bot', line_bot)
app.use(express.json());
app.use('/get_message', get_message)
app.use('/add_action_record', add_action_record)
app.use('/get_user_message', get_user_message)

app.listen(port, () => {
  console.log(`listening on ${port}`);
});
//https://fr-linebot.onrender.com/line_bot