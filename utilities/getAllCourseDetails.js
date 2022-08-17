const { Course } = require('../models/courseModel');
const { CourseBackpack } = require('../models/courseBackpackModel')
const router = require('express').Router()

router.post('/', async (req, res) => {
    var courseDetails=[]
    let docs
    if (req.body.flag === 'Dropdown')
        docs = await Course.find({})
    else
        docs = await CourseBackpack.find({})
    for (let i  = 0; i < docs.length; i++) {
        courseDetails.push(docs[i].courseName+'-'+docs[i].courseId)
    } 
    return res.send(Array.from(new Set(courseDetails)))
})

module.exports=router