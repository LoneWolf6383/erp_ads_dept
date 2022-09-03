const mongoose = require('mongoose');

const BackpackFile = mongoose.model('BackpackFile', new mongoose.Schema({
    fileName: { type: String, required: true },
    fileId : {type:mongoose.Schema.Types.ObjectId,required:true},
    courseId: { type: String, required: true },
    uploadDate: {type: Date,required: true},
    semester: { type: String, required: true }
    })
)
module.exports = {BackpackFile}