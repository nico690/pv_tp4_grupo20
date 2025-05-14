import React, { useState } from 'react';

function ProductForm({ onAddProduct }) {
  const [descripcion, setDescripcion] = useState('');
  const [precioUnitario, setPrecioUnitario] = useState('');
  const [descuento, setDescuento] = useState('');
  const [stock, setStock] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'descripcion':
        setDescripcion(value);
        break;
      case 'precioUnitario':
        if (/^\d*\.?\d*$/.test(value) || value === '') {
           setPrecioUnitario(value);
        }
        break;
      case 'descuento':
        if (/^\d*$/.test(value) || value === '') {
           setDescuento(value);
        }
        break;
      case 'stock':
        if (/^\d*$/.test(value) || value === '') {
           setStock(value);
        }
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const precio = parseFloat(precioUnitario);
    const desc = parseInt(descuento, 10);
    const stck = parseInt(stock, 10);        

    if (!descripcion || isNaN(precio) || precio < 0 || isNaN(desc) || desc < 0 || desc > 100 || isNaN(stck) || stck < 0) {
        alert('Por favor, completa todos los campos correctamente. El descuento debe ser entre 0 y 100.');
        return;
    }

    const precioConDescuento = precio * (1 - desc / 100);

    const id = Date.now();

    const nuevoProducto = {
      id: id,
      descripcion: descripcion,
      precioUnitario: precio,
      descuento: desc,      
      precioConDescuento: precioConDescuento,
      stock: stck           
    };

    onAddProduct(nuevoProducto);

    setDescripcion('');
    setPrecioUnitario('');
    setDescuento('');
    setStock('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Agregar Producto</h2>
      <div>
        <label htmlFor="descripcion">Descripción:</label>
        <input
          type="text"
          id="descripcion"
          name="descripcion"
          value={descripcion}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label htmlFor="precioUnitario">Precio Unitario:</label>
        <input
          type="number"
          id="precioUnitario"
          name="precioUnitario"
          value={precioUnitario}
          onChange={handleInputChange}
          step="0.01"
          required
        />
      </div>
       <div>
        <label htmlFor="descuento">Descuento (%):</label>
        <input
          type="number"
          id="descuento"
          name="descuento"
          value={descuento}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label htmlFor="stock">Stock:</label>
        <input
          type="number"
          id="stock"
          name="stock"
          value={stock}
          onChange={handleInputChange}
          required
        />
      </div>
      <button type="submit">Agregar Producto</button>
    </form>
  );
}

export default ProductForm;