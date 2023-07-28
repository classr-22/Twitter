const Tweet = require('../models/tweet');
const CrudRepository = require('./crud-repository');

class TweetRepository extends CrudRepository {

    constructor(){
        super(Tweet);
    }

    async create(data){
        try {
            const tweet = await Tweet.create(data);
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }

    async get(tweetId){
        try {
            const tweet = await Tweet.findById(tweetId);
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }

    async destroy(tweetId){
        try {
            const tweet = await Tweet.findByIdAndRemove(tweetId);
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }

    async update(tweetId,data){
        try {
            const tweet = await Tweet.findByIdAndUpdate(tweetId,data,{new: true});
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }

    async getwithcomments(tweetId){
        try {
            const tweet = await Tweet.findById(tweetId).populate({path: 'comments'}).lean();
            return tweet;
        } catch (error) {
            console.log(error)
        }

    }

    async getAll(limit,offset){
        try {
            const tweet = await Tweet.find().limit(limit).skip(offset);
            return tweet;
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = TweetRepository; 