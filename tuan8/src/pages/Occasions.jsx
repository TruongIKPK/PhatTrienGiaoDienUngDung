import React from 'react'
import { FaCalendar, FaHeart, FaBirthdayCake, FaGlassCheers } from 'react-icons/fa'

const occasions = [
  {
    id: 1,
    title: 'Valentine\'s Day',
    icon: <FaHeart />,
    image: 'https://images.unsplash.com/photo-1518147557401-d21c4f31af85?w=800',
    description: 'Romantic dinner ideas and desserts',
    recipes: [
      {
        id: 1,
        name: 'Chocolate Covered Strawberries',
        image: 'https://images.unsplash.com/photo-1571506165871-ee72a35bc9d4?w=800',
        difficulty: 'Easy',
        time: '30 minutes'
      },
      {
        id: 2,
        name: 'Heart-shaped Pizza',
        image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800',
        difficulty: 'Medium',
        time: '45 minutes'
      }
    ]
  },
  {
    id: 2,
    title: 'Birthday Celebrations',
    icon: <FaBirthdayCake />,
    image: 'https://images.unsplash.com/photo-1558636508-e0db3814bd1d?w=800',
    description: 'Make someone\'s day special',
    recipes: [
      {
        id: 3,
        name: 'Classic Birthday Cake',
        image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800',
        difficulty: 'Medium',
        time: '2 hours'
      },
      {
        id: 4,
        name: 'Party Snack Platter',
        image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=800',
        difficulty: 'Easy',
        time: '30 minutes'
      }
    ]
  },
  {
    id: 3,
    title: 'New Year\'s Eve',
    icon: <FaGlassCheers />,
    image: 'https://images.unsplash.com/photo-1546074177-31bfa593f731?w=800',
    description: 'Ring in the new year with style',
    recipes: [
      {
        id: 5,
        name: 'Champagne Cocktails',
        image: 'https://images.unsplash.com/photo-1590590470233-195e8f23fe6d?w=800',
        difficulty: 'Easy',
        time: '10 minutes'
      },
      {
        id: 6,
        name: 'Appetizer Spread',
        image: 'https://images.unsplash.com/photo-1546039907-7fa05f864c02?w=800',
        difficulty: 'Medium',
        time: '1 hour'
      }
    ]
  }
]

function Occasions() {
  return (
    <div className="page-container">
      <div className="occasions-header">
        <h1>Special Occasions</h1>
        <p>Find the perfect recipes for your celebrations</p>
      </div>

      <div className="occasions-grid">
        {occasions.map(occasion => (
          <section key={occasion.id} className="occasion-card">
            <div className="occasion-header" style={{backgroundImage: `url(${occasion.image})`}}>
              <div className="occasion-overlay">
                <span className="occasion-icon">{occasion.icon}</span>
                <h2>{occasion.title}</h2>
                <p>{occasion.description}</p>
              </div>
            </div>

            <div className="occasion-recipes">
              {occasion.recipes.map(recipe => (
                <div key={recipe.id} className="recipe-card">
                  <img src={recipe.image} alt={recipe.name} />
                  <div className="recipe-info">
                    <h3>{recipe.name}</h3>
                    <div className="recipe-meta">
                      <span className="difficulty">{recipe.difficulty}</span>
                      <span className="time">{recipe.time}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      <div className="planning-tips">
        <h2>Event Planning Tips</h2>
        <div className="tips-grid">
          <div className="tip-card">
            <FaCalendar className="tip-icon" />
            <h3>Timing is Everything</h3>
            <p>Start planning your menu at least a week in advance for special occasions.</p>
          </div>
          <div className="tip-card">
            <FaHeart className="tip-icon" />
            <h3>Personal Touch</h3>
            <p>Consider your guests' dietary preferences and restrictions.</p>
          </div>
          <div className="tip-card">
            <FaGlassCheers className="tip-icon" />
            <h3>Presentation Matters</h3>
            <p>Take time to plate and present your dishes beautifully.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Occasions 