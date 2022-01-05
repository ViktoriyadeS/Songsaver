import React, { Component } from "react";
import SongForm from "./SongForm";
import PlayList from "./PlayList";
import TableHeader from "./TableHeader";
import PageHeader from "./PageHeader";
import Filter from "./Filter";

class Container extends Component {
  constructor() {
    super();
    this.state = {
      songs: [
        {
          id: 1,
          song: "My Song",
          artist: "Artist artist",
          genre: "Blues",
          rating: 5,
        },
        {
          id: 2,
          song: "My Song 2",
          artist: "Artist 2 artist",
          genre: "Pop",
          rating: 4,
        },
      ],
      input: {},
    };
    this.handleChange = this.handleChange.bind(this);
    this.addSong = this.addSong.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
  }

  handleChange = (event) => {
    console.log(`I'm changed ${event.target.name} & ${event.target.value}`);
    this.setState({
      input: {
        ...this.state.input,
        id: this.state.songs.length + 1,
        [event.target.name]: event.target.value,
      },
    });
  };
  addSong = () => {
    const { id, song, artist, genre, rating } = this.state.input;
    this.setState({
      songs: [
        ...this.state.songs,
        {
          id: id,
          song: song,
          artist: artist,
          genre: genre,
          rating: rating,
        },
      ],
    });
  };
  handleFilter(event) {
    console.log(`selected option: ${event.target.value}`);
  }
  render() {
    return (
      <div>
        <PageHeader />
        <SongForm addSong={this.addSong} handleChange={this.handleChange} />
        <Filter handleFilter={this.handleFilter} />
        <TableHeader />
        <PlayList songs={this.state.songs} />
      </div>
    );
  }
}

export default Container;
