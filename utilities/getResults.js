const router = require('express').Router()
const { Review } = require('../models/reviewModel')

router.post('/', async (req, res) => {
    try {
        const allReviews = await Review.find({ academicYear: req.body.academicYear, semester: req.body.semester })
        let results = []
        for (const key in allReviews) {
            results.push({
                username: allReviews[key].username,
                review:allReviews[key].review[0]
            })
        }
        return res.send(results)
    } catch (error) {
        
    }
})

module.exports = router