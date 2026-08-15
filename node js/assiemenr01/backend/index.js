import express from "express"
import cors from "cors";
import profilesData from "./data/profilesData.js";
import blogsData from "./data/blogsData.js";
import portfolioData from "./data/portfolioData.js";
import productsData from "./data/productsData.js";


const app=express()

app.use(express.json()) 
app.use(cors())

app.get("/",(req,res)=>{
    res.send("welcome")

})


app.get("/api/portfolio",(req,res)=>{
    res.json(portfolioData)
})


app.get("/api/products",(req,res)=>{
    res.json(productsData)
})


app.get("/api/products/:id",(req,res)=>{
    let requiredproId=Number(req.params.id)
    if(productsData.find(product => product.id === requiredproId)){
        
        res.json(productsData.find(product => product.id === requiredproId))
    }
    else{
        res.send("not found")
    }

})

app.get("/api/blogs",(req,res)=>{
    res.json(blogsData)
})


app.get("/api/blogs/:id",(req,res)=>{
    let requiredblogId=Number(req.params.id)
    if(blogsData.find(product => product.id === requiredblogId)){
        
        res.json(blogsData.find(product => product.id === requiredblogId))
    }
    else{
        res.send("not found")
    }

})


app.get("/api/profiles",(req,res)=>{
    res.json(profilesData)
})












app.listen(3000, ()=>{
    console.log(`Server is running on port http://localhost:${3000}`)
    // console.log(portfolioData)
})