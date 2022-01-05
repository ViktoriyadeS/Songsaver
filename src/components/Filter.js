import React from "react";

function Filter(props) {
  return (
    <div className="filter">
      <label>Filter by</label>
      <select name="filter" onChange={props.handleFilter}>
        <option value="">- - - - - - -</option>
        <option value="song" > Song (a-z) </option>
        <option value="artist"> Artist (a-z) </option>
        <option value="genre"> Genre </option>
        <option value="rating"> Rating </option>
      </select>
    </div>
  );
}

export default Filter;
