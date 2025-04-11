import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import { FaSearch, FaBookmark } from 'react-icons/fa'

// Import pages
import WhatToCook from './pages/WhatToCook'
import Recipes from './pages/Recipes'
import Ingredients from './pages/Ingredients'
import Occasions from './pages/Occasions'
import AboutUs from './pages/AboutUs'

// Logo URL
const LOGO_URL = "https://i.imgur.com/8KhVmQt.png"

const recipes = [
  {
    id: 1,
    title: 'Salad Caprese',
    description: 'Classic Italian Salad Caprese: ripe tomatoes, fresh mozzarella, basil, olive oil, and balsamic vinegar create a refreshing dish for lunch or appetizer',
    image: 'https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?w=800',
    chef: {
      name: 'Sarah Caprese',
      avatar: 'https://randomuser.me/api/portraits/women/1.jpg'
    },
    duration: '20 minutes'
  },
  {
    id: 2,
    title: 'Italian-style tomato',
    image: 'https://images.unsplash.com/photo-1546233814-e74bb4b95de3?w=800',
    duration: '25 minutes'
  },
  {
    id: 3,
    title: 'Spaghetti with vegetables',
    image: 'https://images.unsplash.com/photo-1516685018646-549198525c1b?w=800',
    duration: '30 minutes'
  },
  {
    id: 4,
    title: 'Lotus delight salad',
    image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800',
    duration: '20 minutes'
  },
  {
    id: 5,
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
  }
]

function App() {
  return (
    <Router>
      <div className="app-container">
        {/* Header */}
        <header className="header">
          <div className="header-content">
            <Link to="/">
              <img src={LOGO_URL} alt="Chefify" className="logo" />
            </Link>
            <nav className="nav-links">
              <Link to="/" className="active">What to cook</Link>
              <Link to="/recipes">Recipes</Link>
              <Link to="/ingredients">Ingredients</Link>
              <Link to="/occasions">Occasions</Link>
              <Link to="/about">About Us</Link>
            </nav>
            <div className="header-right">
              <button className="login-btn">Login</button>
              <button className="subscribe-btn">Subscribe</button>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <Routes>
          <Route path="/" element={<WhatToCook />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/ingredients" element={<Ingredients />} />
          <Route path="/occasions" element={<Occasions />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>

        {/* Footer */}
        <footer className="footer">
          <div className="footer-content">
            <div className="footer-section">
              <h3>About Us</h3>
              <p>Welcome to our website, a wonderful place to explore and learn how to cook like a pro.</p>
              <div className="newsletter">
                <input type="email" placeholder="Enter your email" />
                <button>Send</button>
              </div>
            </div>
            <div className="footer-section">
              <h3>Learn More</h3>
              <ul>
                <li><Link to="/about">Our Chefs</Link></li>
                <li><a href="#">See Our Features</a></li>
                <li><a href="#">FAQ</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h3>Shop</h3>
              <ul>
                <li><a href="#">Gift Subscription</a></li>
                <li><a href="#">Send Us Feedback</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h3>Recipes</h3>
              <ul>
                <li><Link to="/recipes">What to Cook This Week</Link></li>
                <li><Link to="/recipes">Dinner</Link></li>
                <li><Link to="/recipes">Healthy</Link></li>
                <li><Link to="/recipes">Vegetarian</Link></li>
                <li><Link to="/recipes">Vegan</Link></li>
                <li><Link to="/occasions">Christmas</Link></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <img src={LOGO_URL} alt="Chefify" className="footer-logo" />
            <div className="footer-links">
              <a href="#">Terms of Service</a>
              <a href="#">Privacy Policy</a>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  )
}

export default App
