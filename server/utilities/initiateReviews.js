const { Course } = require('../models/courseModel')
const { Review } = require('../models/reviewModel')
const { FeedBack } = require('../models/feedbackModel')
const router = require('express').Router()
const { _ } = require('lodash')

router.post('/', async (req, res) => {
    try {
        let reviews = {}
        var allCourses = await Course.find({})
        var feedbackPattern = await FeedBack.find({ academicYear: req.body.academicYear, semester: req.body.semester })
        for (const key in allCourses) {
            for (const key2 in feedbackPattern) {
                if (allCourses[key].courseId === feedbackPattern[key2].courseId) {
                    let cos = allCourses[key].CO
                    for (let key3 = 0; key3 < Object.keys(cos).length; key3++) {
                        _.set(reviews, [allCourses[key].courseName, cos[key3]], 0)
                    }
                }
            }
        }
        const rev = await Review.find({
            username: req.body.username,
            academicYear: req.body.academicYear,
            semester: req.body.semester
        })
        if (rev.length<1){
            await new Review({
                username: req.body.username,
                academicYear: req.body.academicYear,
                semester: req.body.semester,
                review: reviews
            }).save()
        }
        return res.send('true')
    } catch (error) {
        return res.send('false')   
    }
})

module.exports = router