import React from "react";
import "./styles.css";
import { useState, useEffect } from "react";
import Player from "./components/Player";
import { LogoNodejs } from 'react-ionicons'

function App() {
  const [songs] = useState([
    {
      title: "Galat Fehmi",
      artist: "Asim Azhar",
      img_src: "./images/1.jpg",
      src: "./music/GF.mp3"
    },

    {
      title: "Yeh Dil Mera",
      artist: "Shiraz Uppal",
      img_src: "./images/2.jpg",
      src: "./music/YDM.mp3"
    },
    {
      title: "Song 3",
      artist: "Artist 3",
      img_src: "./images/3.jpg",
      src: "./music/GF.mp3"
    },
    {
      title: "Song 4",
      artist: "Artist 4",
      img_src: "./images/4.jpg",
      src: "./music/YDM.mp3"
    }
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex]);

  return (
    <div className="App">
      <Player
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        nextSongIndex={nextSongIndex}
        songs={songs}
      />
    </div>
  );
}

export default App;
