import { useParams } from "react-router";
import axios from "axios";
import { useEffect } from "react";
import styles from "../styles/SingleCard.module.css";
import moviesGrid from "./MoviesGrid";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { favoritesAll } from "../store/favoritesAll";

export default function favoritesDisplay() {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);

  const urlImage = "https://image.tmdb.org/t/p/w300";

  useEffect(() => {
    dispatch(favoritesAll(data));
  }, [data.id]);

  return (
    <div>
      <moviesGrid type={favorites}/>
    </div>
  );
}
