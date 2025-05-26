import React, { useMemo } from 'react';
import ProductItem from './ProductItem';
import '../styles/ProductList.css'; 

function ProductList({ productos, searchTerm, onDeleteProduct }) { 
  const productosFiltrados = useMemo(
    () =>
      productos.filter((producto) => {
        const idString = producto.id ? String(producto.id).toLowerCase().trim() : '';
        const descripcionString = producto.descripcion ? producto.descripcion.toLowerCase().trim() : '';
        const searchTermLower = searchTerm.toLowerCase().trim();

        return idString.includes(searchTermLower) || descripcionString.includes(searchTermLower);
      }
      ),
    [productos, searchTerm]
  );

  return (
    <div>
      <h2>Lista de Productos</h2>
      {productosFiltrados.length === 0 ? (
        <p>No hay productos cargados o que coincidan con la búsqueda.</p>
      ) : (
        productosFiltrados.map((producto) => (
          <ProductItem
            key={producto.id}
            producto={producto}
            onDeleteProduct={onDeleteProduct} 
          />
        ))
      )}
    </div>
  );
}

export default ProductList;