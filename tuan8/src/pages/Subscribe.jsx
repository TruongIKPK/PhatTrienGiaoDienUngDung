import React from 'react'
import { FaCheck } from 'react-icons/fa'

const plans = [
  {
    id: 1,
    name: 'Basic',
    price: '9.99',
    period: 'month',
    features: [
      'Access to all basic recipes',
      'Weekly meal planner',
      'Shopping list generator',
      'Save up to 50 favorites'
    ],
    isPopular: false
  },
  {
    id: 2,
    name: 'Premium',
    price: '19.99',
    period: 'month',
    features: [
      'All Basic features',
      'HD Video tutorials',
      'Exclusive recipes',
      'Meal customization',
      'Priority support',
      'Ad-free experience'
    ],
    isPopular: true
  },
  {
    id: 3,
    name: 'Family',
    price: '29.99',
    period: 'month',
    features: [
      'All Premium features',
      'Up to 5 family accounts',
      'Family meal planner',
      'Nutritional guidance',
      'Personal chef consultation',
      'Custom recipe requests'
    ],
    isPopular: false
  }
]

function Subscribe() {
  return (
    <div className="subscribe-container">
      <div className="subscribe-header">
        <h1>Choose Your Plan</h1>
        <p>Select the perfect plan for your cooking journey</p>
      </div>

      <div className="plans-grid">
        {plans.map(plan => (
          <div key={plan.id} className={`plan-card ${plan.isPopular ? 'popular' : ''}`}>
            {plan.isPopular && <div className="popular-tag">Most Popular</div>}
            <div className="plan-header">
              <h2>{plan.name}</h2>
              <div className="plan-price">
                <span className="currency">$</span>
                <span className="amount">{plan.price}</span>
                <span className="period">/{plan.period}</span>
              </div>
            </div>

            <ul className="features-list">
              {plan.features.map((feature, index) => (
                <li key={index}>
                  <FaCheck className="check-icon" />
                  {feature}
                </li>
              ))}
            </ul>

            <button className={`subscribe-btn ${plan.isPopular ? 'primary' : 'secondary'}`}>
              Get Started
            </button>
          </div>
        ))}
      </div>

      <div className="guarantee-section">
        <h3>100% Satisfaction Guarantee</h3>
        <p>Try risk-free for 30 days. Cancel anytime.</p>
      </div>

      <div className="faq-section">
        <h3>Frequently Asked Questions</h3>
        <div className="faq-grid">
          <div className="faq-item">
            <h4>Can I change plans later?</h4>
            <p>Yes, you can upgrade or downgrade your plan at any time.</p>
          </div>
          <div className="faq-item">
            <h4>What payment methods do you accept?</h4>
            <p>We accept all major credit cards, PayPal, and Apple Pay.</p>
          </div>
          <div className="faq-item">
            <h4>Is there a long-term contract?</h4>
            <p>No, all our plans are month-to-month with no long-term commitment.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Subscribe 