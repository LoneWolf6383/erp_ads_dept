const router = require('express').Router();
const {CourseBackpack} = require('../models/courseBackpackModel')

router.post('/', async (req, res) => {
    try {
        if (await CourseBackpack.findOne({ ...req.body })){
            return res.status(200).send({message:'Course Already Exists'})
        }else {
            await new CourseBackpack({...req.body}).save()
            return res.status(200).send({message:'Course Added to Backpack Successfully'})
        }
    } catch (error) {
        console.log('Internal error Occurred while adding course to backpack');
        return res.status(500).send({message:'Internal error Occurred while adding course to backpack'})
    }
})

module.exports=router 