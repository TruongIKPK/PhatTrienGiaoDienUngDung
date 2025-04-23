"use client"
import "./App.css"
import ProductList from "./components/ProductList"
import Header from "./components/Header"

function App() {
  return (
    <div className="app-container">
      <Header title="Quản lý sản phẩm" />
      <main className="main-content">
        <ProductList />
      </main>
    </div>
  )
}

export default App
