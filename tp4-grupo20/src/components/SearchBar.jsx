import React from 'react'
import '../styles/SearchBar.css'

export default function SearchBar({ searchTerm, setSearchTerm }) {
  const handleChange = (e) => {
    setSearchTerm(e.target.value)
  }

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Buscar por ID o descripción..."
        value={searchTerm}
        onChange={handleChange}
      />
    </div>
  )
}
