"use client"

import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { increment, decrement, incrementByAmount, reset, setStep } from "@/lib/slices/advancedCounterSlice"

export default function AdvancedCounter() {
  const { value, step } = useSelector((state) => state.advancedCounter)
  const dispatch = useDispatch()
  const [amount, setAmount] = useState(5)

  return (
    <div className="max-w-md mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-white">🔄 Advanced Counter</h2>

      <div className="flex items-center justify-center mb-6">
        <span className="text-4xl font-bold px-8 py-4 bg-gray-100 dark:bg-gray-700 rounded-lg text-gray-900 dark:text-white">
          {value}
        </span>
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 dark:text-gray-300 mb-2">Step Size</label>
        <input
          type="number"
          min="1"
          value={step}
          onChange={(e) => dispatch(setStep(Number(e.target.value) || 1))}
          className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white mb-2"
        />
        <div className="grid grid-cols-2 gap-4 mb-4">
          <button
            onClick={() => dispatch(decrement())}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
          >
            Decrease by {step}
          </button>
          <button
            onClick={() => dispatch(increment())}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
          >
            Increase by {step}
          </button>
        </div>
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 dark:text-gray-300 mb-2">Custom Amount</label>
        <div className="flex">
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value) || 0)}
            className="flex-1 px-4 py-2 border rounded-l focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
          <button
            onClick={() => dispatch(incrementByAmount(amount))}
            className="px-4 py-2 bg-blue-500 text-white rounded-r hover:bg-blue-600 transition-colors"
          >
            Add Amount
          </button>
        </div>
      </div>

      <button
        onClick={() => dispatch(reset())}
        className="w-full px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors"
      >
        Reset Counter
      </button>
    </div>
  )
}
