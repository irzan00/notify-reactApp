import React from "react";
import SearchBar from "./SearchBar";

function Navbar({ titleSearch, onSearch }) {
  return (
    <nav className="navbar bg-light sticky-top p-4 gap-4 justify-content-center justify-content-sm-between">
        <div className="logo">
          <img src="../public/images/logo.svg" alt="" />
          <p>Notify</p>
        </div>
        <SearchBar titleSearch={titleSearch} onSearch={onSearch} />
    </nav>
  );
}

export default Navbar;
