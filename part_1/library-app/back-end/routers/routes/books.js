const express=require("express");
const {insertBook}=require("../controllers/books")
const bookRouter=express.Router();

bookRouter.post("/books",insertBook);


module.exports=bookRouter;