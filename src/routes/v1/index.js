const express = require('express');

const {createTweet,getTweet} = require('../../controllers/tweet-controller.js');
const toggleLike = require('../../controllers/like-controller.js');
const createComment = require('../../controllers/comment-controller.js');
const {signup,login} = require('../../controllers/auth-controller.js');
const authenticate = require('../../middlewares/authenticate.js');

const router = express.Router();

router.post('/tweets',authenticate, createTweet);

router.get('/tweets/:id', getTweet);

router.post('/likes/toggle',toggleLike);

router.post('/comments',authenticate, createComment);

router.post('/signup', signup);

router.post('/login', login);

module.exports = router;
