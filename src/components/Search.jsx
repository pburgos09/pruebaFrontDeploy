import { useEffect, useState } from "react";
import styles from "../styles/Search.module.css";
import { useSelector, useDispatch } from "react-redux";
import { getMovies } from "../store/movies";
import MoviesCard from "../commons/MoviesCard";
import { setSearch } from "../store/search";
import { useNavigate, useParams } from "react-router-dom";
import {
  AiOutlineUser,
  AiOutlineSearch,
  AiOutlineMenu,
  AiOutlineClose,
} from "react-icons/ai";

export default function Search() {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const { query } = useParams();
  const [searchInput, setSearchInput] = useState("");
  // const setSearch = useSelector((state) => state.singleMovies);

  const onSubmit = (e) => {
    e.preventDefault()
    dispatch(setSearch(searchInput))
    setSearchInput("")
    // navigate(`/search/${searchInput}`)
  };

  const searchOnChange = (e) => {
    setSearchInput(e.target.value);
    // setSearchInput("");
  };

  return (
    <div className={styles.content}>
      <div className={styles.search}>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            className={styles.input}
            placeholder="Find your movie or tv show"
            value={searchInput}
            onChange={searchOnChange}
          />
          <button className={styles.submit}>
            <AiOutlineSearch
              size={25}
              style={{ marginTop: "6px", color: "white" }}
            />
          </button>
        </form>
      </div>
    </div>
  )
}
