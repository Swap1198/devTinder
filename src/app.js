const express = require('express')

const {adminAuth} = require('./auth.js')
const app = express()

app.listen(3000,()=>{
    console.log("Server is up and listening to port 3000")
})


app.use("/admin",adminAuth)

app.use("/admin/update",(req,res,next)=>{
        try {
            throw new Error ("gdsvsv")
        } catch (err) {
            res.status(500).send("caught error in try catch..")
        }
})

// app.use("/",(err,req,res,next)=>{
//     res.status(500).send("something went wrong...")
// })