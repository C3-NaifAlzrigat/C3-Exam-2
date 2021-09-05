const Book=require("../../db/models/books");

const insertBook=(req,res)=>{
    const {title , author, pages, publisher, published_at}=req.body;

    const newBook=new Book({
        title ,
        author, 
        pages, 
        publisher, 
        published_at
    })

    newBook
    .save()
    .then(response=>res.json(response))
    .catch(err=>res.json(err))
}


const getAllBooks=(req,res)=>{
    Book.find({})
    .then(response=>res.json(response))
    .catch(err=>res.json(err))
}

module.exports={insertBook,getAllBooks}