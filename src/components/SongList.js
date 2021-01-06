import React, { Component } from "react";
import { connect } from "react-redux";

class SongList extends Component {
  render() {
    console.log(this.props);
    return <div>SongList</div>;
  }
}

const mapStateToProps = (state) => {
  return { songs: state.songs };
};

// Connect SongList component to mapStateToProps to get songs from state
export default connect(mapStateToProps)(SongList);
