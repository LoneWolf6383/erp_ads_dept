const router = require('express').Router()
const {Review} = require('../models/reviewModel')
const { User } = require('../models/userModel')
const {FeedBack} = require('../models/feedbackModel')
const {Course} = require('../models/courseModel')
router.post('/', async (req, res) => {
    try {
            const allUsernames = await User.find({})
            let stdUsernames = []
            allUsernames.forEach(user => {
                if (user['userRole'] === 'student')
                    return stdUsernames.push(user['username'])
            })
            var allCourses = await Course.find({})
            var finalCourseDetails=[]
            var feedbackPattern = await FeedBack.find({academicYear:req.body.academicYear,semester:req.body.semester})
            for (const key in allCourses) {
                for (const key2 in feedbackPattern) {
                    if(allCourses[key].courseId === feedbackPattern[key2].courseId)
                        finalCourseDetails.push([allCourses[key].courseName,allCourses[key].CO])
                }
            }

            stdUsernames.forEach(async username => {
                const reviews = {}
                finalCourseDetails.forEach(course => {
                    course[1].forEach(co => {
                        if (reviews[course[0]])
                            return reviews[course[0]][co] = Math.floor((Math.random() * 5)+1)
                        else {
                            reviews[course[0]] = {}
                            return reviews[course[0]][co] = Math.floor((Math.random() * 5)+1)
                        }
                    })
                    return true
                })
                await new Review({
                    username: username,
                    academicYear: req.body.academicYear,
                    semester: req.body.semester,
                    review: [reviews]
                }).save()
            })
        } catch (error) {
            console.log(error);
            return res.send(error)
        }
})
module.exports = router