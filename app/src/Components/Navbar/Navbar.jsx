import React from "react";
import "./Navbar.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
const Navbar = () => {
  return (
    <>
      <div className="NavBar">
        <div className="Nav">
          <div>TeeRex Store</div>
          <div className="SecNavContainer">
            <div>Products</div>
            <div>
              <AiOutlineShoppingCart fontSize={"30px"} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
