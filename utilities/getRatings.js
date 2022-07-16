const router = require('express').Router()
const { Review } = require('../models/reviewModel')

router.post('/', async (req,res) => {
    try {
        if (await Review.findOne({ username: req.body.username })) {
            const userReview = await Review.findOne({ username: req.body.username })
            const review_object = userReview.review[0]
            const ratings = Object.values(review_object[req.body.courseName])
            return res.send(ratings)
        }
    }
    catch (error) {
        console.log('Review Not found for',req.body.courseName)
        return res.send("Failure"+error)
    }
})

module.exports = router