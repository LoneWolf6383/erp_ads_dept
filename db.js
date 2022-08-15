// const mongoUrl = "mongodb+srv://Namasivaayam007:6383512055@cluster0.zaxrt3p.mongodb.net/aids_feedback_form_db?retryWrites=true&w=majority";
const mongoose = require('mongoose');
// const { MongoClient } = require("mongodb");
const mongoUrl='mongodb://127.0.0.1:27017/aids_feedback_form_db'

module.exports = () => {
    try {
        console.log(process.env.REACT_APP_MONGODB_URL);
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

// const mongoUrl = "mongodb://127.0.0.1:27017/aids_feedback_form_db";
