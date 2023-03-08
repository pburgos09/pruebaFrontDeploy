import axios from "axios";
import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";

export const getMovies = createAsyncThunk("SET_MOVIES", async (type) => {
  try {
    const movies = await axios.get(`/api/${type}`);
    return movies.data;
  } catch (error) {
    console.log(error);
  }
});

export const singleMovie = createAsyncThunk(
  "SET_SINGLE_MOVIE",
  async (data) => {
    try {
      const { type, id } = data;
      const detailMovie = await axios.get(`/api/${type}/${id}`);
      console.log("DETAIL MOVIE STORE", detailMovie);
      return detailMovie.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const moviesReducer = createReducer([], {
  [getMovies.fulfilled]: (state, action) => action.payload,
  [getMovies.rejected]: (state, action) => action.payload,
});

export const singleMovieReducer = createReducer([], {
  [singleMovie.fulfilled]: (state, action) => action.payload,
  [singleMovie.rejected]: (state, action) => action.payload,
});
