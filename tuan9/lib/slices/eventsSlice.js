import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  events: [],
  selectedEvent: null,
}

export const eventsSlice = createSlice({
  name: "events",
  initialState,
  reducers: {
    addEvent: (state, action) => {
      state.events.push({
        id: Date.now(),
        ...action.payload,
      })
    },
    editEvent: (state, action) => {
      const { id, ...updatedEvent } = action.payload
      const index = state.events.findIndex((event) => event.id === id)
      if (index !== -1) {
        state.events[index] = { ...state.events[index], ...updatedEvent }
      }
    },
    deleteEvent: (state, action) => {
      state.events = state.events.filter((event) => event.id !== action.payload)
    },
    selectEvent: (state, action) => {
      state.selectedEvent = action.payload
    },
    clearSelectedEvent: (state) => {
      state.selectedEvent = null
    },
  },
})

export const { addEvent, editEvent, deleteEvent, selectEvent, clearSelectedEvent } = eventsSlice.actions

export default eventsSlice.reducer
