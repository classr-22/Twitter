const mongoose = require('mongoose');
require('dotenv').config();

const connect = async () => { 
        await mongoose.connect(process.env.DB_URL);   
}

module.exports = connect;

