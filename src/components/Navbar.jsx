import React from "react";
import SearchBar from "./SearchBar";

function Navbar({ titleSearch, onSearch }) {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="../public/images/logo.svg" alt="" />
        <p>Notify</p>
      </div>
      <SearchBar titleSearch={titleSearch} onSearch={onSearch} />
    </div>
  );
}

export default Navbar;
