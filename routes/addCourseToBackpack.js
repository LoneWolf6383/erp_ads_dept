const router = require('express').Router();
const {CourseBackpack} = require('../models/courseBackpackModel')

router.post('/', async (req, res) => {
    try {
        console.log('before if')
        console.log(req.body)
        if (await CourseBackpack.findOne({ couresId: req.body.couresId })){
            return res.status(500).send({message:'Course Already Exists'})
        }else {
            await new CourseBackpack({...req.body}).save()
            console.log('inside else')
            return res.status(200).send({message:'Course Added to Backpack Successfully'})
        }
    } catch (error) {
        console.log('Internal error Occurred while adding course to backpack');
        return res.status(500).send({message:'Internal error Occurred while adding course to backpack'})
    }
})

module.exports=router