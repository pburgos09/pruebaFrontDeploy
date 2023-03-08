import { useParams } from "react-router";
import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import styles from "../styles/SingleCard.module.css";
import { useSelector, useDispatch } from "react-redux";
import { singleMovie } from "../store/movies";
import { getMovies } from "../store/movies";
import { addFavorite } from "../store/favoritesActions";
import { favoritesAll } from "../store/favoritesAll";

export default function detailMovie() {
  const dispatch = useDispatch();
  const singleCard = useSelector((state) => state.singleMovies);
  const favoriteAction = useSelector((state) => state.favoritesActions)
  const favoritesDisplay = useSelector((state) => state.favoritesAll)

  // const user = useSelector((state) => state.)

  const urlImage = "https://image.tmdb.org/t/p/w300";

  const data = useParams();
  console.log("USE PARAMS SINGLECARD", useParams())

  useEffect(() => {
    dispatch(singleMovie(data));
  }, [data.id]);

  const addNewFavorite = () =>{
    dispatch(addFavorite(data))
  }

  useEffect(() => {
    console.log("data  en useEffect en SCARD", data)
    dispatch(favoritesAll(data))
}, [addNewFavorite])

  return (
    <div
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${singleCard.backdrop_path}`,
      }}
      className={styles.background}
    >
      <div className={styles.movieheader}>
        <img className={styles.image} src={urlImage + singleCard.poster_path} />
        <h1>{singleCard.title ? singleCard.title : singleCard.name}</h1>
        <h4>{singleCard.release_date ? singleCard.release_date : singleCard.first_air_date}</h4>
        <span className={styles.minutes}>{singleCard.runtime ? `${singleCard.runtime} min` : `${singleCard.number_of_seasons} seasons`}</span>
        <p className={styles.type}>
          {singleCard.genres?.map((genre) => genre.name + " | ")}
        </p>
      </div>
      <div className={styles.movie_desc}>
        <p className={styles.text}>{singleCard.overview}</p>
      </div>
      <div>
        <button onClick={addNewFavorite}>AGREGAR FAVORITO</button>
      </div>
      {/* <div className="movie_social">
      <ul>
        <li><i class="material-icons">share</i></li>
        <li><i class="material-icons"></i></li>
        <li><i class="material-icons">chat_bubble</i></li>
      </ul>
    </div> */}
    </div>
  );
}
