"use client"

import { useState } from "react"
import "./ProductForm.css"

const ProductForm = ({ onAddProduct }) => {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    category: "",
    inventory: "",
  })

  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setProduct({
      ...product,
      [name]: value,
    })

    // Clear error when user types
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      })
    }
  }

  const validateForm = () => {
    const newErrors = {}

    if (!product.name.trim()) {
      newErrors.name = "Tên sản phẩm không được để trống"
    }

    if (!product.price) {
      newErrors.price = "Giá không được để trống"
    } else if (isNaN(product.price) || Number(product.price) <= 0) {
      newErrors.price = "Giá phải là số dương"
    }

    if (!product.category.trim()) {
      newErrors.category = "Danh mục không được để trống"
    }

    if (!product.inventory) {
      newErrors.inventory = "Tồn kho không được để trống"
    } else if (
      isNaN(product.inventory) ||
      Number(product.inventory) < 0 ||
      !Number.isInteger(Number(product.inventory))
    ) {
      newErrors.inventory = "Tồn kho phải là số nguyên không âm"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (validateForm()) {
      onAddProduct({
        ...product,
        id: Date.now(), // Tạo ID tạm thời dựa trên timestamp
        price: Number(product.price),
        inventory: Number(product.inventory),
      })

      // Reset form sau khi thêm
      setProduct({
        name: "",
        price: "",
        category: "",
        inventory: "",
      })
    }
  }

  return (
    <div className="product-form-container">
      <h2>Thêm sản phẩm mới</h2>
      <form onSubmit={handleSubmit} className="product-form">
        <div className="form-group">
          <label htmlFor="name">Tên sản phẩm:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={product.name}
            onChange={handleChange}
            className={errors.name ? "error" : ""}
          />
          {errors.name && <span className="error-message">{errors.name}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="price">Giá (VNĐ):</label>
          <input
            type="number"
            id="price"
            name="price"
            value={product.price}
            onChange={handleChange}
            className={errors.price ? "error" : ""}
          />
          {errors.price && <span className="error-message">{errors.price}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="category">Danh mục:</label>
          <input
            type="text"
            id="category"
            name="category"
            value={product.category}
            onChange={handleChange}
            className={errors.category ? "error" : ""}
          />
          {errors.category && <span className="error-message">{errors.category}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="inventory">Tồn kho:</label>
          <input
            type="number"
            id="inventory"
            name="inventory"
            value={product.inventory}
            onChange={handleChange}
            className={errors.inventory ? "error" : ""}
          />
          {errors.inventory && <span className="error-message">{errors.inventory}</span>}
        </div>

        <button type="submit" className="add-product-btn">
          Thêm sản phẩm
        </button>
      </form>
    </div>
  )
}

export default ProductForm
