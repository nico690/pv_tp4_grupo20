import React from 'react';
import ProductItem from './ProductItem';
import '../styles/ProductList.css';

function ProductList({ productos, searchTerm }) {
  // Filtrar productos según el término de búsqueda
  const productosFiltrados = productos.filter(producto =>
    producto.descripcion.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2>Lista de Productos</h2>
      {productosFiltrados.length === 0 ? (
        <p>No hay productos cargados.</p>
      ) : (
        productosFiltrados.map(producto => (
          <ProductItem key={producto.id} producto={producto} />
        ))
      )}
    </div>
  );
}

export default ProductList;
