const express = require('express');
require('dotenv').config();

const connect = require('./config/database');
const Tweet = require('./models/tweet');

const TweetRepository = require('./repository/tweet-repository');

const app = express();
const PORT = process.env.PORT;


app.listen(PORT,async ()=>{
    console.log(`server is running at port: ${PORT}`);
    await connect();
    console.log('mongo db connected');
    // const tweet = await Tweet.create({
    //     content: 'third Tweet'
    // });
    // const tweet = await Tweet.find({
    //     userEmail: 'a@b.com'
    // });
    // const tweet = await Tweet.findById('64c3677379ce256f7442b0d2');
    // tweet.userEmail = 'k@c.com';
    // await tweet.save();
    // console.log(tweet);

    const tweetrepo = new TweetRepository();
    const tweet = await tweetrepo.create({content: 'Hii this is new tweet'});
    console.log(tweet);
    tweet.comments.push({content: 'first commit'});
    await tweet.save();
    console.log(tweet);
})