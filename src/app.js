const express = require('express')

const app = express()

app.listen(3000,()=>{
    console.log("Server is up and listening to port 3000")
})

app.use('/test',(req,res)=>{
    res.send("about the server...")
})

app.use((req,res)=>{
    res.send("Listening the request...!")
})
