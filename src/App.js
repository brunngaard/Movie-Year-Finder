import React, { useEffect, useState } from "react";
import ShowMovies from "./Components/ShowMovies";
import Header from "./Components/Header";
import SearchBox from "./Components/SearchBox";
import axios from "axios";
import "./App.css";
import Nav from "./Components/Nav";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const getMovieRequest = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=8d00b054`;
    const res = await fetch(url);
    const resJSON = await res.json();
    console.log(resJSON);

    if (resJSON.Search) {
      setMovies(resJSON.Search);
    }
  };

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  return (
    <div>
      <Header />
      <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      <Nav />
      <ShowMovies movies={movies} />
    </div>
  );
};
export default App;
