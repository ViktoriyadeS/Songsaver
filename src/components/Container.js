import React, { Component } from "react";
import SongForm from "./SongForm";
import PlayList from "./PlayList";
import TableHeader from "./TableHeader";
import PageHeader from "./PageHeader";
import Sort from "./Sort";
import songsList from "../songList";

class Container extends Component {
  constructor() {
    super();
    this.state = {
      songs: songsList,
      input: {},
      filter: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.addSong = this.addSong.bind(this);
    this.handleSort = this.handleSort.bind(this);
    this.handleClearList = this.handleClearList.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
  }

  handleChange = (event) => {
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
  handleSort = (event) => {
    const list = [...this.state.songs];
    if (event.target.value !== "") {
      const compareNames = (a, b) => {
        if (a[event.target.value] < b[event.target.value]) {
          return -1;
        } else if (a[event.target.value] > b[event.target.value]) {
          return 1;
        } else return 0;
      };
      const newList = list.sort(compareNames);
      this.setState({
        songs: newList,
      });
    }
  };
  handleClearList = () => {
    this.setState({
      songs: [],
    });
  };

  handleFilter = (event) => {
    event.target.value !== ""
      ? this.setState({ filter: event.target.value })
      : this.setState({ filter: "" });
  };
  render() {
    return (
      <div>
        <PageHeader />
        <SongForm addSong={this.addSong} handleChange={this.handleChange} />
        <Sort
          handleSort={this.handleSort}
          handleFilter={this.handleFilter}
          clearList={this.handleClearList}
        />

        <TableHeader />
        <PlayList songs={this.state.songs} filterBy={this.state.filter} />
      </div>
    );
  }
}

export default Container;
