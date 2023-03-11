require('dotenv').config();
const express = require('express');
const cors = require('cors')
const app = express();
const router = require('./routes/router')
const dbClient = require('./db/db.js')
const port = process.env.PORT || 3333;

app.use(cors());
app.use(express.json());
app.use(router)

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