import React from 'react';
import '../styles/ProductItem.css';

function ProductItem({ producto }) {
  const { id, descripcion, precioUnitario, descuento, precioConDescuento, stock } = producto;

  return (
    <div style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
      <h3>{descripcion} (ID: {id})</h3>
      <p>Precio Unitario: ${precioUnitario.toFixed(2)}</p>
      <p>Descuento: {descuento}%</p>
      <p>Precio con Descuento: ${precioConDescuento.toFixed(2)}</p>
      <p>Stock: {stock}</p>
    </div>
  );
}

export default ProductItem;