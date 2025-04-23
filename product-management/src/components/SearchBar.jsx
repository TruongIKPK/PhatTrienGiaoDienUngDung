"use client"

import { useState, useEffect, useRef } from "react"
import { Search, X } from "./Icons"
import "./SearchBar.css"

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("")
  const inputRef = useRef(null)

  const handleChange = (e) => {
    const value = e.target.value
    setSearchTerm(value)
    onSearch(value)
  }

  const handleClear = () => {
    setSearchTerm("")
    onSearch("")
    inputRef.current.focus()
  }

  // Focus input on mount
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [])

  return (
    <div className="search-bar">
      <div className="search-input-container">
        <Search className="search-icon" />
        <input
          ref={inputRef}
          type="text"
          placeholder="Tìm kiếm sản phẩm theo tên..."
          value={searchTerm}
          onChange={handleChange}
          className="search-input"
        />
        {searchTerm && (
          <button className="clear-button" onClick={handleClear} aria-label="Xóa tìm kiếm">
            <X className="clear-icon" />
          </button>
        )}
      </div>
    </div>
  )
}

export default SearchBar
