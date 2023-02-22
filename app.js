require('dotenv').config();
const line = require('@line/bot-sdk');
const express = require('express');
const addMessage = require('./db/write/addMessage')
const dayjs = require('dayjs')
const utc = require('dayjs/plugin/timezone')
const timezone = require('dayjs/plugin/utc')
dayjs.extend(timezone)
dayjs.extend(utc)

const config = {
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN,
  channelSecret: process.env.CHANNEL_SECRET,
};
const lineClient = new line.Client(config);
const app = express();

app.post('/line_bot', line.middleware(config), async (req, res) => {
  res.send('ok')
  if(req.body.events.length === 0) return
  const event = req.body.events[0]
  const lineResult = await handleEvent(event)
  await addMessage(event.source.userId, event.message.text)
});

function handleEvent(event) {
  if (event.type !== 'message' || event.message.type !== 'text') return Promise.resolve(null);
  const echo = { type: 'text', text: `${dayjs().tz('Asia/Taipei').format('YYYY-MM-DD')} 紀錄完成。未來可以在網站上重新回顧訊息並編入紀錄` };
  return lineClient.replyMessage(event.replyToken, echo);
}


const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`listening on ${port}`);
});
