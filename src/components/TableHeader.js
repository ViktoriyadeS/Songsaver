import React from "react";

function TableHeader() {
  return (
    <table className="song-header" style={{ width: "100%"}}>
      <thead>
        <tr >
          <th className="song-row__item">Song</th>
          <th className="song-row__item">Artist</th>
          <th className="song-row__item">Genre</th>
          <th className="song-row__item">Rating</th>
        </tr>
      </thead>
    </table>
  );
}

export default TableHeader;
