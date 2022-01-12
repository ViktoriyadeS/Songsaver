import React from "react";

function Sort(props) {
  return (
    <div className="filters">
      <select name="sort" onChange={props.handleSort}>
        <option value="">Sort by:</option>
        <option value="song"> Song title (a-z) </option>
        <option value="artist"> Artist name (a-z) </option>
        <option value="genre"> Genre </option>
        <option value="rating"> Rating </option>
      </select>
      <br></br>
      
      <select name="genre" onChange={props.handleFilter} >
        <option>Filter genre:</option>
        <option value="">Show all</option>
        <option value="pop">Pop</option>
        <option value="blues">Blues</option>
        <option value="rock">Rock</option>
        <option value="jazz">Jazz</option>
        <option value="latin">Latin</option>
      </select>
      <br></br>
     
      <select name="rating" onChange={props.handleFilter} >
        <option>Filter rating:</option>
        <option value="">Show all</option>
        <option value="5">5</option>
        <option value="4">4</option>
        <option value="3">3</option>
        <option value="2">2</option>
        <option value="1">1</option>
      </select>
      <button className="delete-btn" onClick={props.clearList}>
        Clear list
      </button>
    </div>
  );
}

export default Sort;
