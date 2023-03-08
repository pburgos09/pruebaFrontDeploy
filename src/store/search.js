import axios from "axios";
import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";

export const setSearch = createAsyncThunk("SEARCH_CONTENT", async (query) => {
  try {
      console.log("QUERY DE SEARCH", query)
    const search = await axios.get(`/api/search/${query}`);
    console.log(search.data)
    return search.data;
  } catch (error) {
    console.log(error);
  }
});

export const deleteSearch = createAsyncThunk("DELETE_SEARCH_CONTENT", async () => {
  try {
    return []
  } catch (error) {
    console.log(error);
  }
});

export const searchReducer = createReducer([], {
  [setSearch.fulfilled]: (state, action) => action.payload,
  [setSearch.rejected]: (state, action) => action.payload,

  [deleteSearch.fulfilled]: (state, action) => action.payload,
  [deleteSearch.rejected]: (state, action) => action.payload,

});

