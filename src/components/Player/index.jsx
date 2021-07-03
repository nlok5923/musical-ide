import { React } from "react";
import "./Player.scss";
import ReactJkMusicPlayer from "react-jinke-music-player";
import "react-jinke-music-player/assets/index.css";

const MusicPlayer = () => {
  const audioLists = [
    {
      name: "Such a wore",
      singer: "Jivla",
      cover: "./asset/images/wore.jpg",
      musicSrc: "https://save-and-play.herokuapp.com/track/60dc071a4239615608620f44?",
    },
    {
      name: "Some thing just like this",
      singer: "Unknown",
      cover: "./asset/images/like-this.png",
      musicSrc: "https://save-and-play.herokuapp.com/track/5fe0c2b8211ba200043bbe55?",
    },
    {
      name: "Satisfy",
      singer: "Imran Khan",
      cover: "./asset/images/satisfy.jpeg",
      musicSrc: "https://save-and-play.herokuapp.com/track/60dc0b0e4239615608620f54?",
    },
    {
      name: "Despacito",
      singer: "Luis Fonsi",
      cover: "./asset/images/despacito.jpg",
      musicSrc: "https://save-and-play.herokuapp.com/track/5fe0c186211ba200043bbe4a?",
    },
  ];

  return (
    <div className="App">
      <ReactJkMusicPlayer audioLists={audioLists} autoPlay={true} />
    </div>
  );
};

export default MusicPlayer;
