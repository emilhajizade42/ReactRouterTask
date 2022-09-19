import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../layouts/Navbar";

const baseURL = "https://northwind.vercel.app/api/suppliers";

function SupplierList() {
  const [data, setdata] = useState([])
  useEffect(() => {
    getAll()
  }, [])

  // get all 
  function getAll() {
    axios.get(baseURL)
    .then(res=>{setdata(res.data)})
  }
  // delete By Id
  function deleteById(id) {
    const url = baseURL + "/"+id;
    axios.delete(url)
    .then(()=>{getAll()})
  }
  // sort array by id  
  data.sort((a, b) => (a.id > b.id) ? 1 : -1)
  return (
    <div>
      <Navbar />
      <div className="container mt-5">
        <table className="table table-dark">
          <thead>
            <tr className="table-dark">
              <th scope="col">#</th>
              <th scope="col">companyName</th>
              <th scope="col">contactName</th>
              <th scope="col">contactTitle</th>
              <th scope="col">country</th>
              <th scope="col">Option</th>
            </tr>
          </thead>
          <tbody>
            {data.map(item=>(
              <tr key={item.id} className="table-dark">
                <th scope="row align-items-center">{item.id}</th>
                <td>{item.companyName}</td>
                <td>{item.contactName}</td>
                <td>{item.contactTitle}</td>
                <td>{item.address.country}</td>
                <td><button onClick={()=>{deleteById(item.id)}} className="btn btn-danger">DELETE</button></td>
            </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SupplierList;
