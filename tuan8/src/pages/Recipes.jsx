import React, { useState } from 'react'
import { FaSearch, FaBookmark } from 'react-icons/fa'

const categories = [
  { id: 1, name: 'All', icon: '🍽️' },
  { id: 2, name: 'Breakfast', icon: '🍳' },
  { id: 3, name: 'Lunch', icon: '🥗' },
  { id: 4, name: 'Dinner', icon: '🍖' },
  { id: 5, name: 'Desserts', icon: '🍰' },
  { id: 6, name: 'Drinks', icon: '🍹' }
]

const recipes = [
  {
    id: 1,
    title: 'Classic Pancakes',
    category: 'Breakfast',
    image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800',
    duration: '20 minutes',
    difficulty: 'Easy'
  },
  {
    id: 2,
    title: 'Caesar Salad',
    category: 'Lunch',
    image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=800',
    duration: '15 minutes',
    difficulty: 'Easy'
  },
  {
    id: 3,
    title: 'Grilled Steak',
    category: 'Dinner',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=800',
    duration: '30 minutes',
    difficulty: 'Medium'
  }
]

function Recipes() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredRecipes = recipes.filter(recipe => {
    const matchesCategory = activeCategory === 'All' || recipe.category === activeCategory
    const matchesSearch = recipe.title.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="page-container">
      <div className="recipes-header">
        <h1>All Recipes</h1>
        <div className="search-bar">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search recipes..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="categories-bar">
        {categories.map(category => (
          <button
            key={category.id}
            className={`category-btn ${activeCategory === category.name ? 'active' : ''}`}
            onClick={() => setActiveCategory(category.name)}
          >
            <span className="category-icon">{category.icon}</span>
            {category.name}
          </button>
        ))}
      </div>

      <div className="recipes-grid">
        {filteredRecipes.map(recipe => (
          <div key={recipe.id} className="recipe-card">
            <img src={recipe.image} alt={recipe.title} />
            <div className="recipe-info">
              <div className="recipe-header">
                <h3>{recipe.title}</h3>
                <button className="bookmark-btn"><FaBookmark /></button>
              </div>
              <div className="recipe-meta">
                <span className="duration">{recipe.duration}</span>
                <span className="difficulty">{recipe.difficulty}</span>
              </div>
              <span className="category-tag">{recipe.category}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Recipes 