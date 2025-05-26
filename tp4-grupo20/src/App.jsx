// src/App.jsx
import React, { useState, useEffect } from 'react';
import ProductList from "./components/ProductList";
import ProductForm from "./components/ProductForm";
import SearchBar from "./components/SearchBar";
import './App.css';

function App() {
  const [productos, setProductos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    console.log("Lista de productos actualizada:", productos);
  }, [productos]);

  const handleAddProduct = (nuevoProducto) => {
    if (
      nuevoProducto &&
      nuevoProducto.descripcion &&
      nuevoProducto.precioUnitario !== undefined
    ) {
   
      const productoConId = { ...nuevoProducto, id: nuevoProducto.id || Date.now().toString() };
      setProductos((prevProductos) => [...prevProductos, productoConId]);
    } else {
      console.error("Intento de agregar un producto inválido:", nuevoProducto);
    }
  };

  
  const handleDeleteProduct = (productIdToDelete) => {
    setProductos((prevProductos) =>
      prevProductos.filter((producto) => producto.id !== productIdToDelete)
    );
  };

  return (
    <div className="App">
      <h1>Gestión de Productos</h1>
      <ProductForm onAddProduct={handleAddProduct} />
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <hr />
      <ProductList
        productos={productos}
        searchTerm={searchTerm}
        onDeleteProduct={handleDeleteProduct} 
      />
    </div>
  );
}

export default App;