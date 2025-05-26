import React from 'react';
import '../styles/ProductItem.css'; 
import DeleteProduct from './DeleteProduct'; 

function ProductItem({ producto, onDeleteProduct }) { 
  const { id, descripcion, precioUnitario, descuento, precioConDescuento, stock } = producto;

  return (
    <div className="product-item-card" style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
      
      <h3>{descripcion}</h3>
      <p>Precio Unitario: ${precioUnitario ? precioUnitario.toFixed(2) : 'N/A'}</p>
      <p>Descuento: {descuento !== undefined ? `${descuento}%` : 'N/A'}</p>
      <p>Precio con Descuento: ${precioConDescuento ? precioConDescuento.toFixed(2) : 'N/A'}</p>
      <p>Stock: {stock !== undefined ? stock : 'N/A'}</p>
      <DeleteProduct productId={id} onDelete={onDeleteProduct} /> 
    </div>
  );
}

export default ProductItem;