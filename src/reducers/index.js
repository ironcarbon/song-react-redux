import { combineReducers } from "redux";

const songReducer = () => {
  return [
    { title: "No scrubs", duration: "4:05" },
    { title: "Macarena", duration: "2:30" },
    { title: "All Star", duration: "3:15" },
    { title: "I want it that way", duration: "1:45" }
  ];
};

const selectedSongReducer = (selectedSongReducer = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSongReducer;
};

export default combineReducers({
  songs: songReducer,
  selectedSong: selectedSongReducer
});
