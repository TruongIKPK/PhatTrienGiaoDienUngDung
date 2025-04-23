"use client"

import { useState } from "react"
import ProductItem from "./ProductItem"

const ProductList = () => {
  const [products, setProducts] = useState([
    { id: 1, name: "Laptop Dell XPS 13", price: 25000000, category: "Laptop" },
    { id: 2, name: "iPhone 15 Pro", price: 30000000, category: "Điện thoại" },
    { id: 3, name: 'Màn hình LG 27"', price: 5000000, category: "Màn hình" },
  ])

  return (
    <div className="product-list">
      <h2>Danh sách sản phẩm</h2>
      <div className="products">
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default ProductList
