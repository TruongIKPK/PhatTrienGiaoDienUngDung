import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  mode: "light",
}

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light"

      // Apply theme to document
      if (state.mode === "dark") {
        document.documentElement.classList.add("dark")
      } else {
        document.documentElement.classList.remove("dark")
      }
    },
  },
})

export const { toggleTheme } = themeSlice.actions

export default themeSlice.reducer
