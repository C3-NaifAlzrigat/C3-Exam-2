const express=require("express");
const {insertBook,getAllBooks}=require("../controllers/books")
const bookRouter=express.Router();

bookRouter.post("/books",insertBook);
bookRouter.get("/books",getAllBooks);


module.exports=bookRouter;