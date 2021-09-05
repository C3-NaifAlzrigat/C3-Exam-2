// db

const mongoose=require("mongoose");

  db=mongoose.connect("mongodb://localhost:5000/books",{useNewUrlParser: true, useUnifiedTopology: true})
.then(respnse=>
    ()=>{console.log("db is connected")}
    ,(err)=>console.log(err)
    )

    module.exports=db