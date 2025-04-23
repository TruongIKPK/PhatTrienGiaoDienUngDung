"use client"

import { useState, useEffect } from "react"
import "./CategoryFilter.css"

const CategoryFilter = ({ products, onCategoryChange, selectedCategory }) => {
  const [categories, setCategories] = useState([])

  // Extract unique categories from products
  useEffect(() => {
    const uniqueCategories = ["Tất cả", ...new Set(products.map((product) => product.category))]
    setCategories(uniqueCategories)
  }, [products])

  const handleCategoryChange = (e) => {
    onCategoryChange(e.target.value)
  }

  return (
    <div className="category-filter">
      <label htmlFor="category-select">Lọc theo danh mục:</label>
      <select id="category-select" value={selectedCategory} onChange={handleCategoryChange} className="category-select">
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  )
}

export default CategoryFilter
