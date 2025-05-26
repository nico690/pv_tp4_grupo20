import React from "react";
import "../styles/DeleteProduct.css";

function DeleteProduct({ productId, onDelete }) {
  const handleDelete = (e) => {
    e.stopPropagation();

    if (window.confirm(`¿Estás seguro de eliminar el producto?`)) {
      onDelete(productId);
    }
  };

  return (
    <button onClick={handleDelete} className="delete-button">
      Eliminar
    </button>
  );
}

export default DeleteProduct;
