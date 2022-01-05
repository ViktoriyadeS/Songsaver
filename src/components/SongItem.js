import React from "react";

function SongItem({ item }) {
  return (
    <table className= "list" style={{ width: "100%" }}>
      <tbody>
        <tr key={item.id} className="song-table">
          <td className="song-table">{item.song}</td>
          <td className="song-table">{item.artist}</td>
          <td className="song-table">{item.genre}</td>
          <td className="song-table">{item.rating}</td>
        </tr>
      </tbody>
    </table>
  );
}

export default SongItem;
