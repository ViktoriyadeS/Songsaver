import React from "react";
import SongItem from "./SongItem"

function PlayList({songs}){
    return(
        songs.map(song =>{
            return <SongItem key = {song.id} item={song} />
        })
    )
}

export default PlayList