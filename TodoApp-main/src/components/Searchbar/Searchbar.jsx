import React from "react";
import "./Searchbar.css";

const SearchBar = ({ searchQuery, handleSearch, handleSubmitSearch }) => {
  return (
    <div className="search-bar">
      <label className="search">Search</label>
      <form onSubmit={handleSubmitSearch}>
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearch}
          placeholder="Search tasks"
        />
      </form>
    </div>
  );
};

export default SearchBar;
