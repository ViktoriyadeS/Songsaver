import React from "react";


function SongForm(props) {
  return (
    <div className="song-form">
      <input
        type="text"
        name="song"
        placeholder="New song"
        onChange={props.handleChange}
        className="input-selection"
      />
      <input
        type="text"
        name="artist"
        placeholder="Artist"
        onChange={props.handleChange}
        className="input-selection"
      />
      <select name="genre" onChange={props.handleChange} className="input-selection">
        <option>-- Select genre --</option>
        <option value="pop">Pop</option>
        <option value="blues">Blues</option>
        <option value="rock">Rock</option>
        <option value="jazz">Jazz</option>
        <option value="other">Other</option>
      </select>
      <select name="rating" onChange={props.handleChange} className="input-selection">
        <option>-- Select rating --</option>
        <option value="5">5</option>
        <option value="4">4</option>
        <option value="3">3</option>
        <option value="2">2</option>
        <option value="1">1</option>
      </select>
      <button className="add-btn" onClick={props.addSong}>+ Add</button>
    </div>
  );
}

export default SongForm;
