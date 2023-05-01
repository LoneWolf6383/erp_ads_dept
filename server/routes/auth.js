const router = require('express').Router()
const {User} = require('../models/userModel')
// const joi = require('joi');
router.post('/', async (req, res) => {
    try {
        var user
        var isStudent = false
        var isFaculty = false
        console.log(req.body);
        if (await User.findOne({ username: req.body.username })) {
            user = await User.findOne({ username: req.body.username })
            if(user.userRole==='student')
                isStudent=true
                
            if(user.userRole==='faculty')
                isFaculty=true
                
        } else {
            console.log('User Not Available');
            return res.send('User Not Available')    
        }           
        if(req.body.isVerified===true){
            if (user) {
                if (req.body.password === user.password) {
                    console.log({ message: 'login Successfull' })
                    if (isFaculty)
                        return res.send('/facultyDashboard')
                    if(isStudent)
                        return res.send('/studentDashboard')
                }
                else    
                    return res.send('Invalid Password')
            }
        }
        else
            return res.send('Invalid Captcha Retry')
        } catch (error) {
            console.log(error);
        return res.send("Internal Server Error")
    }
})
module.exports = router
