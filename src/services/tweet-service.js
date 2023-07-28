const {TweetRepository} = require('../repository/index.js');

class TweetService {
    constructor(){
        this.tweetRepository=new TweetRepository();
    }

    async create(data) {
        const content = data.content;
        const tagsarr=content.match(/#\w+/g).map((element)=>{
            element.substr(1);
        });
        console.log(tagsarr);
        const tweet = await this.tweetRepository.create(data);
        return tweet;
    }
}

module.exports = TweetService;