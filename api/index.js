const express = require('express')
const mongoose = require('mongoose')
const app = express()
const dotenv = require('dotenv')
const authRoute = require('./routes/auth')
const userRoute = require('./routes/users')
const cors = require('cors')
const cookieSession = require('cookie-session')
const passport = require('passport')
dotenv.config()
mongoose.connect(process.env.MONGO_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})
    .then(() => console.log('Connected to mongoose'))
    .catch((err) => console.log(err))
app.use(cors({
    origin:"http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials:true,
}))
app.use(cookieSession({
    name:'session',
    keys:["back"],
    maxAge: 24 * 60 * 60 * 100
}))
app.use(passport.initialize());
app.use(passport.session())
app.use(express.json())
app.use('/api/auth', authRoute)
app.use('/api/user', userRoute)
app.listen(8800, () => {
    console.log("Listening at PORT 8800");
})