import React, { useState, useRef, useEffect, useCallback } from "react";
import Controls from "./Controls";

function Player(props) {
  const audioEl = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [genre, setGenre] = useState("test2")
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);
  // const [songs, setSongs] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  // const selectGenre = [{ type: "test1" }, { type: "test2" }];
  const songs = useState({
    test1: [
      {
        title: "Forget me too ft. Halsey",
        artist: "Machine Gun Kelly",
        img_src: "./asset/images/song-1.jpg",
        src: "./asset/tune/on-n-on.mp3",
      },
      {
        title: "Song 2",
        artist: "Artist 2",
        img_src: "./asset/images/song-2.jpg",
        src: "./asset/tune/somebody-new.mp3",
      },
    ],
    test2: [
      {
        title: "Song 3",
        artist: "Artist 3",
        img_src: "./asset/images/song-3.jpg",
        src: "./asset/tune/wore.mp3",
      },
      {
        title: "Song 1",
        artist: "Artist 4",
        img_src: "./asset/images/song-1.jpg",
        src: "./asset/tune/anymore.mp3",
      },
    ],
  });

  const play = () => {
    audioEl.current.addEventListener("ended", () => SkipSong());
    setIsPlaying(!isPlaying);
    if(isPlaying) {
      audioEl.current.play();
    } else {
      audioEl.current.pause();
    }
  }


  // useEffect(() => {
  //   // setIsLoading(true);
  //   // if(isLoading ) {
  //   // if (isPlaying) {
  //   //   audioEl.current.play();
  //   // } else {
  //   //   audioEl.current.pause();
  //   // } 
  //   console.log("satet",songs[0][genre]);
  //   // audioEl.current.addEventListener("ended", () => SkipSong());
  // // }
  //   console.log("loading is set");
  // },[]);

  const SkipSong = useCallback(
    (forwards = true) => {
      if (forwards) {
         setCurrentSongIndex(() => {
          let temp = currentSongIndex;
          temp++;

          if (temp > songs[0][genre].length - 1) {
            temp = 0;
          }

          return temp;
        });
      } else {
          setCurrentSongIndex(() => {
          let temp =  currentSongIndex;
          temp--;

          if (temp < 0) {
            temp = songs[0][genre].length - 1;
          }

          return temp;
        });
      }
    },
    [ genre, songs]
  );

  //for init we will have 10 songs of each genre
  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > 2 - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex]);

  return (
    <div>
      {isLoading && (
            <div className="music-player">
        <div className="m-player">
          <img
            className="song-img"
            src={songs[0][genre][currentSongIndex].img_src}
            alt="song"
          />
          <div>
            <h4 className="m-player-title">
              {songs[0][genre][currentSongIndex].title}
            </h4>
          </div>
          <div className="c-player">
          <select className="m-player-choose" name="genre" onChange={(e) => setGenre(e.target.value)}> 
          <option className="nav-buttons-option" value="test1"> test1 </option>
          <option className="nav-buttons-option" value="test2"> test2 </option>
           </select>
            <audio
              src = {songs[0][genre][currentSongIndex].src}
              ref={audioEl}
            ></audio>
            <Controls
              isPlaying={isPlaying}
              setIsPlaying={play}
              SkipSong={SkipSong}
            />
          </div>
        </div>
      </div> )}
    </div>
  );
}

export default Player;
