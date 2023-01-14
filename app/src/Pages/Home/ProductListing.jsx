import React, { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import "./ProductListing.css";
import Navbar from "../../Components/Navbar/Navbar";

const ProductListing = () => {
  const [data, setdata] = useState([]);
  function dataFeatch() {
    try {
      fetch(
        "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json"
      )
        .then((r) => r.json())
        .then((r) => {
          setdata(r);
        });
    } catch {
      console.log("e");
    }
  }
  console.log(data);
  useEffect(() => {
    dataFeatch();
  }, []);
  return (
    <div>
      {/* Navbar */}
      <div>
        <Navbar />
      </div>

      {/* search Box */}
      <div className="SearchBox">
        <div>
          <input
            className="InputSearch"
            type="text"
            placeholder="Search For Products..."
          />
        </div>
        <div className="FiSearch">
          <FiSearch fontSize={"19px"} />
        </div>
      </div>

      {/* main Work */}

      <div className="MainContainer">
        <div className="SideBar"></div>
        <div className="ProductContainer">
          {
            data.map(function(ele){
              return<>
              
              
              </>
            })
          }
          
        </div>
      </div>
    </div>
  );
};

export default ProductListing;
