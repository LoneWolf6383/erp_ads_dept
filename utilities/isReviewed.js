const router = require('express').Router()
const { Review } = require('../models/reviewModel')

router.post('/',async(req,res)=>{

    try {
        if (await Review.findOne({ username: req.body.username })) {
            const userReview = await Review.findOne({ username: req.body.username })
            const review_array = userReview.review
            const arrayToObject = (review_array, key) =>
            Object.assign({}, ...review_array.map(item => ({ [item[key]]: item })))
            //while converting from array of objects to nested objects 
            //objects are added under the key undefined... (for some unknown reason)
            const review_object = arrayToObject(review_array).undefined
            const questions = Object.values(review_object[req.body.courseName])
            for (const value of questions) {
                if (questions[value] === 0)
                    return res.send(false)
            }
            return res.send(true)
        }
        else {
            console.log('user not found')
            return res.send(false)
        }
    } catch (error) {
        console.log(error)
        return res.send(false)
    }

})

module.exports = router
