const authRoute = require('express').Router()
const User = require('../models/User')
const CryptoJS = require('crypto-js')
const jwt = require('jsonwebtoken')
const passport = require('passport')
//REGISTER
authRoute.post('/register', async (req, res) => {
    const newUser = new User({
        username: req.body.username.toString(),
        password: CryptoJS.AES.encrypt(req.body.password, process.env.SECRET_KEY).toString(),
    })
    try {
        const user = await newUser.save();
        res.status(200).json(user)
    }
    catch (err) {
        res.status(500).json(err)
    }
})

//LOGIN
authRoute.post('/login', async(req, res)=>{
    try{
        const user = await User.findOne({username: req.body.username})
        !user && res.status(401).json('Wrong username or password')
        const bytes = CryptoJS.AES.decrypt(user.password,process.env.SECRET_KEY)
        const originalPassword = bytes.toString(CryptoJS.enc.Utf8)
        originalPassword !== req.body.password && res.status(401).json('Wrong username or password')
        const {password,...info} = user._doc
        const accessToken = jwt.sign({id: user._id},process.env.SECRET_KEY,{expiresIn:'2d'})
        res.status(200).json({...info,accessToken})
    }
    catch(err){
        res.status(500).json(err)
    }
})

authRoute.post('/login/social-media',async(req,res)=>{
    try{
        const user = await User.findOrCreate({username:req.body.username},{password:req.body.password});
        const {password,...info} = user.doc
        const accessToken = jwt.sign({id: user._id},process.env.SECRET_KEY,{expiresIn:'2d'})
        res.status(200).json({...info._doc,accessToken})
    }catch(err){
        res.status(500).json(err)
    }
})

module.exports = authRoute