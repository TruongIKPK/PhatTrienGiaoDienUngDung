"use client"

import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { addTodo, toggleTodo, removeTodo } from "@/lib/slices/todoSlice"

export default function TodoList() {
  const todos = useSelector((state) => state.todos.todos)
  const dispatch = useDispatch()
  const [newTodo, setNewTodo] = useState("")

  const handleAddTodo = (e) => {
    e.preventDefault()
    if (newTodo.trim()) {
      dispatch(addTodo(newTodo))
      setNewTodo("")
    }
  }

  return (
    <div className="max-w-md mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-white">📋 To-do List</h2>

      <form onSubmit={handleAddTodo} className="mb-6 flex">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new task..."
          className="flex-1 px-4 py-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600 transition-colors"
        >
          Add
        </button>
      </form>

      <ul className="space-y-2">
        {todos.length === 0 ? (
          <li className="text-center text-gray-500 dark:text-gray-400">No tasks yet. Add one above!</li>
        ) : (
          todos.map((todo) => (
            <li key={todo.id} className="flex items-center justify-between p-3 bg-gray-100 dark:bg-gray-700 rounded-lg">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => dispatch(toggleTodo(todo.id))}
                  className="mr-3 h-5 w-5"
                />
                <span
                  className={`${todo.completed ? "line-through text-gray-500 dark:text-gray-400" : "text-gray-900 dark:text-white"}`}
                >
                  {todo.text}
                </span>
              </div>
              <button onClick={() => dispatch(removeTodo(todo.id))} className="text-red-500 hover:text-red-700">
                Delete
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  )
}
