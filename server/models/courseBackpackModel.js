const mongoose = require('mongoose')

const courseBackpackSchema = new mongoose.Schema(
    {
        courseId: { type: String, required: true },
        courseName:{type:String,required:true},
        fileIds: { type: Array},
        batch:{type:String,required:true}
    },
    {collection:'Backpack'}
)
const CourseBackpack = mongoose.model('course', courseBackpackSchema)
module.exports={ CourseBackpack }