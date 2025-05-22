import React, { useState } from 'react';
import '../styles/ProductForm.css';
import { STRING_EMPTY } from "../utils/constant";


function ProductForm({ onAddProduct }) {
  const [values, setValues] = useState(INITIAL_VALUES);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case FIELD_NAMES.UNIT_PRICE:
        if (!/^\d*\.?\d*$/.test(value)) return;
        break;
      case FIELD_NAMES.DISCOUNT:
        if (!/^\d*$/.test(value)) return;
        break;
      case FIELD_NAMES.STOCK:
        if (!/^\d*$/.test(value)) return;
        break;
      default:
        break;
    }

    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const precio = parseFloat(values.unitPrice);
    const desc = parseInt(values.discount, 10);
    const stck = parseInt(values.stock, 10);

    if (
      !values.description ||
      isNaN(precio) ||
      precio < 0 ||
      isNaN(desc) ||
      desc < 0 ||
      desc > 100 ||
      isNaN(stck) ||
      stck < 0
    ) {
      alert(
        "Por favor, completa todos los campos correctamente. El descuento debe ser entre 0 y 100."
      );
      return;
    }

    const precioConDescuento = precio * (1 - desc / 100);

    const id = Date.now();

    const nuevoProducto = {
      id: id,
      descripcion: values.description,
      precioUnitario: precio,
      descuento: desc,
      precioConDescuento: precioConDescuento,
      stock: stck,
    };

    onAddProduct(nuevoProducto);

    setValues(INITIAL_VALUES);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Agregar Producto</h2>
      <div>
        <label htmlFor={FIELD_NAMES.DESCRIPTION}>Descripción:</label>
        <input
          type="text"
          id={FIELD_NAMES.DESCRIPTION}
          name={FIELD_NAMES.DESCRIPTION}
          value={values.description}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label htmlFor={FIELD_NAMES.UNIT_PRICE}>Precio Unitario:</label>
        <input
          type="number"
          id={FIELD_NAMES.UNIT_PRICE}
          name={FIELD_NAMES.UNIT_PRICE}
          value={values.unitPrice}
          onChange={handleInputChange}
          step="0.01"
          required
        />
      </div>
      <div>
        <label htmlFor={FIELD_NAMES.DISCOUNT}>Descuento (%):</label>
        <input
          type="number"
          id={FIELD_NAMES.DISCOUNT}
          name={FIELD_NAMES.DISCOUNT}
          value={values.discount}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label htmlFor={FIELD_NAMES.STOCK}>Stock:</label>
        <input
          type="number"
          id={FIELD_NAMES.STOCK}
          name={FIELD_NAMES.STOCK}
          value={values.stock}
          onChange={handleInputChange}
          required
        />
      </div>
      <button type="submit">Agregar Producto</button>
    </form>
  );
}

export default ProductForm;
