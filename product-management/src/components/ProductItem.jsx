"use client"

const ProductItem = ({ product, onDelete }) => {
  return (
    <div className="product-item">
      <div className="product-name">{product.name}</div>
      <div className="product-category">{product.category}</div>
      <div className="product-inventory">{product.inventory}</div>
      <div className="product-price">{product.price.toLocaleString("vi-VN")} VNĐ</div>
      <div className="product-actions">
        <button className="edit-btn">Sửa</button>
        <button className="delete-btn" onClick={() => onDelete(product.id)}>
          Xoá
        </button>
      </div>
    </div>
  )
}

export default ProductItem
