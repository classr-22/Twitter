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
    // const tweet = await tweetrepo.create({content: 'Hii this is new tweet with some chages',userEmail:'a@$c.com'});
    // //console.log(tweet);
    // const comment  = await Comment.create({content: 'second commit',userEmail: 'a@$c.com'});
    // tweet.comments.push(comment);
    // await tweet.save();
    const tweet = await tweetrepo.getAll(4,2);
    console.log(tweet[0].contentWithEmail);
})