import React from 'react'
import { FaBookmark } from 'react-icons/fa'

const recipes = [
  {
    id: 1,
    title: 'Italian-style tomato',
    image: 'https://images.unsplash.com/photo-1546233544-6e22b760b20b?w=800',
    duration: '20 minutes'
  },
  {
    id: 2,
    title: 'Spaghetti with vegetables',
    image: 'https://images.unsplash.com/photo-1516685018646-549198525c1b?w=800',
    duration: '30 minutes'
  },
  {
    id: 3,
    title: 'Lotus delight salad',
    image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800',
    duration: '20 minutes'
  },
  {
    id: 4,
    title: 'Snack cakes',
    image: 'https://images.unsplash.com/photo-1587668178277-295251f900ce?w=800',
    duration: '35 minutes'
  }
]

const videoRecipes = [
  {
    id: 1,
    title: 'Salad with cabbage and shrimp',
    image: 'https://images.unsplash.com/photo-1551248429-40975aa4de74?w=800',
    duration: '22 minutes'
  },
  {
    id: 2,
    title: 'Salad of cove beans, shrimp and potatoes',
    image: 'https://images.unsplash.com/photo-1551806235-ad9d5a434d85?w=800',
    duration: '25 minutes'
  },
  {
    id: 3,
    title: 'Sunny-side up fried egg',
    image: 'https://images.unsplash.com/photo-1608039829572-78524f79c4c7?w=800',
    duration: '15 minutes'
  },
  {
    id: 4,
    title: 'Lotus delight salad',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800',
    duration: '20 minutes'
  }
]

const editorsPicks = [
  {
    id: 1,
    title: 'Stuffed sticky rice ball',
    description: 'The perfect combination of sticky rice mixed with cheese, glamorous rice and a flavorful surprise filling.',
    image: 'https://images.unsplash.com/photo-1630914441934-a29c9d140977?w=800',
    chef: {
      name: 'Jennifer King',
      avatar: 'https://randomuser.me/api/portraits/women/2.jpg'
    }
  },
  {
    id: 2,
    title: 'Strawberry smoothie',
    description: 'Taste the refreshing delight of a strawberry smoothie. Made with ripe strawberries, this creamy mixed drink...',
    image: 'https://images.unsplash.com/photo-1553530979-fbb9e4aee36f?w=800',
    chef: {
      name: 'Matthew Martinez',
      avatar: 'https://randomuser.me/api/portraits/men/1.jpg'
    }
  },
  {
    id: 3,
    title: 'Latte Art',
    description: 'Latte art is the skillful craft of creating captivating designs on the surface of a latte.',
    image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=800',
    chef: {
      name: 'Sarah Hill',
      avatar: 'https://randomuser.me/api/portraits/women/3.jpg'
    }
  },
  {
    id: 4,
    title: 'Butter fried noodles',
    description: 'Savory noodles cooked in butter for a delicious and satisfying meal.',
    image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=800',
    chef: {
      name: 'Julia Lopez',
      avatar: 'https://randomuser.me/api/portraits/women/4.jpg'
    }
  }
]

function WhatToCook() {
  return (
    <div className="page-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="featured-recipe" style={{backgroundImage: `url(${recipes[0].image})`}}>
          <div className="recipe-tag">Recipe of the day</div>
          <div className="recipe-content">
            <h2>Salad Caprese</h2>
            <p>Classic Italian Salad Caprese: ripe tomatoes, fresh mozzarella, basil, olive oil, and balsamic vinegar create a refreshing dish for lunch or appetizer</p>
            <div className="chef-info">
              <img src="https://randomuser.me/api/portraits/women/1.jpg" alt="Sarah Caprese" />
              <span>Sarah Caprese</span>
            </div>
            <button className="view-more">View more</button>
          </div>
        </div>
      </section>

      {/* Summer Recipes Section */}
      <section className="recipes-section">
        <div className="section-header">
          <h2>This Summer Recipes</h2>
          <p>We have all your Independence Day sweets covered</p>
        </div>
        <div className="recipes-grid">
          {recipes.map(recipe => (
            <div key={recipe.id} className="recipe-card">
              <img src={recipe.image} alt={recipe.title} />
              <div className="recipe-info">
                <h3>{recipe.title}</h3>
                <div className="recipe-meta">
                  <span>{recipe.duration}</span>
                  <button className="bookmark-btn"><FaBookmark /></button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Video Recipes Section */}
      <section className="recipes-section">
        <div className="section-header">
          <h2>Recipes With Videos</h2>
          <p>Cooking Up Culinary Creations with Step-by-Step Videos</p>
        </div>
        <div className="recipes-grid">
          {videoRecipes.map(recipe => (
            <div key={recipe.id} className="recipe-card video-card">
              <img src={recipe.image} alt={recipe.title} />
              <div className="recipe-info">
                <h3>{recipe.title}</h3>
                <div className="recipe-meta">
                  <span>{recipe.duration}</span>
                  <button className="bookmark-btn"><FaBookmark /></button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Editor's Picks Section */}
      <section className="editors-pick">
        <div className="section-header">
          <h2>Editor's pick</h2>
          <p>Curated Culinary Delights: Handpicked Favorites by Our Expert Editors!</p>
        </div>
        <div className="editors-grid">
          {editorsPicks.map(pick => (
            <div key={pick.id} className="editor-card">
              <img src={pick.image} alt={pick.title} />
              <div className="editor-content">
                <h3>{pick.title}</h3>
                <div className="chef-info">
                  <img src={pick.chef.avatar} alt={pick.chef.name} />
                  <span>{pick.chef.name}</span>
                </div>
                <p>{pick.description}</p>
                <button className="bookmark-btn"><FaBookmark /></button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default WhatToCook 