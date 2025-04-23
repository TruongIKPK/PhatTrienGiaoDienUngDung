"use client"

import { useEffect, useRef } from "react"
import "./DeleteConfirmation.css"

const DeleteConfirmation = ({ isOpen, onClose, onConfirm, productName }) => {
  const modalRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose()
      }
    }

    const handleEscKey = (event) => {
      if (event.key === "Escape") {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside)
      document.addEventListener("keydown", handleEscKey)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      document.removeEventListener("keydown", handleEscKey)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="delete-confirmation-overlay">
      <div className="delete-confirmation-modal" ref={modalRef}>
        <h3>Xác nhận xoá</h3>
        <p>
          Bạn có chắc chắn muốn xoá sản phẩm <strong>"{productName}"</strong>?
        </p>
        <p className="warning-text">Hành động này không thể hoàn tác!</p>
        <div className="delete-confirmation-actions">
          <button className="cancel-btn" onClick={onClose}>
            Huỷ
          </button>
          <button className="confirm-delete-btn" onClick={onConfirm}>
            Xoá
          </button>
        </div>
      </div>
    </div>
  )
}

export default DeleteConfirmation
