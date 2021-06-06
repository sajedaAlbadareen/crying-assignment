let express = require("express")
let app = express();
let path = require("path")
let bodyparser = require("body-parser")
let parser = bodyparser.urlencoded({extended : true})
let info = ""
let fs = require("fs")


app.get("/",(req , res ,next )=>{
    res.sendFile(path.join(__dirname,".","index.html"))
})

app.get("/index2.html",(req , res ,next )=>{
    res.sendFile(path.join(__dirname,".","index2.html"))
})
app.post("/newform",parser,(req , res)=>{
   info = JSON.stringify(req.body,null,2)
   fs.writeFile("myanswer.json",info,()=>{
       console.log("answer")
   })
})

app.listen(5000,()=>{
    console.log("hiiii")
})

