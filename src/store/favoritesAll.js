import axios from "axios";
import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";

export const favoritesAll = createAsyncThunk(
  "FAVORITES_DISPLAY_ALL",
  async (id) => {
    try {
      // const id = data.user.email
      console.log("ALL FAVORITES - ID DE USER", id);
      const favorites = await axios.get(`/api/favourites/${id}/all`);
      return favorites.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const favoritesAllReducer = createReducer([], {
  [favoritesAll.fulfilled]: (state, action) => action.payload,
  [favoritesAll.rejected]: (state, action) => action.payload,
});
