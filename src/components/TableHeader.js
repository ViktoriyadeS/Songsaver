import React from "react";

function TableHeader() {
  return (
    <table style={{ width: "100%" }}>
      <thead>
        <tr className="song-header">
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
