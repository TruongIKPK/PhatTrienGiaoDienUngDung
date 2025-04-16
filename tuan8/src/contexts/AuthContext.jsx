import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Giả lập API đăng nhập
  const login = async (email, password) => {
    setLoading(true);
    setError(null);
    try {
      // Trong thực tế, đây sẽ là call API đến server
      await new Promise(resolve => setTimeout(resolve, 1000)); // Giả lập delay

      if (email === "test@example.com" && password === "password") {
        const userData = {
          id: 1,
          email,
          name: "Test User",
          avatar: "https://randomuser.me/api/portraits/women/1.jpg"
        };
        setUser(userData);
        localStorage.setItem('user', JSON.stringify(userData));
        return userData;
      } else {
        throw new Error('Invalid email or password');
      }
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Giả lập API đăng ký
  const register = async (email, password) => {
    setLoading(true);
    setError(null);
    try {
      // Trong thực tế, đây sẽ là call API đến server
      await new Promise(resolve => setTimeout(resolve, 1000)); // Giả lập delay

      const userData = {
        id: Date.now(),
        email,
        name: email.split('@')[0],
        avatar: `https://randomuser.me/api/portraits/${Math.random() > 0.5 ? 'women' : 'men'}/${Math.floor(Math.random() * 10)}.jpg`
      };
      setUser(userData);
      localStorage.setItem('user', JSON.stringify(userData));
      return userData;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  // Kiểm tra người dùng đã đăng nhập khi refresh trang
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const value = {
    user,
    loading,
    error,
    login,
    register,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export default AuthContext; 