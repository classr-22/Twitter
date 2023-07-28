const express = require('express');
require('dotenv').config();

const connect = require('./config/database');

const Tweet = require('./models/tweet');
const Comment = require('./models/comment');

const TweetRepository = require('./repository/tweet-repository');

const app = express();
const PORT = process.env.PORT;


app.listen(PORT,async ()=>{
    console.log(`server is running at port: ${PORT}`);
    await connect();
    console.log('mongo db connected');
    const tweets = await Tweet.find({
        content: ["First Tweet","Hii this is new tweet with some chages","123456"]
    });
    console.log(tweets);
})