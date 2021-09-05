const express=require("express");
const {insertBook,
        getAllBooks,
        getBookById}=require("../controllers/books")
const bookRouter=express.Router();

bookRouter.post("/books",insertBook);
bookRouter.get("/books",getAllBooks);
bookRouter.get("/books/:book_id",getBookById);


module.exports=bookRouter;