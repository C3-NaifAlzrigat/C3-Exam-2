import React from "react";

const createBook=()=>{

    return(

        <div className="create_book">
            <input type="text" placeholder="title here"></input>
            <input type="text" placeholder="author here"></input>
            <input type="text" placeholder="pages here"></input>
            <input type="text" placeholder="publisher here"></input>
            <input type="text" placeholder="published_at here"></input>
            <button>submit</button>
        </div>
    )
}