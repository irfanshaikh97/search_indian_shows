import React from "react";
import "../components/navbar.css";

function Navbar() {
  return (
    <>
      <div className="nav">
        <p className="nav-logo">Navbar</p>
        <div >
          <input className="nav-search" type="search" aria-label="Search" placeholder=" Search For Shows" />
          <button className="nav-button">Search</button>
        </div>
      </div>  
    </>
  )
}

export default Navbar