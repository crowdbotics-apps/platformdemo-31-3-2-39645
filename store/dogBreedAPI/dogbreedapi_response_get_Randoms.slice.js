import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const dogbreedapi_get_random_read = createAsyncThunk(
  "dogbreedapi_response_get_Randoms/dogbreedapi_get_random_read",
  async payload => {
    const response = await apiService.dogbreedapi_get_random_read(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const dogbreedapi_response_get_RandomsSlice = createSlice({
  name: "dogbreedapi_response_get_Randoms",
  initialState,
  reducers: {},
  extraReducers: {
    [dogbreedapi_get_random_read.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [dogbreedapi_get_random_read.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [dogbreedapi_get_random_read.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  dogbreedapi_get_random_read,
  slice: dogbreedapi_response_get_RandomsSlice
}
