import React from "react";

function Filter(props) {
  return (
    <div className="filter">
      <h2>Filter:</h2>

      <input
        type="radio"
        name="filter"
        value="showAll"
        onChange={props.handleFilter}
        defaultChecked
      />
      <label>Shaw All</label>
      <input
        type="radio"
        name="filter"
        value="pop"
        onChange={props.handleFilter}
      />
      <label>Pop</label>
      <input
        type="radio"
        name="filter"
        value="blues"
        onChange={props.handleFilter}
      />
      <label>Blues</label>
      <input
        type="radio"
        name="filter"
        value="rock"
        onChange={props.handleFilter}
      />
      <label>Rock</label>
      <input
        type="radio"
        name="filter"
        value="jazz"
        onChange={props.handleFilter}
      />
      <label>Jazz</label>
      <input
        type="radio"
        name="filter"
        value="latin"
        onChange={props.handleFilter}
      />
      <label>Latin</label>

      <input
        type="radio"
        name="filter"
        value="1"
        onChange={props.handleFilter}
      />
      <label>1 star</label>
      <input
        type="radio"
        name="filter"
        value="2"
        onChange={props.handleFilter}
      />
      <label>2 stars</label>
      <input
        type="radio"
        name="filter"
        value="3"
        onChange={props.handleFilter}
      />
      <label>3 stars</label>
      <input
        type="radio"
        name="filter"
        value="4"
        onChange={props.handleFilter}
      />
      <label>4 stars</label>
      <input
        type="radio"
        name="filter"
        value="5"
        onChange={props.handleFilter}
      />
      <label>5 stars</label>
      <br></br>
    </div>
  );
}

export default Filter;
