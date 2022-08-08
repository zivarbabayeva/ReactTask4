import axios from 'axios';
import { useState, useEffect} from 'react';
import React from 'react'

const Index = () => {
    const [posts, setPosts]=useState([]);
    const apiEndPoint='https://jsonplaceholder.typicode.com/posts';
    useEffect(()=>{
        const getPosts=async ()=>{
            const response= await axios.get(apiEndPoint);
            console.log(response.data);
        }
        getPosts();
    },[])
  return (
    <div>Index</div>
  )
}

export default Index