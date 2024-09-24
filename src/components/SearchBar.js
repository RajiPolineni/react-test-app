import React from 'react';

const SearchBar = ({ searchTerm, setSearchTerm, onClear }) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button className="clear-button" onClick={onClear}>Clear</button>
    </div>
  );
};

export default SearchBar;
