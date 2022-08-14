const router = require('express').Router()
const {Course} = require('../models/courseModel')
const { route } = require('./addFeedback')

router.post('/', async (req, res) => {
    try {
        console.log(req.body);
        if(await Course.findOne({...req.body})){
            console.log(req.body,'if');
            return res.status(200).send({ message:'Course Already Exists.'})
        }else {
            await new Course({...req.body}).save()
            console.log(req.body,'else');
            return res.status(200).send({ message:'Course Added Successfully.'})
        }
    }
    catch (error) {
        return res.status(500).send('Error Occurred while adding course',error)
    }
})

module.exports  = router