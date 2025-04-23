"use client"

import { useState } from "react"
import "./App.css"
import ProductList from "./components/ProductList"
import Header from "./components/Header"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app-container">
      <Header title="Quản lý sản phẩm" />
      <main>
        <ProductList />
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>Số lần click: {count}</button>
        </div>
      </main>
    </div>
  )
}

export default App
