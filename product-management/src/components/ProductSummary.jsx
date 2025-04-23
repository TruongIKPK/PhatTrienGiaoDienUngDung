const ProductSummary = ({ products }) => {
    // Calculate total inventory
    const totalInventory = products.reduce((total, product) => total + product.inventory, 0)
  
    return (
      <div className="product-summary">
        <div className="summary-item">
          <span className="summary-label">Tổng sản phẩm:</span>
          <span className="summary-value">{products.length}</span>
        </div>
        <div className="summary-item">
          <span className="summary-label">Tổng tồn kho:</span>
          <span className="summary-value">{totalInventory}</span>
        </div>
      </div>
    )
  }
  
  export default ProductSummary
  