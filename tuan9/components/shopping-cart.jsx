"use client"

import { useSelector, useDispatch } from "react-redux"
import { addItem, removeItem, updateQuantity } from "@/lib/slices/cartSlice"

// Sample products
const products = [
  { id: 1, name: "Laptop", price: 999.99, image: "/placeholder.svg?height=50&width=50" },
  { id: 2, name: "Smartphone", price: 699.99, image: "/placeholder.svg?height=50&width=50" },
  { id: 3, name: "Headphones", price: 149.99, image: "/placeholder.svg?height=50&width=50" },
  { id: 4, name: "Smartwatch", price: 249.99, image: "/placeholder.svg?height=50&width=50" },
]

export default function ShoppingCart() {
  const cartItems = useSelector((state) => state.cart.items)
  const dispatch = useDispatch()

  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0)
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-white">📦 Shopping Cart</h2>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Products</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {products.map((product) => (
              <div key={product.id} className="border rounded-lg p-4 flex flex-col dark:border-gray-700">
                <div className="flex items-center mb-3">
                  <img src={product.image || "/placeholder.svg"} alt={product.name} className="w-12 h-12 mr-3" />
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">{product.name}</h4>
                    <p className="text-gray-600 dark:text-gray-400">${product.price.toFixed(2)}</p>
                  </div>
                </div>
                <button
                  onClick={() => dispatch(addItem(product))}
                  className="mt-auto px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Your Cart</h3>
          {cartItems.length === 0 ? (
            <p className="text-gray-500 dark:text-gray-400">Your cart is empty.</p>
          ) : (
            <>
              <ul className="mb-4 space-y-3">
                {cartItems.map((item) => (
                  <li
                    key={item.id}
                    className="flex items-center justify-between p-3 bg-gray-100 dark:bg-gray-700 rounded-lg"
                  >
                    <div className="flex items-center">
                      <img src={item.image || "/placeholder.svg"} alt={item.name} className="w-10 h-10 mr-3" />
                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-white">{item.name}</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">${item.price.toFixed(2)}</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <button
                        onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))}
                        className="px-2 py-1 bg-gray-200 dark:bg-gray-600 rounded-l"
                      >
                        -
                      </button>
                      <span className="px-3 py-1 bg-white dark:bg-gray-800">{item.quantity}</span>
                      <button
                        onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))}
                        className="px-2 py-1 bg-gray-200 dark:bg-gray-600 rounded-r"
                      >
                        +
                      </button>
                      <button
                        onClick={() => dispatch(removeItem(item.id))}
                        className="ml-3 text-red-500 hover:text-red-700"
                      >
                        Remove
                      </button>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-700 dark:text-gray-300">Total Items:</span>
                  <span className="font-medium text-gray-900 dark:text-white">{totalItems}</span>
                </div>
                <div className="flex justify-between text-lg font-bold">
                  <span className="text-gray-700 dark:text-gray-300">Total Price:</span>
                  <span className="text-gray-900 dark:text-white">${totalPrice.toFixed(2)}</span>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
