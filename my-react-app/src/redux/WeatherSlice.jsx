import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

export const fetchWeather = createAsyncThunk(
  "weather/fetchWeather",
  async (location, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${apiKey}`
      );
      if (!response.ok) {
        throw new Error("Location not found. Check for typos!");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    weatherData: null,
    loading: true,
    error: null,
    selectedDayWeather: null,
  },
  reducers: {
    setSelectedDayWeather: (state, action) => {
      state.selectedDayWeather = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchWeather.pending, (state) => {
      state.loading = true;
      state.error = null;
    }),
      builder.addCase(fetchWeather.fulfilled, (state, action) => {
        state.loading = false;
        state.weatherData = action.payload;
        state.selectedDayWeather = null;
      }),
      builder.addCase(fetchWeather.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        console.error("Fetch weather error", action.error.message);
      });
  },
});

export const { setSelectedDayWeather } = weatherSlice.actions;
export const { clearError } = weatherSlice.actions;

export default weatherSlice.reducer;
