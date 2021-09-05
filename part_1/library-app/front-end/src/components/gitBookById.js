import React,{useState} from "react";
import axios from 'axios';


const GetBookById=()=>{
    const [id,setId]=useState();
        
        return(

            <div className="get_book">
            <input onChange={e=>setId(e.target.value)} type="text" placeholder="Id here"></input>

            </div>
        )

}

export default GetBookById;