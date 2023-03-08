import { useEffect } from "react";
import styles from "../styles/Grid.module.css";
import { useSelector, useDispatch } from "react-redux";
import { getMovies } from "../store/movies";
import MoviesCard from "./MoviesCard";
import { useParams } from "react-router-dom";
import { deleteSearch } from "../store/search";

export default function moviesGrid() {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies);
  const search = useSelector((state) => state.search);

console.log("USEPARAMS", useParams())
//depende lo que clickeo
const {type} = useParams()

  useEffect(() => {
    dispatch(getMovies(type));
  }, [type]); // cuando cambie el type, se vuelve a ejecutar el useEffect

const searchClean = () =>{
  dispatch(deleteSearch())
}

  console.log("PELICULAS", movies);

  if(search.length  > 0 ){return (
    <div>
      <button onClick={searchClean}> BORRA BUSQUEDA</button>
      <ul className={styles.moviesGrid}>
        {search.map((movie, i) => (
          <MoviesCard key={i} movie={movie} />
        ))}
      </ul>
    </div>
  )
} else { return (
    <div>
      <ul className={styles.moviesGrid}>
        {movies.map((movie, i) => (
          <MoviesCard key={i} movie={movie} />
        ))}HOLI
      </ul>
    </div>
  );
}
}
