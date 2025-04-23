"use client"
import { useState } from "react"
import "./App.css"
import ProductList from "./components/ProductList"
import ProductForm from "./components/ProductForm"
import Header from "./components/Header"

function App() {
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

  const [notification, setNotification] = useState(null)

  const handleAddProduct = (newProduct) => {
    setProducts([...products, newProduct])
    showNotification(`Đã thêm sản phẩm "${newProduct.name}"`)
  }

  const handleDeleteProduct = (id) => {
    const productToDelete = products.find((product) => product.id === id)
    setProducts(products.filter((product) => product.id !== id))
    showNotification(`Đã xoá sản phẩm "${productToDelete.name}"`)
  }

  const showNotification = (message) => {
    setNotification(message)
    setTimeout(() => {
      setNotification(null)
    }, 3000)
  }

  return (
    <div className="app-container">
      <Header title="Quản lý sản phẩm" />
      <main className="main-content">
        {notification && <div className="notification">{notification}</div>}
        <ProductForm onAddProduct={handleAddProduct} />
        <ProductList products={products} onDelete={handleDeleteProduct} />
      </main>
    </div>
  )
}

export default App
