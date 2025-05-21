import React from 'react';

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <input
      type="text"
      placeholder="Buscar productos..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className="p-2 border rounded w-full mb-4"
    />
  );
};

export default SearchBar;
