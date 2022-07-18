const mongoose = require('mongoose')


const userSchema = new mongoose.Schema(
    {
        name: { type: String, required: true,unique:true },
        username: { type: String, required: true, unique: true },
        password: { type: String, required: true, },
        userRole:{ type:String },
    },
    {collection:'userLogIn'}
)

const User = mongoose.model('user', userSchema)

module.exports = {User,validate}