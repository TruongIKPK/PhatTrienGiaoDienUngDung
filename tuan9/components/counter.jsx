"use client"

import { useSelector, useDispatch } from "react-redux"
import { increment, decrement } from "@/lib/slices/counterSlice"

export default function Counter() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div className="max-w-md mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-white">🧩 Counter App</h2>

      <div className="flex items-center justify-center mb-6">
        <span className="text-4xl font-bold px-8 py-4 bg-gray-100 dark:bg-gray-700 rounded-lg text-gray-900 dark:text-white">
          {count}
        </span>
      </div>

      <div className="flex justify-center gap-4">
        <button
          onClick={() => dispatch(decrement())}
          className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
        >
          Decrease
        </button>
        <button
          onClick={() => dispatch(increment())}
          className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
        >
          Increase
        </button>
      </div>
    </div>
  )
}
