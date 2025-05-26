import React from "react";
import { STRING_EMPTY } from "../utils/constant";
import DeleteProduct from "./DeleteProduct";
import "../styles/ProductItem.css";

const ProductItem = ({
  producto,
  onSelected,
  isProductSelected,
  index,
  onDeleteProduct,
}) => {
  const {
    id,
    descripcion,
    precioUnitario,
    descuento,
    precioConDescuento,
    stock,
  } = producto;

  const handleSelected = () => {
    onSelected(!isProductSelected ? { ...producto, index } : null);
  };

  return (
    <div
      className={`product-item-card product ${
        isProductSelected ? "product-selected" : STRING_EMPTY
      }`}
      onClick={handleSelected}
    >
      <h3>
        {descripcion} (ID: {id})
      </h3>
      <p>
        Precio Unitario: ${precioUnitario ? precioUnitario.toFixed(2) : "N/A"}
      </p>
      <p>Descuento: {descuento !== undefined ? `${descuento}%` : "N/A"}</p>
      <p>
        Precio con Descuento: $
        {precioConDescuento ? precioConDescuento.toFixed(2) : "N/A"}
      </p>
      <p>Stock: {stock !== undefined ? stock : "N/A"}</p>
      <DeleteProduct productId={id} onDelete={onDeleteProduct} />
    </div>
  );
};

export default ProductItem;
