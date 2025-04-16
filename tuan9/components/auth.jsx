"use client"

import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { login, logout, setUserInfo } from "@/lib/slices/authSlice"

export default function Auth() {
  const { user, isLoggedIn } = useSelector((state) => state.auth)
  const dispatch = useDispatch()

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const [profileData, setProfileData] = useState({
    name: "",
    bio: "",
  })

  const handleLogin = (e) => {
    e.preventDefault()
    // In a real app, you would validate and authenticate
    dispatch(login({ email: formData.email, id: Date.now() }))
  }

  const handleUpdateProfile = (e) => {
    e.preventDefault()
    dispatch(setUserInfo(profileData))
  }

  return (
    <div className="max-w-md mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-white">🎯 User Authentication</h2>

      {isLoggedIn ? (
        <div>
          <div className="mb-6 p-4 bg-green-100 dark:bg-green-900 rounded-lg">
            <h3 className="font-bold text-green-800 dark:text-green-200 mb-2">Welcome!</h3>
            <p className="text-green-700 dark:text-green-300">
              You are logged in as <span className="font-semibold">{user.email}</span>
            </p>
            {user.name && (
              <p className="mt-2 text-green-700 dark:text-green-300">
                Name: <span className="font-semibold">{user.name}</span>
              </p>
            )}
            {user.bio && (
              <p className="mt-1 text-green-700 dark:text-green-300">
                Bio: <span className="font-semibold">{user.bio}</span>
              </p>
            )}
          </div>

          <form onSubmit={handleUpdateProfile} className="mb-6">
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Update Profile</h3>
            <div className="mb-4">
              <label className="block text-gray-700 dark:text-gray-300 mb-2">Name</label>
              <input
                type="text"
                value={profileData.name}
                onChange={(e) => setProfileData({ ...profileData, name: e.target.value })}
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 dark:text-gray-300 mb-2">Bio</label>
              <textarea
                value={profileData.bio}
                onChange={(e) => setProfileData({ ...profileData, bio: e.target.value })}
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                rows="3"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
            >
              Update Profile
            </button>
          </form>

          <button
            onClick={() => dispatch(logout())}
            className="w-full px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
          >
            Logout
          </button>
        </div>
      ) : (
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300 mb-2">Email</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 dark:text-gray-300 mb-2">Password</label>
            <input
              type="password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          >
            Login
          </button>
        </form>
      )}
    </div>
  )
}
