"use client"

import { useState } from "react"
import DeleteConfirmation from "./DeleteConfirmation"

const ProductItem = ({ product, onDelete }) => {
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false)
  const [isDeleting, setIsDeleting] = useState(false)

  const handleDeleteClick = () => {
    setShowDeleteConfirmation(true)
  }

  const handleConfirmDelete = () => {
    setIsDeleting(true)

    // Thêm hiệu ứng xoá với timeout
    setTimeout(() => {
      onDelete(product.id)
      setShowDeleteConfirmation(false)
      setIsDeleting(false)
    }, 300)
  }

  const handleCancelDelete = () => {
    setShowDeleteConfirmation(false)
  }

  return (
    <>
      <div className={`product-item ${isDeleting ? "deleting" : ""}`}>
        <div className="product-name">{product.name}</div>
        <div className="product-category">{product.category}</div>
        <div className="product-inventory">{product.inventory}</div>
        <div className="product-price">{product.price.toLocaleString("vi-VN")} VNĐ</div>
        <div className="product-actions">
          <button className="edit-btn">Sửa</button>
          <button className="delete-btn" onClick={handleDeleteClick}>
            Xoá
          </button>
        </div>
      </div>

      <DeleteConfirmation
        isOpen={showDeleteConfirmation}
        onClose={handleCancelDelete}
        onConfirm={handleConfirmDelete}
        productName={product.name}
      />
    </>
  )
}

export default ProductItem
