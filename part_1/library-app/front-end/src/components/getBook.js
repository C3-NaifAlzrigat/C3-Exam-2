import React,{useEffect,useState} from "react";
import axios from 'axios';
const GetAllBook=()=>{
    const [books,setBooks]=useState();

useEffect(()=>{

    axios.get("http://localhost:5000/books")
    .then(response=>setBooks(response.data))
    .catch(err=>console.log(err))
},[])


    return(
        <div>
                {
                    books.map(elem=><div><p>{elem.title}</p> <p>{elem.author}</p></div>)
                }
        </div>
    )
}

export default GetAllBook;