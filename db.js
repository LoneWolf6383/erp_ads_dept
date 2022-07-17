const mongoose = require('mongoose');
const mongoUrl='mongodb://localhost:27017'

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
// const uri = "mongodb+srv://Namasivaayam007:6383512055@cluster0.zaxrt3p.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// function connection(){
//     client.connect(err => {
//             const collection = client.db("test").collection("devices");
//             console.log('Success')
//             client.close();
//     });
// }
// module.exports = connection