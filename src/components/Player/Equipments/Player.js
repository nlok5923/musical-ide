import React, { useState, useRef, useEffect } from "react";
import Controls from "./Controls";
import Details from "./Details";

function Player(props) {
  const audioEl = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (isPlaying) {
      audioEl.current.play();
    } else {
      audioEl.current.pause();
    }
  });

  const SkipSong = (forwards = true) => {
    if (forwards) {
      props.setCurrentSongIndex(() => {
        let temp = props.currentSongIndex;
        temp++;

        if (temp > props.songs.length - 1) {
          temp = 0;
        }

        return temp;
      });
    } else {
      props.setCurrentSongIndex(() => {
        let temp = props.currentSongIndex;
        temp--;

        if (temp < 0) {
          temp = props.songs.length - 1;
        }

        return temp;
      });
    }
  };

  return (
    <div>
      <div className="music-player">
        <div className="m-player">
          <img
            className="song-img"
            src={props.songs[props.currentSongIndex].img_src}
            alt="song"
          />
          <div>
            <h4 className="m-player-title">
              {props.songs[props.currentSongIndex].title}
            </h4>
          </div>
          <div className="c-player">
            <audio
              src={props.songs[props.currentSongIndex].src}
              ref={audioEl}
            ></audio>
            <Details song={props.songs[props.currentSongIndex]} />
            <Controls
              isPlaying={isPlaying}
              setIsPlaying={setIsPlaying}
              SkipSong={SkipSong}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Player;
