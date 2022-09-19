import axios from 'axios';
import React, { useState } from 'react'
import Navbar from '../layouts/Navbar'

function AddSupplier() {

  const [post, setPost] = useState(null)
  const [input_val, setinput_val] = useState({
    companyName: "",
    contactName: "",
    contactTitle: "",
    address: {
      street: "",
      city: "",
      region: "",
      postalCode: "",
      country: "",
      phone: "",
      }
  })

  const baseURL = "https://northwind.vercel.app/api/suppliers";

  function createPost() {
    axios
      .post(baseURL, input_val)
      .then((response) => {
        setPost(response.data);
      });
  }


  return (
    <div>
      <Navbar />
      <div className='container'>
      <form onSubmit={(e)=>{e.preventDefault(); console.log(e.target.companyName.value);}}>
        <input  type="text" name="companyName" className="form-control" placeholder="companyName" aria-label="companyName" aria-describedby="basic-addon1" />
        <button type='submit'>Submit</button>
      </form>

        <div className="input-group mb-3">
          <input onChange={(e)=>{setinput_val({ ...input_val, companyName :e.target.value})}} value={input_val.companyName} type="text" className="form-control" placeholder="companyName" aria-label="companyName" aria-describedby="basic-addon1" />
        </div>
        <div className="input-group mb-3">
          <input onChange={(e)=>{setinput_val({...input_val, contactName :e.target.value})}} value={input_val.contactName} type="text" className="form-control" placeholder="contactName" aria-label="contactName" aria-describedby="basic-addon1" />
        </div>
        <div className="input-group mb-3">
          <input onChange={(e)=>{setinput_val({...input_val, contactTitle :e.target.value})}} value={input_val.contactTitle} type="text" className="form-control" placeholder="contactTitle" aria-label="contactTitle" aria-describedby="basic-addon1" />
        </div>

        <button onClick={() => { createPost() }}>Add</button>
      </div>
    </div>
  )
}

export default AddSupplier