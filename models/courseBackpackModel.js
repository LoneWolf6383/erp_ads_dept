const mongoose = require('mongoose')

const courseBackpackSchema = new mongoose.Schema(
    {
        regulation:{type:Number,required:true},
        courseId: { type: String, required: true },
        courseName:{type:String,required:true},
        file_ids: { type: Array, required: true },
        batch:{type:String,required:true}
    },
    {collection:'Backpack'}
)
const CourseBackpack = mongoose.model('courses', courseBackpackSchema)
module.exports={ CourseBackpack }