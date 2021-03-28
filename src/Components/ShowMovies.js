import React from "react";
import "../App.css";

export const ShowMovies = (props) => {
  return (
    <div className="Container">
      {props.movies.map((movie, index) => (
        <div>
          <img src={movie.Poster}></img>
          <p className="info">Release Year: {movie.Year}</p>
        </div>
      ))}
    </div>
  );
};

export default ShowMovies;
