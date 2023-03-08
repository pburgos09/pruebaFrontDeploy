import { Link } from "react-router-dom";
import styles from "../styles/Card.module.css";

export default function moviesCard ({ movie }) {
  const urlImage = "https://image.tmdb.org/t/p/original";
  const id = movie.id

  return (
    <div>
      <div className="card">
        <ul className={styles.movieCard}>
          <Link to={ movie.title ? `${`/movies/${id}`}` : `${`/shows/${id}`}`}>
            <img
              className={styles.movieImage}
              src={urlImage + movie.poster_path}
              alt={movie.title}
              width={230}
              height={345}
            />
          </Link>
          <div>{movie.title ? movie.title : movie.name }</div> 
        </ul>
      </div>
    </div>
  );
};
