import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { WeatherData } from "../../interfaces/WeatherData";


//     extraReducers: (builder) => {
//       builder.addCase(fetchWeather.pending, (state) => {
//         state.loading = true;
//         state.error = false;
//       })
//       builder.addCase(fetchWeather.fulfilled, (state, action) => {
//         state.weather = action.payload;
//         state.loading = false;
//         state.error = false;
//       })
//       builder.addCase(fetchWeather.rejected, (state, action) => {
//         state.error = true;
//         state.errorMessage = action.payload;
//         state.loading = false;
//       })
//     }
//   })


interface WeatherState {
  isLoading: boolean;
  isError: boolean;
  errorMessage: string;
  weatherData: WeatherData | null;
}

const initialState: WeatherState = {
  errorMessage: '',
  isError: false,
  isLoading: false,
  weatherData: null
}

export const weatherForecastSlice = createSlice({
  name: 'weatherForecast',
  initialState,
  reducers: {
    weatherFetching(state) {
      state.isLoading = true;
    },
    weatherFetchingSuccess(state, action: PayloadAction<WeatherData>) {
      state.isLoading = false;
      state.isError = false;
      state.errorMessage = '';
      state.weatherData = action.payload
    },
    weatherFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.isError = true;
      state.errorMessage = action.payload
    }
  }
})

export default weatherForecastSlice.reducer;