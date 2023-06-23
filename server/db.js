const mongoose = require('mongoose');
// const { MongoClient } = require("mongodb");
require('dotenv').config()
// const mongoUrl = "mongodb://127.0.1:27017/aids_feedback_form_db";
const mongoUrl = process.env.REACT_APP_MONGODB_URL
module.exports = () => {
    try {
        // const client = new MongoClient(mongoUrl);
        mongoose.connect(mongoUrl, {
            useNewUrlParser:true,
            useUnifiedTopology:true
        })
        console.log('Connection successfull');
    } catch (error) {
        console.log(error,'failed');
    }
}

