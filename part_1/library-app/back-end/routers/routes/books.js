const express=require("express");
const {insertBook,
        getAllBooks,
        getBookById,
        deleteBookById}=require("../controllers/books")
const bookRouter=express.Router();

bookRouter.post("/books",insertBook);
bookRouter.get("/books",getAllBooks);
bookRouter.get("/books/:book_id",getBookById);
bookRouter.delete("/books/:book_id",deleteBookById);


module.exports=bookRouter;