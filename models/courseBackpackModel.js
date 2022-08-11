const mongoose = require('mongoose')

const courseBackpackSchema = new mongoose.Schema(
    {
        regulation:{type:Number,required:true},
        courseId: { type: String, required: true },
        courseName:{type:String,required:true},
        CO: { type: Array, required: true },
    },
    {collection:'Course-Backpack'}
)
const CourseBackpack = mongoose.model('courses', courseBackpackSchema)
module.exports={ CourseBackpack }