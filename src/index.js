const express = require('express');
require('dotenv').config();
const bodyParser = require('body-parser');

const connect = require('./config/database');

const Tweet = require('./models/tweet');
const Comment = require('./models/comment');

const {HashtagRepository,TweetRepository} = require('./repository/index');
const TweetService = require('./services/tweet-service');

const apiRoutes = require('./routes/index.js');
const PORT = process.env.PORT;

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/api', apiRoutes);

app.listen(PORT,async ()=>{
    console.log(`server is running at port: ${PORT}`);
    await connect();
    console.log('mongo db connected');

});