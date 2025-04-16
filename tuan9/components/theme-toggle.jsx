"use client"

import { useSelector, useDispatch } from "react-redux"
import { toggleTheme } from "@/lib/slices/themeSlice"

export default function ThemeToggle() {
  const theme = useSelector((state) => state.theme.mode)
  const dispatch = useDispatch()

  return (
    <div className="max-w-md mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-white">🔁 Toggle Theme</h2>

      <div className="flex flex-col items-center">
        <div className="mb-6 text-center">
          <p className="text-lg mb-2 text-gray-700 dark:text-gray-300">
            Current theme: <span className="font-bold">{theme.charAt(0).toUpperCase() + theme.slice(1)}</span>
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            Click the button below to switch between light and dark mode
          </p>
        </div>

        <button
          onClick={() => dispatch(toggleTheme())}
          className="px-6 py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors flex items-center"
        >
          {theme === "light" ? (
            <>
              <span className="mr-2">🌙</span>
              Switch to Dark Mode
            </>
          ) : (
            <>
              <span className="mr-2">☀️</span>
              Switch to Light Mode
            </>
          )}
        </button>
      </div>

      <div className="mt-8 p-4 border rounded-lg bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600">
        <h3 className="font-bold mb-2 text-gray-900 dark:text-white">Preview</h3>
        <p className="text-gray-700 dark:text-gray-300">This text changes color based on the current theme.</p>
      </div>
    </div>
  )
}
