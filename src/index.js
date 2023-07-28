const express = require('express');
require('dotenv').config();

const connect = require('./config/database');

const Tweet = require('./models/tweet');
const Comment = require('./models/comment');

const {HashtagRepository,TweetRepository} = require('./repository/index');
const TweetService = require('./services/tweet-service');

const app = express();
const PORT = process.env.PORT;


app.listen(PORT,async ()=>{
    console.log(`server is running at port: ${PORT}`);
    await connect();
    console.log('mongo db connected');
    // let ser = new TweetService();
    // const res = await ser.create({content: 'capital #FUN can you be #happyIIIII what #meaN'});
    // console.log(res);
});