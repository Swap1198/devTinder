There is difference between install and initialization..
i.e., NPM I and NPM Init
After NPM INIT > we have got our first file i.e., package.json > package.json contain >
meta data of the project, about dependency ( ^: Minior Update, ~:Major update) version and automatically update there minior version.
After that we have to connect to the server/ listen to the server. so we have to create a server first.
To create server we will use expressJs.
NPM I EXPRESS > it will create a node_modules folder. so it will have all the code that express required to execute and it's own dependency.
Now we will create a server and listen request over it.
As every time we do any changes will need to restart server again... 
To avoid this we will use NODEMON... which automatically restart the server when required.
install it global so will get used in every single project out  there, not only in this...
<<Getting error to user nodemon in command  line, did chatgpt and make changes as admin power--admin--Set-ExecutionPolicy RemoteSigned--y>> again execute the same command.
Had made changes in script..
  "scripts": {
    "dev": "nodemon src/app.js"
  },
So instead of writing nodemon src/app.js.. we can simply  write npm run dev... but this command will run automatically once and any mode made in expressJS.

Now give response to the incoming servers..

app.use('/test',(req,res)=>{
    res.send("about the server...")
})

app.use((req,res)=>{
    res.send("Listening the request...")
})

Please note that path routing should be at top and after comman routing should be there..
#orderMatters....


Practice code..

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

While routing it match the route and if it is matching it won't go further.
Order matters alot.

routes..
/test/01/ -- Hii Test01
/test     -- Hii Test
/         -- Hii All.

Results.. 

/test  -- Hii Test
/test/scjshcj -- Hii Test

/test/01/bsjcj -- Hii Test01

/svbabbv -- Hii All


To test API we will use postman tool...
To use post >> install it for your operating system >> put API and to CRUD operation accordingly.


postman configuration and CRUD operation on API

Below are example of the different routing expression.

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

CRUD operation

(put--Fully, patch--Partially), delete, get, post

app.get('/user', (req,res)=>{
    res.send("Implementing get call in API")
})

app.delete('/user', (req,res)=>{
    res.send("Implementing delete call in API")
})

app.patch('/user', (req,res)=>{
    res.send("Implementing patch call in API")
})

if not having specific operation to perfrom .use

app.use('/test',(req,res)=>{
    res.send("about the server...")
})

For any request hitting to the server...

app.use((req,res)=>{
    res.send("Listening the request...!")
})


// A single route might have multiple route handler, to browse from one route handler to the next route
// handler use can next() function, giver by express.. Please make sure that after using next(), another 
// router handler should be their else it will failed.. saying Cannot GET /user
// Once response send from one route we can't send another response from same route...
// we can club multiple route into a array...
app.use("/user", (req,res,next)=>{
    // res.send("1st route handler...")
    next()
},
[
(req,res,next)=>{
        // res.send("2st route handler...")
        next()
},
(req,res,next)=>{
        res.send("3st route handler...")
        next()
}
]
)

// when you next() and make other same route then that route handler will work...
here it will come here  first.. and it got know about next()
app.use("/user", (req,res,next)=>{
    // res.send("1st route handler...")
    next()
}
)

then it will search for other route handler in same scope.. if is not there then it will check for route have same path and if any found perform that  route handler

app.use("/user",(req,res,next)=>{
    res.send("From 1st route handler...")
})


app.use("/route", callback function-- this will excute one after user hits /route... )

Here we are creating express routing....

Defined a adminAuth function ---  where it will just do the validation of auth...If it is valid perfom 
next route handler

const adminAuth = (req,res,next)=>{
    const isAdmin = true
    if(!isAdmin){
        console.log("Invalid Admin")
        res.status(401).send("Invalid admin")
    } else {
        next()
    }
}

module.exports = {adminAuth}

app.use("/admin",adminAuth)

app.use("/admin/update",(req,res,next)=>{
    res.send("Entered in the admin page..")
})

As we know order matters when request comes it first went to /admin 
as we are hitting to /adminUpdate--- cause it is first in the order /admin perform it callback function
then it will perform /admin/Update route

How to handle error in the routing 

app.use("/",(err,req,res,next)=>{
    res.status(500).send("something went wrong...")
})

we have to handle error using try catch itself...

app.use("/admin/update",(req,res,next)=>{
        try {
            throw new Error ("gdsvsv")
        } catch (err) {
            res.status(500).send("caught error in try catch..")
        }
    res.send("Entered in the admin page..")
})