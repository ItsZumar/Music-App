import React from "react";
import { ArrowForwardOutline } from "react-ionicons";
import { ArrowBackOutline } from "react-ionicons";
import { CaretForwardOutline } from "react-ionicons";
import { PauseOutline } from "react-ionicons";

function Controls(props) {
  return (
    <div className="c-player--controls">
      <button className="skip-btn" onClick={() => props.SkipSong(false)}>
        <ArrowBackOutline color={"#00000"} height="22px" width="22px" />
      </button>

      {/* <button
        className="play-btn"
        onClick={() => props.setIsPlaying(!props.isPlaying)}
      > */}
<div className='play-btn'>
        {props.isPlaying ? (
          <PauseOutline color={"#fff"} height="29px" width="29px"         onClick={() => props.setIsPlaying(!props.isPlaying)}
          />
        ) : (
          <CaretForwardOutline color={"#fff"} height="29px" width="29px"         onClick={() => props.setIsPlaying(!props.isPlaying)}
          />
        )}
        </div>
      {/* </button> */}

      <button className="skip-btn" onClick={() => props.SkipSong()}>
        <ArrowForwardOutline color={"#00000"} height="22px" width="22px" />
      </button>
    </div>
  );
}

export default Controls;
