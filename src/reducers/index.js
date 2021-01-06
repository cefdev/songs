import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "God's Country", duration: "4:12" },
    { title: "One More Time", duration: "3:56" },
    { title: "Fire", duration: "4:03" },
    { title: "Bloods On My Name", duration: "2:47" },
  ];
};

const seletedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.type;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: seletedSongReducer,
});
