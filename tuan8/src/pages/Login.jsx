import React, { useState } from 'react'
import { FaEnvelope, FaLock, FaGoogle, FaFacebook } from 'react-icons/fa'
import { useAuth } from '../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'

function Login() {
  const [isLogin, setIsLogin] = useState(true)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const { login, register } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      if (!isLogin && password !== confirmPassword) {
        throw new Error('Passwords do not match')
      }

      if (isLogin) {
        await login(email, password)
      } else {
        await register(email, password)
      }

      // Đăng nhập/đăng ký thành công, chuyển về trang chủ
      navigate('/')
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const handleSocialLogin = (provider) => {
    // Trong thực tế, đây sẽ xử lý đăng nhập bằng mạng xã hội
    console.log(`Login with ${provider}`)
  }

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>

        {error && <div className="error-message">{error}</div>}

        <div className="social-auth">
          <button 
            className="social-btn google"
            onClick={() => handleSocialLogin('Google')}
            disabled={loading}
          >
            <FaGoogle /> Continue with Google
          </button>
          <button 
            className="social-btn facebook"
            onClick={() => handleSocialLogin('Facebook')}
            disabled={loading}
          >
            <FaFacebook /> Continue with Facebook
          </button>
        </div>
        
        <div className="divider">
          <span>or</span>
        </div>

        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <FaEnvelope className="input-icon" />
            <input 
              type="email" 
              placeholder="Email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
              disabled={loading}
            />
          </div>
          <div className="form-group">
            <FaLock className="input-icon" />
            <input 
              type="password" 
              placeholder="Password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
              disabled={loading}
            />
          </div>
          
          {!isLogin && (
            <div className="form-group">
              <FaLock className="input-icon" />
              <input 
                type="password" 
                placeholder="Confirm Password" 
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required 
                disabled={loading}
              />
            </div>
          )}

          {isLogin && (
            <div className="form-options">
              <label>
                <input 
                  type="checkbox" 
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  disabled={loading}
                /> Remember me
              </label>
              <a href="#" className="forgot-password">Forgot Password?</a>
            </div>
          )}

          <button type="submit" className="submit-btn" disabled={loading}>
            {loading ? 'Processing...' : (isLogin ? 'Login' : 'Sign Up')}
          </button>
        </form>

        <p className="switch-mode">
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <button 
            className="switch-btn"
            onClick={() => {
              setIsLogin(!isLogin)
              setError('')
            }}
            disabled={loading}
          >
            {isLogin ? 'Sign Up' : 'Login'}
          </button>
        </p>
      </div>
    </div>
  )
}

export default Login 