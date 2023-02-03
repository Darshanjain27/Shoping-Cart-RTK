import React from "react";
import { BsHandbagFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Navbar = () => {
  const { cartTotalQuantity } = useSelector((state) => state.cart);
  return (
    <>
      {/* <!-- Navbar --> */}
      <nav className="navbar navbar-expand-lg navbar-light  w-100 bg-light shadow p-2">
        {/* <!-- Container wrapper --> */}
        <div className="container-fluid">
          {/* <!-- Toggle button --> */}
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>

          {/* <!-- Collapsible wrapper --> */}
          <div
            className="collapse navbar-collapse d-flex justify-content-between "
            id="navbarSupportedContent"
          >
            {/* <!-- Navbar brand --> */}
            <Link to="/">
              <h3 className="text-danger ">Darshan</h3>
            </Link>
            {/* <!-- Left links --> */}

            <Link to="/cart">
              <div className="nav-bag d-flex align-items-center ">
                <BsHandbagFill className="text-danger display-6" />
                <span className="bag-quantity  bg-info rounded-pill">
                  <span
                    className="d-flex align-items-center justify-content-center"
                    style={{ color: "blue", width: "25px", height: "25px" }}
                  >
                    {cartTotalQuantity}
                  </span>
                </span>
              </div>
            </Link>
          </div>
        </div>
        {/* <!-- Right elements --> */}

        {/* <!-- Container wrapper --> */}
      </nav>
      {/* <!-- Navbar --> */}
    </>
  );
};

export default Navbar;
