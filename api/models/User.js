const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    username:{
        type: String,
        required: true,
        minLength: 8
    },
    password:{
        type:String,
        required:true,
        minLength:8
    },
    date: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('User',userSchema)