const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')
const userSchema = mongoose.Schema({
    username:{
        type: String,
        unique: true,
        required: true,
    },
    password:{
        type:String,
        required:true,
    },
    date: {
        type: Date,
        default: Date.now()
    }
},{timestamps:true})
userSchema.plugin(uniqueValidator)
module.exports = mongoose.model('User',userSchema)