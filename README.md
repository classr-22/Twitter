# setup

- First execute this command `npm i`.

- Create .env file and write mongoDB URL `DB_URL= mongodb://localhost:27017/<database>` and port number `PORT=<port_number>`.

- Then execute `npm start` command.

# Requirements
- User should be able to create a post
    - [The post/tweet cannot be more than 250 chars]
    - [Every post/tweet will be having support for image upload]

- Any post should be visible to all those users who follows the author
- Anyone who follows you can comment on a post/tweet
- Anyone who follows you can like on a post/tweet
- We can comment on a comment
- We can like any comment also
- Retweeting

- User profile:

    - Name
    - Follower count
    - Bio
    - Last 10 tweets from the user
    - Pagination on tweets

- User auth

- Every tweet might be having a hashtag