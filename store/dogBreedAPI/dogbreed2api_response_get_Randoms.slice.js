import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiService } from "./api";
export const dogbreed2api_get_random_read = createAsyncThunk("dogbreed2api_response_get_Randoms/dogbreed2api_get_random_read", async payload => {
  const response = await apiService.dogbreed2api_get_random_read(payload);
  return response.data;
});
const initialState = {
  entities: [],
  api: {
    loading: "idle",
    error: null
  }
};
const dogbreed2api_response_get_RandomsSlice = createSlice({
  name: "dogbreed2api_response_get_Randoms",
  initialState,
  reducers: {},
  extraReducers: {
    [dogbreed2api_get_random_read.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending";
      }
    },
    [dogbreed2api_get_random_read.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [...state.entities.filter(record => record.id !== action.payload.id), action.payload];
        state.api.loading = "idle";
      }
    },
    [dogbreed2api_get_random_read.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error;
        state.api.loading = "idle";
      }
    }
  }
});
export default {
  dogbreed2api_get_random_read,
  slice: dogbreed2api_response_get_RandomsSlice
};