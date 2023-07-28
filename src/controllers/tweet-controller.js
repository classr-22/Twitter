const TweetService = require('../services/tweet-service');

const tweetService = new TweetService();

const createTweet = async (req, res) => {
    try {
            const response = await tweetService.create(req.body);
            return res.status(201).json({
                success: true,
                message: 'Successfully created a new tweet',
                data: response,
                err: {}
            });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'something went wrong',
            data: {},
            err: error
        });
    }
}

const getTweet = async (req, res) => {
    try {
        const response = await tweetService.get(req.params.id);
        return res.status(200).json({
            success: true,
            message: 'Successfully fetched a tweet from service',
            data: response,
            err: {}
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'something went wrong',
            data: {},
            err: error
        });
    }
}

module.exports={
    createTweet,
    getTweet
}