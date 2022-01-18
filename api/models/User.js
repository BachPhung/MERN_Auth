const mongoose = require('mongoose')

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

module.exports = mongoose.model('User',userSchema)