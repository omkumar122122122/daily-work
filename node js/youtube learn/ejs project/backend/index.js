import express from "express";
const app=express();

app.use(express.json());
app.use(express.urlencoded({extends:true}));

app.get("/",function(req, res){
    res.send("app is running")
})

app.listen(3000,()=>{
    console.log(`its running in port http://localhost:${3000}`)
})