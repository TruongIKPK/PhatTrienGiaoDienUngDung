"use client"

import { useSelector } from "react-redux"

export default function Menu({ onSelectFeature }) {
  const theme = useSelector((state) => state.theme.mode)

  const features = [
    { id: "counter", name: "🧩 Counter App", description: "Simple counter with increment and decrement" },
    { id: "todo", name: "📋 To-do List", description: "Add, toggle, and remove todos" },
    { id: "theme", name: "🔁 Toggle Theme", description: "Switch between dark and light mode" },
    { id: "cart", name: "📦 Shopping Cart", description: "Add items, remove items, update quantities" },
    { id: "auth", name: "🎯 User Authentication", description: "Login, logout, and user info" },
    { id: "async", name: "📊 Async Data", description: "Fetch users from API using createAsyncThunk" },
    { id: "advanced-counter", name: "🔄 Advanced Counter", description: "Counter with reset and custom increment" },
    { id: "calculator", name: "🧮 Calculator", description: "Simple BMI calculator" },
    { id: "events", name: "📅 Event Management", description: "Add, edit, and delete events" },
    { id: "combined", name: "🔐 Combined Features", description: "Multiple slices working together" },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {features.map((feature) => (
        <div
          key={feature.id}
          className="border rounded-lg p-6 cursor-pointer hover:shadow-lg transition-shadow bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700"
          onClick={() => onSelectFeature(feature.id)}
        >
          <h2 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{feature.name}</h2>
          <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
        </div>
      ))}
    </div>
  )
}
