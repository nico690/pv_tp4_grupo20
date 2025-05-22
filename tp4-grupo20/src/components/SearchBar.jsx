import React from 'react';
import '../styles/SearchBar.css';


const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div>
      <h2>Buscar Producto</h2>
      <input
        type="text"
        placeholder="Id o Descripcion..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="p-2 border rounded w-full mb-4"
      />
    </div>
  );
};

export default SearchBar;
