"use client"
import { useState, useMemo, useEffect } from "react"
import "./App.css"
import ProductList from "./components/ProductList"
import ProductForm from "./components/ProductForm"
import SearchBar from "./components/SearchBar"
import Header from "./components/Header"
import CategoryFilter from "./components/CategoryFilter"
import ProductSummary from "./components/ProductSummary"

function App() {
  const [products, setProducts] = useState(() => {
    const savedProducts = localStorage.getItem("products")
    return savedProducts
      ? JSON.parse(savedProducts)
      : [
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
        ]
  })

  const [notification, setNotification] = useState(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("Tất cả")

  // Lọc sản phẩm theo từ khóa tìm kiếm
  const filteredProducts = useMemo(() => {
    let filtered = products

    // Filter by search term
    if (searchTerm.trim()) {
      const searchTermLower = searchTerm.toLowerCase().trim()
      filtered = filtered.filter((product) => product.name.toLowerCase().includes(searchTermLower))
    }

    // Filter by category
    if (selectedCategory !== "Tất cả") {
      filtered = filtered.filter((product) => product.category === selectedCategory)
    }

    return filtered
  }, [products, searchTerm, selectedCategory])

  const handleSearch = (term) => {
    setSearchTerm(term)
  }

  const saveProductsToLocalStorage = (productsData) => {
    localStorage.setItem("products", JSON.stringify(productsData))
  }

  const handleAddProduct = (newProduct) => {
    setProducts([...products, newProduct])
    showNotification(`Đã thêm sản phẩm "${newProduct.name}" và lưu vào localStorage`)
  }

  const handleDeleteProduct = (id) => {
    const productToDelete = products.find((product) => product.id === id)
    setProducts(products.filter((product) => product.id !== id))
    showNotification(`Đã xoá sản phẩm "${productToDelete.name}" và cập nhật localStorage`)
  }

  const showNotification = (message) => {
    setNotification(message)
    setTimeout(() => {
      setNotification(null)
    }, 3000)
  }

  const handleCategoryChange = (category) => {
    setSelectedCategory(category)
  }

  useEffect(() => {
    saveProductsToLocalStorage(products)
  }, [products])

  return (
    <div className="app-container">
      <Header title="Quản lý sản phẩm" />
      <main className="main-content">
        {notification && <div className="notification">{notification}</div>}
        <ProductForm onAddProduct={handleAddProduct} />
        <ProductSummary products={products} />
        <div className="product-list-section">
          <div className="filters-container">
            <SearchBar onSearch={handleSearch} />
            <CategoryFilter
              products={products}
              onCategoryChange={handleCategoryChange}
              selectedCategory={selectedCategory}
            />
          </div>
          <ProductList
            products={filteredProducts}
            onDelete={handleDeleteProduct}
            searchTerm={searchTerm}
            selectedCategory={selectedCategory}
          />
        </div>
      </main>
    </div>
  )
}

export default App
