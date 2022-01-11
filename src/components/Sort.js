import React from "react";

function Sort(props) {
  return (
    <div className="filters">
      <select name="sort" onChange={props.handleSortFilter}>
        <option value="">-Sort by-</option>
        <option value="song"> Song title (a-z) </option>
        <option value="artist"> Artist name (a-z) </option>
        <option value="genre"> Genre </option>
        <option value="rating"> Rating </option>
      </select>

      <button className="delete-btn" onClick={props.clearList}>
        Clear list
      </button>
    </div>
  );
}

export default Sort;
