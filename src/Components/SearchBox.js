import React from "react";
import "../App.css";

export const SearchBox = (props) => {
  return (
    <div className="App">
      <input
        className="input-type"
        type="text"
        value={props.value}
        onChange={(event) => props.setSearchValue(event.target.value)}
        placeholder="Search for movies"
      ></input>
    </div>
  );
};
export default SearchBox;
