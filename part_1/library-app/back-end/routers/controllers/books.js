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

const getBookById=(req,res)=>{
    const book_id=req.params.book_id;
    Book.findById({_id:book_id})
    .then(response=>res.json(response))
    .catch(err=>res.json(err))
}

const deleteBookById=(req,res)=>{
    const book_id=req.params.book_id;
    Book.findByIdAndDelete({_id:book_id})
    .then(response=>res.json(response))
    .catch(err=>res.json(err))
}
module.exports={insertBook
                ,getAllBooks,
                getBookById,
                deleteBookById}