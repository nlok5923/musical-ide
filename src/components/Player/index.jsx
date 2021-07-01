import { React } from "react";
import "./Player.scss";
import ReactJkMusicPlayer from "react-jinke-music-player";
import "react-jinke-music-player/assets/index.css";

const MusicPlayer = () => {
  const audioLists = [
    {
      name: "Despacito",
      singer: "Luis Fonsi",
      cover: "./asset/images/song-1.jpg",
      musicSrc: "http://localhost:5000/track/60dc0b1d4239615608620f67?",
    },
    {
      name: "Despacito",
      singer: "Luis Fonsi",
      cover: "./asset/images/song-3.jpg",
      musicSrc: "http://localhost:5000/track/60dc0b1d4239615608620f67?",
    },
  ];

  return (
    <div className="App">
      <ReactJkMusicPlayer audioLists={audioLists} autoPlay={true} />
    </div>
  );
};

export default MusicPlayer;
