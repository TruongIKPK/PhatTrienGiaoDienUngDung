"use client"

import { useState } from "react"
import ProductItem from "./ProductItem"
import "./ProductList.css"

const ProductList = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Laptop Dell XPS 13",
      price: 25000000,
      category: "Laptop",
      inventory: 15,
    },
    {
      id: 2,
      name: "iPhone 15 Pro",
      price: 30000000,
      category: "Điện thoại",
      inventory: 8,
    },
    {
      id: 3,
      name: 'Màn hình LG 27"',
      price: 5000000,
      category: "Màn hình",
      inventory: 20,
    },
    {
      id: 4,
      name: "Chuột Logitech MX Master 3",
      price: 2500000,
      category: "Phụ kiện",
      inventory: 30,
    },
    {
      id: 5,
      name: "Bàn phím cơ Keychron K2",
      price: 2200000,
      category: "Phụ kiện",
      inventory: 12,
    },
    {
      id: 6,
      name: "Tai nghe Sony WH-1000XM4",
      price: 8500000,
      category: "Âm thanh",
      inventory: 5,
    },
  ])

  const handleDelete = (id) => {
    setProducts(products.filter((product) => product.id !== id))
  }

  return (
    <div className="product-list-container">
      <h2>Danh sách sản phẩm</h2>

      <div className="product-list-header">
        <div className="product-name-header">Tên sản phẩm</div>
        <div className="product-category-header">Danh mục</div>
        <div className="product-inventory-header">Tồn kho</div>
        <div className="product-price-header">Giá</div>
        <div className="product-actions-header">Thao tác</div>
      </div>

      <div className="products-container">
        {products.map((product) => (
          <ProductItem key={product.id} product={product} onDelete={handleDelete} />
        ))}
      </div>
    </div>
  )
}

export default ProductList
