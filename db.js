// const mongoUrl = "mongodb+srv://Namasivaayam007:6383512055@cluster0.zaxrt3p.mongodb.net/aids_feedback_form_db?retryWrites=true&w=majority";
const mongoose = require('mongoose');
const mongoUrl='mongodb://127.0.0.1:27017/aids_feedback_form_db'

module.exports = () => {
    try {
        mongoose.connect(mongoUrl, {
            useNewUrlParser:true,
            useUnifiedTopology:true
        })
        
        console.log('Connection successfull');
    } catch (error) {
        console.log(error,'failed');
    }
}
// const { MongoClient, ServerApiVersion } = require('mongodb');
// const client = new MongoClient(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// function connection(){
//     client.connect(err => {
//             const collection = client.db("aids_feedback_form_db").collections();
//             console.log(collection)
//     });
// }
// module.exports = connection