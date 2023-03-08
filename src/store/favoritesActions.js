import axios from "axios";
import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";

export const addFavorite = createAsyncThunk("ADD_FAVORITE", async (data, thunkAPI) => {
  try {
    console.log("AGREGAR FAVORITO", data)
    const favorite = await axios.post(`/api/favourites/${data.id}/add`, {
     movieId: data.id,
     title: data.title,
     image: data.poster_path
    });
    return favorite.data
  } catch (error) {
    console.log(error);
  }
});

// export const removeFavorite = createAsyncThunk("REMOVE_FAVORITE", async (data, thunkAPI) => {
//     try {
//       const deleteFavorite = await axios.delete(`/api/${id}/remove`, data);
//       return deleteFavorite
//     } catch (error) {
//       console.log(error);
//     }
//   });


export const favoritesActionsReducer = createReducer([], {
  [addFavorite.fulfilled]: (state, action) => action.payload,
  [addFavorite.rejected]: (state, action) => action.payload,

//   [removeFavorite.fulfilled]: (state, action) => action.payload,
//   [removeFavorite.rejected]: (state, action) => action.payload,
});
