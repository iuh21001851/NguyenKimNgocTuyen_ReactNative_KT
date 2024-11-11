import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";

const API_URL = "https://671622f833bc2bfe40bc8ead.mockapi.io/bikes";

export const fetchBikes = createAsyncThunk(
  "bikes/fetchBikes",

  async () => {
    const response = await axios.get(API_URL);

    return response.data;
  }
);

export const addBike = createAsyncThunk(
  "bikes/addBike",

  async (newBike) => {
    const response = await axios.post(API_URL, newBike);

    return response.data;
  }
);

const bikesSlice = createSlice({
  name: "bikes",

  initialState: {
    items: [],

    status: "idle",

    error: null,

    selectedCategory: "All",

    addStatus: "idle",

    addError: null,
  },

  reducers: {
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder

      .addCase(fetchBikes.pending, (state) => {
        state.status = "loading";
      })

      .addCase(fetchBikes.fulfilled, (state, action) => {
        state.status = "succeeded";

        state.items = action.payload;
      })

      .addCase(fetchBikes.rejected, (state, action) => {
        state.status = "failed";

        state.error = action.error.message;
      })

      .addCase(addBike.pending, (state) => {
        state.addStatus = "loading";
      })

      .addCase(addBike.fulfilled, (state) => {
        state.addStatus = "succeeded";

        state.status = "idle";
      })

      .addCase(addBike.rejected, (state, action) => {
        state.addStatus = "failed";

        state.addError = action.error.message;
      });
  },
});

export const { setSelectedCategory } = bikesSlice.actions;

export default bikesSlice.reducer;
