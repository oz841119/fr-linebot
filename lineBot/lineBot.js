const express = require('express');
const router = express.Router();
const line = require('@line/bot-sdk');
const addMessage = require('../controllers/addMessage')
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

function handleEvent(event) {
    if (event.type !== 'message' || event.message.type !== 'text') return Promise.resolve(null);
    if(event.message.text === 'user') return lineClient.replyMessage(event.replyToken, {type: 'text', text: event.source.userId})
    const echo = { type: 'text', text: `${dayjs().tz('Asia/Taipei').format('YYYY-MM-DD')} 紀錄完成。${createEncourage()}` };
    return lineClient.replyMessage(event.replyToken, echo)
}

function createEncourage() {
    const random = Math.floor(Math.random() * 6)
    const sentence = ['你好棒哦.', '厲害哦,比上次進步很多.', '加油,不負韶華.', '要猛!!', '你打藥了吧?', '加油,細狗.']
    return sentence[random]
}

const PATH = '/line_bot'
router.post(PATH, line.middleware(config), async (req, res) => {
    console.log(123);
    if(req.body.events.length === 0) return
    const event = req.body.events[0]
    const lineResult = await handleEvent(event)
    res.json(lineResult)
    await addMessage(event.source.userId, event.message.text)
    //  0225 MongoDBd error connection establishment was cancelled (pending fix)
});

module.exports = router;