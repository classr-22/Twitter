const Hashtag = require('../models/hashtags');

class HashtagRepository {
    
    async create(data){
        try {
            const tag = await Hashtag.create(data);
            return tag;
        } catch (error) {
            console.log(error);
        }
    }

    async bulkCreate(data){
        try {
            const tags = await Hashtag.insertMany(data);
        } catch (error) {
            console.log(error);
        }
    }

    async get(Id){
        try {
            const tag = await Hashtag.findById(Id);
            return tag;
        } catch (error) {
            console.log(error);
        }
    }

    async destroy(Id){
        try {
            const response = await Hashtag.findByIdAndRemove(Id);
            return response;
        } catch (error) {
            console.log(error);
        }
    }


}

module.exports = HashtagRepository;