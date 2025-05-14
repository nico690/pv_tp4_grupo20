import { useState, useEffect } from 'react';
import ProductList from './components/ProductList';
import ProductForm from './components/ProductForm';
import './App.css'; 

function App() {
  const [productos, setProductos] = useState([]); 

  useEffect(() => {
    console.log('Lista de productos actualizada:', productos);
  }, [productos]);

  const handleAddProduct = (nuevoProducto) => {
    if (nuevoProducto && nuevoProducto.descripcion && nuevoProducto.precioUnitario !== undefined) {
       setProductos(prevProductos => [...prevProductos, nuevoProducto]);
    } else {
       console.error("Intento de agregar un producto inválido:", nuevoProducto);
    }
  };

  return (
    <div className="App">
      <h1>Gestión de Productos</h1>
      <ProductForm onAddProduct={handleAddProduct} />
      <hr />
      <ProductList productos={productos} />
    </div>
  );
}

export default App;