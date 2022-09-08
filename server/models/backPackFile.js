const mongoose = require('mongoose');

const BackpackFile = mongoose.model('BackpackFile', new mongoose.Schema({
    fileName: { type: String, required: true },
    fileId : {type:mongoose.Schema.Types.ObjectId,required:true},
    courseId: { type: String, required: true },
    semester: { type: String, required: true }
},
    {collection:'BackpackFileDetails'}
)
)
module.exports = {BackpackFile}