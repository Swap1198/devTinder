const express = require('express')
const {connectDB} = require('./config/dataBase.js')
const {User} = require('./models/user.js')

const {adminAuth} = require('./auth.js')
const app = express()

app.post("/signup",async (req,res)=>{
    const user = new User({
        firstName: "Swapnil",
        lastName : "Mapari",
        emailId: "swapnilmapari6@gmail.com",
        password: "Clash@1198",
        age :27,
        gender: "Male"
    })
    try {
        await user.save().then(
            res.send("Data inserted sucessfully..!")
        )}
    catch (err){
        res.status(400).send("Not inserted"+err.message)
    }
})

connectDB().then(()=>{
    app.listen(7777,()=>{
        console.log("Up and listening to server...")
    })
})

