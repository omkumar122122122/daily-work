import express from "express";
const app=express();

app.use(express.json());
app.get("/",function(req,res){
    res.send("it is working")
})


app.listen(3000,()=>{
    console.log(`app is listning in http://localhost:${3000}`)
})