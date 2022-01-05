import React from "react";

function Filter(props) {
  return (
    <div className="filter">
      <label>Filter by</label>
      <select name="filter" onChange={props.handleFilter}>
        <option value="">- - - - - - -</option>
        <option value="songName" > Song (a-z) </option>
        <option value="artistName"> Artist (a-z) </option>
        <option value="genreName"> Genre </option>
        <option value="ratingNumber"> Rating </option>
      </select>
    </div>
  );
}

export default Filter;
