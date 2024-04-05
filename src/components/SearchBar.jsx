import React from "react";

function SearchBar({ titleSearch, onSearch }) {
  return (
    <input
      type="text"
      placeholder="Cari Catatan"
      className="search-bar"
      value={titleSearch}
      onChange={(event) => onSearch(event.target.value)}
    />
  );
}

export default SearchBar;
