import { React, useState, useEffect } from "react";
import "./Player.scss";
import Player from "./Equipments/Player";
import { Draggable } from "react-draggable";

const MusicPlayer = () => {
  // const [songs] = useState([
  //     {
  // title: "Forget me too ft. Halsey",
  // artist: "Machine Gun Kelly",
  // img_src: "./asset/images/song-1.jpg",
  // src: "./asset/tune/on-n-on.mp3",
  //       genre: "test1"
  //     },
  //     {
  // title: "Song 2",
  // artist: "Artist 2",
  // img_src: "./asset/images/song-2.jpg",
  // src: "./asset/tune/somebody-new.mp3",
  //       genre: "test1"
  //     },
  //     {
  // title: "Song 3",
  // artist: "Artist 3",
  // img_src: "./asset/images/song-3.jpg",
  // src: "./asset/tune/wore.mp3",
  // genre: "test2"
  //     },
  //     {
  //       title: "Song 4",
  //       artist: "Artist 4",
  //       img_src: "./asset/images/song-4.jpg",
  //       src: "./asset/tune/beleiver.mp3",
  //       genre: "test2"
  //     },
  //     {
  //         title: "Song 4",
  //         artist: "Artist 4",
  //         img_src: "./asset/images/song-1.jpg",
  //         src: "./asset/tune/tun.mp3",
  //         genre: "test2"
  //       },
  //       {
  // title: "Song 1",
  // artist: "Artist 4",
  // img_src: "./asset/images/song-1.jpg",
  // src: "./asset/tune/anymore.mp3",
  // genre: "test2"
  //       }
  //   ]);

  return (
    <div className="App">
      <Player
        // currentSongIndex={currentSongIndex}
        // setCurrentSongIndex={setCurrentSongIndex}
        // nextSongIndex={nextSongIndex}
        // songs={songs}
      />
    </div>
  );
};

export default MusicPlayer;
