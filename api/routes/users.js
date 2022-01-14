const userRoute = require('express').Router()
const User = require('../models/User')
const CryptoJS = require('crypto-js')
const verify = require('../verifyToken')

//CHANGE
userRoute.put('/:id', verify, async (req, res) => {
    if (req.params.id === req.user.id) {
        if (req.body.password) {
            req.body.password = CryptoJS.AES.encrypt(req.body.password, process.env.SECRET_KEY)
        }
        try {
            const updatedUser = await User.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
            res.status(200).json(updatedUser)
        }
        catch (err) {
            res.status(500).json(err)
        }
    }
})
//DELETE
userRoute.delete('/:id', verify, async (req, res) => {
    if (req.params.id === req.user.id) {
        try {
            await User.findByIdAndDelete(req.params.id)
            res.status(200).json('Account have been deleted')
        }
        catch(err){
            res.status(500).json(err)
        }
    }
})

//GET
userRoute.get('/find/:id',verify,async(req,res)=>{
    if(req.params.id === req.user.id){
        try{
            const user = await User.findById(req.params.id)
            const {password,...info} = user._doc
            res.status(200).json(info)
        }
        catch(err){
            res.status(500).json(err)
        }
    }else{
        res.status(401).json('You are not allowed')
    }
})

module.exports = userRoute