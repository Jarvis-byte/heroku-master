const express =require("express");
const app = express();
const importData = require("./db.json");

let port =process.env.port || 3000;

app.get("/",(req,res)=>{
res.send("Hello World");
});

app.get("/CoveredAll",(req,res)=>{
    res.send(importData);
})

app.listen(port,()=>{
    console.log(`Eample app is listening on port http://localhost:${port}`);
});