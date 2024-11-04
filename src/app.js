const express = require('express')

const app = express()

app.listen(3000,()=>{
    console.log("Server is up and listening to port 3000")
})

app.get('/user', (req,res)=>{
    res.send("Implementing get call in API")
})


// one or more occurance of s "http://localhost:3000/usssssser"
// app.get('/us+er', (req,res)=>{
//     res.send("Implementing get call in API")
// })
// either you can have s or not have it "http://localhost:3000/uer"
// app.get('/us?er', (req,res)=>{
//     res.send("Implementing get call in API")
// })
//We can add any string between us and er "http://localhost:3000/usfjfbjjvjhavjher"
// app.get('/us*er', (req,res)=>{
//     res.send("Implementing get call in API")
// })
// We can group together and do operation "http://localhost:3000/useser"
// app.get('/u(se)+r', (req,res)=>{
//     res.send("Implementing get call in API")
// })
//suffix will be user and prefix can be anything
// app.post('/*user$/', (req,res)=>{
//     res.send("Implementing post call in API")
// })
//  with this /user/ -- Exact route
// with this /user -- trailing can be anything
// app.post('/user/', (req,res)=>{
//     res.send("Implementing post call in API")
// })
// To get id after path
// app.post('/user:id', (req,res)=>{
//     console.log("id: "+req.params.id)
//     res.send("Implementing post call in API")
// })
// when you have query in your  URL and  you have to fetch data from it "http://localhost:3000/unknown?id=1"
// app.get('/unknown', (req,res)=>{
//     console.log("query: ", req.query)
//     res.send("Implementing post call in API")
// })

app.delete('/user', (req,res)=>{
    res.send("Implementing delete call in API")
})

app.patch('/user', (req,res)=>{
    res.send("Implementing patch call in API")
})

app.use('/test',(req,res)=>{
    res.send("about the server...")
})

app.use((req,res)=>{
    res.send("Listening the request...!")
})
