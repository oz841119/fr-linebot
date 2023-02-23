require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const line_bot = require('./routes/line_bot')
const get_message = require('./routes/get_message')
app.use('/line_bot', line_bot)
app.use('/get_message', get_message)

app.listen(port, () => {
  console.log(`listening on ${port}`);
});

//https://fr-linebot.onrender.com/line_bot