import ProductItem from './ProductItem'
import '../styles/ProductList.css'

export default function ProductList({
  products,
  selectedProductId,
  onSelectProduct,
  showActions,
  onDelete,
  onEdit
}) {
  return (
    <div className="product-list">
      {products.length === 0 && <p>No hay productos para mostrar</p>}
      {products.map((product) => (
        <ProductItem
          key={product.id}
          product={product}
          isSelected={selectedProductId === product.id}
          onSelect={() => onSelectProduct(product.id)}
          showActions={showActions && selectedProductId === product.id}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  )
}
