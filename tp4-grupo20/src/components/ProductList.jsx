import React from 'react';
import ProductItem from './ProductItem';

function ProductList({ productos }) {
  return (
    <div>
      <h2>Lista de Productos</h2>
      {productos.length === 0 ? (
        <p>No hay productos cargados.</p>
      ) : (
        productos.map(producto => (
          <ProductItem key={producto.id} producto={producto} />
        ))
      )}
    </div>
  );
}

export default ProductList;