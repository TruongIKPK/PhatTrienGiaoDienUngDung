"use client"

import { Provider } from "react-redux"
import { store } from "@/lib/store"
import Menu from "@/components/menu"
import Counter from "@/components/counter"
import TodoList from "@/components/todo-list"
import ThemeToggle from "@/components/theme-toggle"
import ShoppingCart from "@/components/shopping-cart"
import Auth from "@/components/auth"
import AsyncData from "@/components/async-data"
import AdvancedCounter from "@/components/advanced-counter"
import Calculator from "@/components/calculator"
import EventManagement from "@/components/event-management"
import CombinedFeatures from "@/components/combined-features"
import { useState } from "react"

export default function Home() {
  const [activeFeature, setActiveFeature] = useState("menu")

  const renderFeature = () => {
    switch (activeFeature) {
      case "counter":
        return <Counter />
      case "todo":
        return <TodoList />
      case "theme":
        return <ThemeToggle />
      case "cart":
        return <ShoppingCart />
      case "auth":
        return <Auth />
      case "async":
        return <AsyncData />
      case "advanced-counter":
        return <AdvancedCounter />
      case "calculator":
        return <Calculator />
      case "events":
        return <EventManagement />
      case "combined":
        return <CombinedFeatures />
      default:
        return <Menu onSelectFeature={setActiveFeature} />
    }
  }

  return (
    <Provider store={store}>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="container mx-auto px-4 py-8">
          <header className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Redux Features Demo</h1>
            {activeFeature !== "menu" && (
              <button
                onClick={() => setActiveFeature("menu")}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
              >
                Back to Menu
              </button>
            )}
          </header>
          <main>{renderFeature()}</main>
        </div>
      </div>
    </Provider>
  )
}
