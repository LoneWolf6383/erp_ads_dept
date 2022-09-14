const router = require('express').Router()
const {File} = require('../models/fileModel')
const { CourseBackpack } = require('../models/courseBackpackModel')

router.post('/', async (req, res) => {
    try {
        const courses = await CourseBackpack.find({}, { _id: 0, courseName: 1, courseId: 1, fileIds: 1 })
        const docs =  {}
        for (let index = 0; index < courses.length; index++) {
            const course = courses[index];
            const courseDetails = course.courseName + '-' + course.courseId
            docs[courseDetails] = []
            for (let index2 = 0; index2 < course.fileIds.length; index2++) {
                const fileId = course.fileIds[index2];
                docs[courseDetails].push(await File.findOne({_id:fileId},{filename:1}))          
            }
        }
        // console.log(docs)
        return res.status(200).send(docs)
    } catch (error) {
        console.log(error,'getBackpackFiles')
        return res.status(500).send(error)
    }
})

module.exports = router