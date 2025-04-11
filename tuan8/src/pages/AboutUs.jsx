import React from 'react'
import { FaHeart, FaUsers, FaBookOpen, FaAward } from 'react-icons/fa'

const team = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Head Chef',
    image: 'https://randomuser.me/api/portraits/women/1.jpg',
    description: 'With over 15 years of culinary experience, Sarah brings her passion for fresh, seasonal ingredients to every recipe.'
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Food Photographer',
    image: 'https://randomuser.me/api/portraits/men/2.jpg',
    description: 'Michaels eye for detail and composition helps bring our recipes to life through stunning photography.'
  },
  {
    id: 3,
    name: 'Emily Martinez',
    role: 'Recipe Developer',
    image: 'https://randomuser.me/api/portraits/women/3.jpg',
    description: 'Emily specializes in creating easy-to-follow recipes that dont compromise on flavor.'
  }
]

const stats = [
  {
    icon: <FaUsers />,
    number: '1M+',
    label: 'Happy Cooks'
  },
  {
    icon: <FaBookOpen />,
    number: '5000+',
    label: 'Recipes'
  },
  {
    icon: <FaHeart />,
    number: '10M+',
    label: 'Favorites Saved'
  },
  {
    icon: <FaAward />,
    number: '50+',
    label: 'Awards Won'
  }
]

function AboutUs() {
  return (
    <div className="page-container">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-content">
          <h1>Our Story</h1>
          <p>Bringing people together through the joy of cooking</p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="mission-content">
          <h2>Our Mission</h2>
          <p>
            At Chefify, we believe that cooking is more than just preparing meals – it's about creating
            memories, sharing traditions, and bringing people together. Our mission is to make cooking
            accessible and enjoyable for everyone, from beginners to experienced chefs.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <span className="stat-icon">{stat.icon}</span>
              <h3>{stat.number}</h3>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <h2>Meet Our Team</h2>
        <div className="team-grid">
          {team.map(member => (
            <div key={member.id} className="team-card">
              <img src={member.image} alt={member.name} />
              <div className="member-info">
                <h3>{member.name}</h3>
                <span className="role">{member.role}</span>
                <p>{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <h2>Our Values</h2>
        <div className="values-grid">
          <div className="value-card">
            <h3>Quality</h3>
            <p>We ensure every recipe is thoroughly tested and perfected before sharing with our community.</p>
          </div>
          <div className="value-card">
            <h3>Accessibility</h3>
            <p>We believe good food should be accessible to everyone, regardless of skill level.</p>
          </div>
          <div className="value-card">
            <h3>Community</h3>
            <p>We foster a supportive community where food lovers can share and learn together.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <h2>Get in Touch</h2>
        <div className="contact-content">
          <p>Have questions or feedback? We'd love to hear from you!</p>
          <button className="contact-btn">Contact Us</button>
        </div>
      </section>
    </div>
  )
}

export default AboutUs 