import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../layouts/Navbar";

function SupplierDetail() {
  return (
    <div>
      <Navbar />
      <div className="card" style={{width: "40vw"}}>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <Link to="/list" className="btn btn-primary">
            Go Previus Page
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SupplierDetail;
