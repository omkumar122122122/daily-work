import express from "express";

const app=express();
const PORT =3000;

app.get("/", (req, res) => { res.send("WHY ROHIT"); });
app.listen(PORT, () => {
    console.log(` OM IS Server IS NOT listening on WHY? PUCHTA HAI BHARAT http://localhost:${PORT}`)});
