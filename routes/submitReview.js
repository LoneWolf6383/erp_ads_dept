const router = require('express').Router();
const { Review } = require('../models/reviewModel');
const { User } = require('../models/userModel');

router.post('/', async (req, res) => {
    try {
        if (await User.findOne({ username: req.body.username })) {
            if (await Review.findOne({ username: req.body.username })) {    
                const userReview = await Review.findOne({ username: req.body.username })
                const review_object = userReview.review[0]
                review_object[req.body.coursename][req.body.question] = req.body.review
                await Review.updateOne({ username: req.body.username }, { $set: { review: review_object } }, (err, res) => {
                if(err)
                        console.log(err);
                else {
                    console.log(" review Updated");
                }
                })
            }
            else{
            await new Review({
                username: req.body.username,
                review: req.body.review
            }).save()
                console.log(" review Created");
            }
            return res.status(200).send({message:'Review Added'})
        }
    } catch (error) {
        return res.status(200).send()
    }
})

module.exports= router