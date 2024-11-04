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