"use client"

import ProductItem from "./ProductItem"
import "./ProductList.css"

const ProductList = ({ products, onDelete, searchTerm, selectedCategory }) => {
  return (
    <div className="product-list-container">
      <h2>
        Danh sách sản phẩm ({products.length})
        {searchTerm && <span className="search-results"> - Kết quả tìm kiếm cho "{searchTerm}"</span>}
        {selectedCategory !== "Tất cả" && (
          <span className="category-filter-results"> - Danh mục: {selectedCategory}</span>
        )}
      </h2>

      <div className="product-list-header">
        <div className="product-name-header">Tên sản phẩm</div>
        <div className="product-category-header">Danh mục</div>
        <div className="product-inventory-header">Tồn kho</div>
        <div className="product-price-header">Giá</div>
        <div className="product-actions-header">Thao tác</div>
      </div>

      <div className="products-container">
        {products.length > 0 ? (
          products.map((product) => <ProductItem key={product.id} product={product} onDelete={onDelete} />)
        ) : (
          <div className="no-products">
            {searchTerm ? `Không tìm thấy sản phẩm nào phù hợp với "${searchTerm}"` : "Không có sản phẩm nào"}
          </div>
        )}
      </div>
    </div>
  )
}

export default ProductList
