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
})