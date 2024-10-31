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


