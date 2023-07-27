const express = require('express');
require('dotenv').config();
const connect = require('./config/database');
const Tweet = require('./models/tweet');

const app = express();
const PORT = process.env.PORT;


app.listen(PORT,async ()=>{
    console.log(`server is running at port: ${PORT}`);
    await connect();
    console.log('mongo db connected');
    const tweet = await Tweet.create({
        content: 'First Tweet',
        userEmail: 'a@b.com'
    });
    
    console.log(tweet);
})