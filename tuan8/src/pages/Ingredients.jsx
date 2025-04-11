import React from 'react'
import { FaLeaf, FaDrumstickBite, FaFish, FaCarrot } from 'react-icons/fa'

const ingredients = [
  {
    category: 'Vegetables',
    icon: <FaCarrot />,
    items: [
      {
        id: 1,
        name: 'Fresh Tomatoes',
        image: 'https://images.unsplash.com/photo-1546233544-6e22b760b20b?w=800',
        nutrition: 'Rich in Vitamin C',
        season: 'Summer'
      },
      {
        id: 2,
        name: 'Spinach',
        image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=800',
        nutrition: 'Iron, Vitamin K',
        season: 'Year-round'
      }
    ]
  },
  {
    category: 'Proteins',
    icon: <FaDrumstickBite />,
    items: [
      {
        id: 3,
        name: 'Chicken Breast',
        image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=800',
        nutrition: 'High in Protein',
        preparation: 'Boneless, Skinless'
      }
    ]
  },
  {
    category: 'Seafood',
    icon: <FaFish />,
    items: [
      {
        id: 4,
        name: 'Fresh Salmon',
        image: 'https://images.unsplash.com/photo-1599084993091-1cb5c0932b41?w=800',
        nutrition: 'Omega-3 Fatty Acids',
        season: 'Year-round'
      }
    ]
  },
  {
    category: 'Herbs',
    icon: <FaLeaf />,
    items: [
      {
        id: 5,
        name: 'Fresh Basil',
        image: 'https://images.unsplash.com/photo-1618164435735-413d3b066c9a?w=800',
        nutrition: 'Vitamin K',
        usage: 'Italian Cuisine'
      }
    ]
  }
]

function Ingredients() {
  return (
    <div className="page-container">
      <div className="ingredients-header">
        <h1>Ingredients Guide</h1>
        <p>Explore our comprehensive guide to cooking ingredients</p>
      </div>

      {ingredients.map(category => (
        <section key={category.category} className="ingredient-category">
          <div className="category-header">
            <span className="category-icon">{category.icon}</span>
            <h2>{category.category}</h2>
          </div>
          
          <div className="ingredients-grid">
            {category.items.map(item => (
              <div key={item.id} className="ingredient-card">
                <img src={item.image} alt={item.name} />
                <div className="ingredient-info">
                  <h3>{item.name}</h3>
                  <p className="nutrition">{item.nutrition}</p>
                  {item.season && <p className="season">Best in: {item.season}</p>}
                  {item.preparation && <p className="preparation">{item.preparation}</p>}
                  {item.usage && <p className="usage">Used in: {item.usage}</p>}
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}

      <div className="ingredients-tips">
        <h2>Shopping & Storage Tips</h2>
        <div className="tips-grid">
          <div className="tip-card">
            <h3>Selecting Fresh Vegetables</h3>
            <p>Look for vibrant colors and firm texture. Avoid any signs of wilting or bruising.</p>
          </div>
          <div className="tip-card">
            <h3>Storing Herbs</h3>
            <p>Keep herbs fresh by wrapping them in slightly damp paper towels and storing in a plastic bag.</p>
          </div>
          <div className="tip-card">
            <h3>Meat Storage</h3>
            <p>Store meat in the coldest part of your refrigerator and use within 2-3 days of purchase.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Ingredients 