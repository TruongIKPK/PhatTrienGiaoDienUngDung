"use client"

import { useSelector, useDispatch } from "react-redux"
import { addItem } from "@/lib/slices/cartSlice"
import { toggleTheme } from "@/lib/slices/themeSlice"
import { increment as incrementCounter } from "@/lib/slices/counterSlice"

export default function CombinedFeatures() {
  const theme = useSelector((state) => state.theme.mode)
  const cartItems = useSelector((state) => state.cart.items)
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0)

  // Sample product
  const product = { id: 999, name: "Premium Item", price: 49.99, image: "/placeholder.svg?height=50&width=50" }

  return (
    <div className="max-w-md mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-white">🔐 Combined Features</h2>

      <div className="space-y-6">
        <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
          <h3 className="font-semibold mb-3 text-gray-900 dark:text-white">Theme Control</h3>
          <div className="flex items-center justify-between">
            <p className="text-gray-700 dark:text-gray-300">Current theme: {theme}</p>
            <button
              onClick={() => dispatch(toggleTheme())}
              className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 transition-colors"
            >
              Toggle Theme
            </button>
          </div>
        </div>

        <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
          <h3 className="font-semibold mb-3 text-gray-900 dark:text-white">Counter</h3>
          <div className="flex items-center justify-between">
            <p className="text-gray-700 dark:text-gray-300">Current count: {count}</p>
            <button
              onClick={() => dispatch(incrementCounter())}
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
            >
              Increment
            </button>
          </div>
        </div>

        <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
          <h3 className="font-semibold mb-3 text-gray-900 dark:text-white">Shopping Cart</h3>
          <div className="flex items-center justify-between mb-3">
            <p className="text-gray-700 dark:text-gray-300">Items in cart: {totalItems}</p>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img src={product.image || "/placeholder.svg"} alt={product.name} className="w-10 h-10 mr-3" />
              <div>
                <p className="font-medium text-gray-900 dark:text-white">{product.name}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">${product.price}</p>
              </div>
            </div>
            <button
              onClick={() => dispatch(addItem(product))}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      <p className="mt-6 text-center text-gray-600 dark:text-gray-400">
        This component demonstrates how multiple Redux slices can work together in a single component.
      </p>
    </div>
  )
}
