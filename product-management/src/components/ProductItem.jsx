const ProductItem = ({ product }) => {
  return (
    <div className="product-item">
      <h3>{product.name}</h3>
      <p className="category">{product.category}</p>
      <p className="price">{product.price.toLocaleString("vi-VN")} VNĐ</p>
      <div className="actions">
        <button className="edit-btn">Sửa</button>
        <button className="delete-btn">Xóa</button>
      </div>
    </div>
  )
}

export default ProductItem
