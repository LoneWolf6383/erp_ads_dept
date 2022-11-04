const { Course } = require('../models/courseModel');
const { CourseBackpack } = require('../models/courseBackpackModel')
const router = require('express').Router()

router.post('/', async (req, res) => {
    try {
        if (req.body.flag === 'Dropdown'){
            var courseDetails=[]
            let docs
            docs = await Course.find({})
            for (let index  = 0; index < docs.length; index++)
                courseDetails.push(docs[index].courseName+'-'+docs[index].courseId)
            return res.status(200).send(Array.from(new Set(courseDetails)))
        }else{//client/src/components/Common/Backpack/courseVerticalTabs.jsx
            return res.status(200).send(Array.from(new Set(await CourseBackpack.find({},{_id:0,courseName:1,courseId:1,fileIds:1}))))
        }
    }catch (error) {
        console.log(error,'getAllCourseDetails')
        return res.status(500).send(error)
    }
})

module.exports=router