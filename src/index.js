const express = require('express');
require('dotenv').config();
const bodyParser = require('body-parser');
const passport = require('passport');

const connect = require('./config/database');

const passportAuth = require('./config/jwt-middleware');

const apiRoutes = require('./routes/index.js');

const PORT = process.env.PORT;

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(passport.initialize());
passportAuth(passport);

app.use('/api', apiRoutes);

app.listen(PORT,async ()=>{
    console.log(`server is running at port: ${PORT}`);
    await connect();
    console.log('mongo db connected');

    // const userepo = new UserRepository();
    // const tweetrepo = new TweetRepository();
    // const tweets = await tweetrepo.getAll(10,0);
    // const user = await userepo.getAll();
    // const likeservice = new LikeService();
    // await likeservice.toggleLike(tweets[0].id,'Tweet',user[0].id);

});