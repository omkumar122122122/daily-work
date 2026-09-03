import express, { json } from "express"
import cors from "cors";


const app=express()

app.use(express.json()) 
app.use(cors())

const users=[]



app.get("/",(req,res)=>{
    res.send("hee heeeee")
})


app.post("/login",(req,res)=>{
    console.log(req.body)
    const user=req.body
    user.id=users.length+1;
    users.push(user)

    res.json({
        message: "Successfully done",
        user: user
    });
    console.log("user array")
    console.log(users)

})

app.get("/user/:id",(req,res)=>{
    let id=Number(req.params.id)
    const user=users.find((user)=>user.id==id)
    // res.send(id)

    res.json(user);
    console.log("send user")
    console.log(user)

})

app.get("/users",(req,res)=>{
    res.json(users)
    console.log(users)
})






app.listen(3000, ()=>{
    console.log(`Server is running on port http://localhost:${3000}`)
})
