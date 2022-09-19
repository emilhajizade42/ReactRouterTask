import axios from 'axios';
import React, { useState } from 'react'
import Navbar from '../layouts/Navbar'

function AddSupplier() {

  const [post, setPost] = useState(null)

  const baseURL = "https://northwind.vercel.app/api/suppliers";

  function createPost() {
    axios
      .post(baseURL, {
        title: "Hello World!",
        body: "This is a new post."
      })
      .then((response) => {
        setPost(response.data);
      });
  }
  return (
    <div>
      <Navbar/>
      add
      <button onClick={()=>{createPost()}}>Add</button>
    </div>
  )
}

export default AddSupplier