import React, { useMemo } from "react";
import ProductItem from "./ProductItem";

function ProductList({ productos, searchTerm }) {
  // Filtrar productos según el término de búsqueda
  const productosFiltrados = useMemo(
    () =>
      productos.filter(
        (producto) =>
          `${producto.id}`
            .toLowerCase()
            .trim()
            .includes(searchTerm.toLowerCase()) ||
          producto.descripcion
            .toLowerCase()
            .trim()
            .includes(searchTerm.toLowerCase())
      ),
    [productos, searchTerm]
  );
  return (
    <div>
      <h2>Lista de Productos</h2>
      {productosFiltrados.length === 0 ? (
        <p>No hay productos cargados.</p>
      ) : (
        productosFiltrados.map((producto) => (
          <ProductItem key={producto.id} producto={producto} />
        ))
      )}
    </div>
  );
}

export default ProductList;
