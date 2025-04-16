"use client"

import { useSelector, useDispatch } from "react-redux"
import { updateInput, calculateResult } from "@/lib/slices/calculatorSlice"

export default function Calculator() {
  const { height, weight, bmi, bmiCategory } = useSelector((state) => state.calculator)
  const dispatch = useDispatch()

  const handleInputChange = (e) => {
    const { name, value } = e.target
    dispatch(updateInput({ name, value: Number.parseFloat(value) || 0 }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(calculateResult())
  }

  return (
    <div className="max-w-md mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-white">🧮 BMI Calculator</h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300 mb-2">Height (cm)</label>
          <input
            type="number"
            name="height"
            value={height || ""}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            placeholder="Enter your height in cm"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 dark:text-gray-300 mb-2">Weight (kg)</label>
          <input
            type="number"
            name="weight"
            value={weight || ""}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            placeholder="Enter your weight in kg"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors mb-6"
        >
          Calculate BMI
        </button>
      </form>

      {bmi > 0 && (
        <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
          <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Results:</h3>
          <p className="mb-1 text-gray-700 dark:text-gray-300">
            Your BMI: <span className="font-bold">{bmi.toFixed(2)}</span>
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            Category: <span className="font-bold">{bmiCategory}</span>
          </p>
        </div>
      )}
    </div>
  )
}
