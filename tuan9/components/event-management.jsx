"use client"

import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { addEvent, editEvent, deleteEvent, selectEvent, clearSelectedEvent } from "@/lib/slices/eventsSlice"

export default function EventManagement() {
  const { events, selectedEvent } = useSelector((state) => state.events)
  const dispatch = useDispatch()

  const [formData, setFormData] = useState({
    title: "",
    date: "",
    location: "",
    description: "",
  })

  useEffect(() => {
    if (selectedEvent) {
      setFormData({
        title: selectedEvent.title,
        date: selectedEvent.date,
        location: selectedEvent.location,
        description: selectedEvent.description,
      })
    } else {
      setFormData({
        title: "",
        date: "",
        location: "",
        description: "",
      })
    }
  }, [selectedEvent])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (selectedEvent) {
      dispatch(editEvent({ id: selectedEvent.id, ...formData }))
      dispatch(clearSelectedEvent())
    } else {
      dispatch(addEvent(formData))
    }
    setFormData({
      title: "",
      date: "",
      location: "",
      description: "",
    })
  }

  const handleCancel = () => {
    dispatch(clearSelectedEvent())
    setFormData({
      title: "",
      date: "",
      location: "",
      description: "",
    })
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-white">📅 Event Management</h2>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
            {selectedEvent ? "Edit Event" : "Add New Event"}
          </h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 dark:text-gray-300 mb-2">Event Title</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 dark:text-gray-300 mb-2">Date</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 dark:text-gray-300 mb-2">Location</label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 dark:text-gray-300 mb-2">Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                rows="3"
                required
              ></textarea>
            </div>
            <div className="flex gap-2">
              <button
                type="submit"
                className="flex-1 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
              >
                {selectedEvent ? "Update Event" : "Add Event"}
              </button>
              {selectedEvent && (
                <button
                  type="button"
                  onClick={handleCancel}
                  className="flex-1 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors"
                >
                  Cancel
                </button>
              )}
            </div>
          </form>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Events</h3>
          {events.length === 0 ? (
            <p className="text-gray-500 dark:text-gray-400">No events yet. Add one using the form.</p>
          ) : (
            <ul className="space-y-3">
              {events.map((event) => (
                <li key={event.id} className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white">{event.title}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {new Date(event.date).toLocaleDateString()} - {event.location}
                      </p>
                      <p className="mt-2 text-gray-700 dark:text-gray-300">{event.description}</p>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => dispatch(selectEvent(event))}
                        className="text-blue-500 hover:text-blue-700"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => dispatch(deleteEvent(event.id))}
                        className="text-red-500 hover:text-red-700"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}
