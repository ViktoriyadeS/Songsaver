import React from "react";
import SongItem from "./SongItem";

function PlayList({ songs, filterBy }) {
  return filterBy !== ""
    ? songs
        .filter((song) => song.genre === filterBy || song.rating === filterBy)
        .map((item) => {
          return <SongItem key={item.id} item={item} />;
        })
    : songs.map((song) => {
        return <SongItem key={song.id} item={song} />;
      });
}

export default PlayList;
