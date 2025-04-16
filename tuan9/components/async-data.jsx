"use client"

import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { fetchUsers } from "@/lib/slices/usersSlice"

export default function AsyncData() {
  const { users, status, error } = useSelector((state) => state.users)
  const dispatch = useDispatch()

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchUsers())
    }
  }, [status, dispatch])

  return (
    <div className="max-w-md mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-white">📊 Async Data</h2>

      <div className="mb-4">
        <button
          onClick={() => dispatch(fetchUsers())}
          className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          disabled={status === "loading"}
        >
          {status === "loading" ? "Loading..." : "Fetch Users"}
        </button>
      </div>

      {status === "loading" && (
        <div className="text-center p-4">
          <p className="text-gray-600 dark:text-gray-400">Loading users...</p>
        </div>
      )}

      {status === "failed" && (
        <div className="p-4 bg-red-100 dark:bg-red-900 rounded-lg">
          <p className="text-red-700 dark:text-red-300">Error: {error}</p>
        </div>
      )}

      {status === "succeeded" && (
        <div>
          <h3 className="font-semibold mb-3 text-gray-900 dark:text-white">Users from API:</h3>
          <ul className="space-y-2">
            {users.map((user) => (
              <li key={user.id} className="p-3 bg-gray-100 dark:bg-gray-700 rounded-lg">
                <p className="font-medium text-gray-900 dark:text-white">{user.name}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">{user.email}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
