import axios from "axios";
import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";

export const logInRequest = createAsyncThunk("LOGIN_USER",  async (data, thunkAPI) => {
    const {email, password} = data
  try {
    const user = await axios.post(`/api/user/login`, {
        email,
        password,
    })
    localStorage.setItem("user", JSON.stringify(user.data));
    return user.data
  } catch (error) {
    console.log(error);
  }
});

const moviesReducer = createReducer(
  [],
  {
    [logInRequest.fulfilled]: (state, action) => action.payload,
    [logInRequest.rejected]: (state, action) => action.payload,
  }
);

export default moviesReducer;