import { useEffect } from "react";
import { useState } from "react";
const [blog,setBlog]=useState('')
export function Blog(){
    let newBlog=
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then((response) => response.json())
      .then((json) => setBlog(json));
    })
}
