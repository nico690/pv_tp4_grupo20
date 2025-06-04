import '../styles/ProductItem.css'

export default function ProductItem({
  product,
  isSelected,
  onSelect,
  showActions,
  onDelete,
  onEdit
}) {
  const precioConDescuento = (
    product.precioUnitario *
    (1 - product.descuento / 100)
  ).toFixed(2)

  return (
    <div
      className={`product-item ${isSelected ? 'selected' : ''}`}
      onClick={onSelect}
      tabIndex={0}
      role="button"
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') onSelect()
      }}
    >
      <p><strong>ID:</strong> {product.id}</p>
      <p><strong>Descripción:</strong> {product.descripcion}</p>
      <p><strong>Precio Unitario:</strong> ${product.precioUnitario.toFixed(2)}</p>
      <p><strong>Descuento:</strong> {product.descuento}%</p>
      <p><strong>Precio con Desc:</strong> ${precioConDescuento}</p>
      <p><strong>Stock:</strong> {product.stock}</p>

      {showActions && (
        <div className="product-item-actions">
          <button type="button" onClick={(e) => { e.stopPropagation(); onEdit() }}>
            Modificar
          </button>
          <button type="button" onClick={(e) => { e.stopPropagation(); onDelete() }}>
            Eliminar
          </button>
        </div>
      )}
    </div>
  )
}
