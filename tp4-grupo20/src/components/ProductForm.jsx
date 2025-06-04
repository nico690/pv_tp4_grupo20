import { useState, useEffect } from 'react'
import '../styles/ProductForm.css'

export default function ProductForm({ onSubmit, productToEdit, cancelEdit }) {
  const [formData, setFormData] = useState({
    descripcion: '',
    precioUnitario: '',
    descuento: '',
    stock: ''
  })

  useEffect(() => {
    if (productToEdit) {
      setFormData({
        descripcion: productToEdit.descripcion,
        precioUnitario: productToEdit.precioUnitario.toString(),
        descuento: productToEdit.descuento.toString(),
        stock: productToEdit.stock.toString()
      })
    } else {
      setFormData({
        descripcion: '',
        precioUnitario: '',
        descuento: '',
        stock: ''
      })
    }
  }, [productToEdit])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const validate = () => {
    const { descripcion, precioUnitario, descuento, stock } = formData

    if (!descripcion || !precioUnitario || !descuento || !stock) {
      return 'Todos los campos son obligatorios'
    }

    const precio = parseFloat(precioUnitario)
    const desc = parseFloat(descuento)
    const stk = parseInt(stock)

    if (isNaN(precio) || precio <= 0) {
      return 'El precio debe ser un número positivo'
    }

    if (isNaN(desc) || desc < 0 || desc > 100) {
      return 'El descuento debe estar entre 0 y 100'
    }

    if (isNaN(stk) || stk < 0) {
      return 'El stock debe ser un número entero positivo'
    }

    return ''
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const validationError = validate()
    if (validationError) {
      alert(validationError)
      return
    }

    const finalData = {
      descripcion: formData.descripcion,
      precioUnitario: parseFloat(formData.precioUnitario),
      descuento: parseFloat(formData.descuento),
      stock: parseInt(formData.stock)
    }

    onSubmit(finalData)

    setFormData({
      descripcion: '',
      precioUnitario: '',
      descuento: '',
      stock: ''
    })
  }

  return (
    <form className="product-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="descripcion"
        placeholder="Descripción"
        value={formData.descripcion}
        onChange={handleChange}
      />
      <input
        type="number"
        name="precioUnitario"
        placeholder="Precio Unitario"
        value={formData.precioUnitario}
        onChange={handleChange}
        step="0.01"
      />
      <input
        type="number"
        name="descuento"
        placeholder="Descuento (%)"
        value={formData.descuento}
        onChange={handleChange}
        step="0.01"
      />
      <input
        type="number"
        name="stock"
        placeholder="Stock"
        value={formData.stock}
        onChange={handleChange}
      />
      <div className="form-buttons">
        <button type="submit">{productToEdit ? 'Modificar' : 'Agregar'}</button>
        {productToEdit && <button type="button" onClick={cancelEdit}>Cancelar</button>}
      </div>
    </form>
  )
}
