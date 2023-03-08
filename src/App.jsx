import React from "react";
import { Routes, Route } from "react-router";
import Navbar from "./components/Navbar";
import MoviesGrid from "./commons/MoviesGrid"
import SingleCard from "./components/SingleCard"
import Register from "./components/Register";
import Login from "./components/Login"
import UserFavorites from "./commons/UserFavorites"

const App = () => {
  return (
    <>
        <Navbar />
        <Routes>
          <Route path="/:type" element={<MoviesGrid />} />
          <Route path="/:type/:id" element={<SingleCard />} />
          <Route path="/user/register" element={<Register />} />
          <Route path="/user/login" element={<Login />} />
          <Route path="/favourites/:id/all" element={<UserFavorites />} />
        </Routes>
    </>
  );
};

export default App;