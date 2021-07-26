import React, { useState } from 'react';

const Posts = () => {
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("");
    const handleSubmit = () =>{
        const data = {title, body}
        fetch("https://jsonplaceholder.typicode.com/posts", {
            method : "POST",
            body : JSON.stringify(data),

        }).then( (res) => alert("Success !! "))
    };

    const handleDelete = (event) =>{
        console.log(event, "DELETE")

        const response = axios (
            "https://jsonplaceholder.typicode.com/posts/1",
            {
                method : "DELETE"
            }
        ).then( (res) => {
            return res;
        });

       console.log(res, "Without async");

        if(response.status === 200){
            window.location.href = "https://google.com";
        }

       
    };

    return ( 
        <div>


            <label>Title</label>
            <input 
                type="text"
                value ={title}
                onChange = {(e) => setTitle(e.target.value)}    
            />
            <label>Body</label>
            <input 
                type="text"
                value = {body}
                onChange = {(e) =>setBody(e.target.value)}
            />

            <button onClick={handleSubmit}>Submit</button>
            
            <button onClick={handleDelete}>Delete Products 1</button>

        </div>
     );
}
 
export default Posts;