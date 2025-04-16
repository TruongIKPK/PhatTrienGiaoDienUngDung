import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  height: 0,
  weight: 0,
  bmi: 0,
  bmiCategory: "",
}

export const calculatorSlice = createSlice({
  name: "calculator",
  initialState,
  reducers: {
    updateInput: (state, action) => {
      const { name, value } = action.payload
      state[name] = value
    },
    calculateResult: (state) => {
      if (state.height > 0 && state.weight > 0) {
        // BMI = weight(kg) / (height(m))²
        const heightInMeters = state.height / 100
        state.bmi = state.weight / (heightInMeters * heightInMeters)

        // Determine BMI category
        if (state.bmi < 18.5) {
          state.bmiCategory = "Underweight"
        } else if (state.bmi < 25) {
          state.bmiCategory = "Normal weight"
        } else if (state.bmi < 30) {
          state.bmiCategory = "Overweight"
        } else {
          state.bmiCategory = "Obesity"
        }
      }
    },
  },
})

export const { updateInput, calculateResult } = calculatorSlice.actions

export default calculatorSlice.reducer
