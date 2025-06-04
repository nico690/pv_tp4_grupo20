import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react'
import ProductForm from './components/ProductForm'
import SearchBar from './components/SearchBar'
import ProductList from './components/ProductList'

function generateRandomId() {
  return Math.floor(Math.random() * 1000000) + 1000
}

export default function App() {
  const [products, setProducts] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedProductId, setSelectedProductId] = useState(null)
  const [productToEdit, setProductToEdit] = useState(null)
  const [feedbackMsg, setFeedbackMsg] = useState('')
  const formSectionRef = useRef(null)

  useEffect(() => {
    console.log('Lista productos actualizada:', products)
  }, [products])

  const filteredProducts = useMemo(() => {
    const term = searchTerm.toLowerCase()
    return products.filter(
      (p) =>
        p.descripcion.toLowerCase().includes(term) ||
        p.id.toString().includes(term)
    )
  }, [products, searchTerm])

  const clearFeedback = () => {
    setTimeout(() => setFeedbackMsg(''), 3000)
  }

  const handleAddOrEdit = useCallback(
    (productData) => {
      if (productToEdit) {
        setProducts((prev) =>
          prev.map((p) =>
            p.id === productToEdit.id ? { ...productData, id: p.id } : p
          )
        )
        setFeedbackMsg('Producto modificado correctamente')
        setProductToEdit(null)
      } else {
        let newId
        do {
          newId = generateRandomId()
        } while (products.some((p) => p.id === newId))

        setProducts((prev) => [...prev, { ...productData, id: newId }])
        setFeedbackMsg('Producto agregado correctamente')
      }
      setSelectedProductId(null)
      clearFeedback()
    },
    [productToEdit, products]
  )

  const handleSelectProduct = useCallback((id) => {
    setSelectedProductId(id === selectedProductId ? null : id)
    setProductToEdit(null)
  }, [selectedProductId])

  const handleDelete = useCallback(() => {
    if (
      selectedProductId !== null &&
      window.confirm('¿Estás seguro que quieres eliminar este producto?')
    ) {
      setProducts((prev) => prev.filter((p) => p.id !== selectedProductId))
      setFeedbackMsg('Producto eliminado correctamente')
      setSelectedProductId(null)
      setProductToEdit(null)
      clearFeedback()
    }
  }, [selectedProductId])

  const handleEditClick = useCallback(() => {
    if (selectedProductId !== null) {
      const product = products.find((p) => p.id === selectedProductId)
      setProductToEdit(product)
      formSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [selectedProductId, products])

  const handleCancelEdit = useCallback(() => {
    setProductToEdit(null)
    setSelectedProductId(null)
  }, [])

  return (
    <div className="app-container">
      <h1>Gestión de Productos</h1>

      <section ref={formSectionRef} className="product-form-section">
        <h2>{productToEdit ? 'Modificar Producto' : 'Agregar Producto'}</h2>
        <ProductForm
          onSubmit={handleAddOrEdit}
          productToEdit={productToEdit}
          cancelEdit={handleCancelEdit}
        />
      </section>

      <section className="search-bar-section">
        <h2>Búsqueda de Productos</h2>
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </section>

      <section className="product-list-section">
        <h2>Lista de Productos</h2>
        <ProductList
          products={filteredProducts}
          selectedProductId={selectedProductId}
          onSelectProduct={handleSelectProduct}
          showActions={selectedProductId !== null}
          onDelete={handleDelete}
          onEdit={handleEditClick}
        />
      </section>

      {feedbackMsg && <div className="feedback-message">{feedbackMsg}</div>}
    </div>
  )
}
