import React from "react";
import SearchContact from "./Contacts/SearchContact";
import { BACKGROUND, PURPLE } from "../helpers/colors";
import { useLocation } from "react-router-dom";


const Navbar = () => {
  const location = useLocation();

  return (
    <nav
      className="navbar nav-dark navbar-expand-sm shadow-lg"
      style={{ backgroundColor: BACKGROUND }}
    >
      <div className="container">
        <div className="row w-100">
          <div className="col">
            <div className="navbar-brand float-start">
              <i className="fa fa-id-badge" style={{ color: PURPLE }} />
              <span style={{ color: PURPLE }}> Contacts </span>
              <span style={{ color: "#f8f8f4" }}>
                {" "}
                Management Web Application{" "}      
              </span>
            </div>
          </div>
          {location.pathname === "/contacts" ? (
            <div className="col">
              <SearchContact />
            </div>
          ) : null}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
