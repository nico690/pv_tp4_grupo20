// src/App.jsx
import React, { useState, useEffect } from "react";
import ProductList from "./components/ProductList";
import ProductForm from "./components/ProductForm";
import SearchBar from "./components/SearchBar";
import "./App.css";
import { STRING_EMPTY } from "./utils/constant";

function App() {
  const [productos, setProductos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [productSelected, setProductSelected] = useState(null);

  useEffect(() => {
    console.log("Lista de productos actualizada:", productos);
  }, [productos]);

  const handleAddProduct = (nuevoProducto) => {
    if (
      nuevoProducto &&
      nuevoProducto.descripcion &&
      nuevoProducto.precioUnitario !== undefined
    ) {
      const productoConId = {
        ...nuevoProducto,
        id: nuevoProducto.id || Date.now().toString(),
      };
      setProductos((prevProductos) => [...prevProductos, productoConId]);
    } else {
      console.error("Intento de agregar un producto inválido:", nuevoProducto);
    }
  };

  const handleDeleteProduct = (productIdToDelete) => {
    setProductos((prevProductos) =>
      prevProductos.filter((producto) => producto.id !== productIdToDelete)
    );

    setProductSelected(null);
  };
  const onAddDate = (productSelected) => {
    setProductos([
      ...productos.filter((producto) => {
        console.log(producto, productSelected);
        return producto.id !== productSelected.id;
      }),
      productSelected,
    ]);
  };
  return (
    <div className="App">
      <h1>Gestión de Productos</h1>
      <ProductForm
        onAddProduct={handleAddProduct}
        productSelected={productSelected}
        onAddDate={onAddDate}
      />

      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <hr />
      <ProductList
        productos={productos}
        searchTerm={searchTerm}
        onDeleteProduct={handleDeleteProduct}
        productSelected={productSelected}
        setProductSelected={setProductSelected}
      />
    </div>
  );
}

export default App;
