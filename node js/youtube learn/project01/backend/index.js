import express from "express";
const app=express();

app.use(express.json());

app.use(express.urlencoded({extended:true}));
app.set('view engine','ejs')

app.get("/",function(req,res){
    res.render("index")
})


app.listen(3000,()=>{
    console.log(`app is listning in http://localhost:${3000}`)
})