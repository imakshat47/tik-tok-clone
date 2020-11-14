import { MusicNote } from "@material-ui/icons";
import React from "react";
import Ticker from "react-ticker";
import "./VideoFooter.css";

function VideoFooter({ channel, description, song }) {
  return (
    <div className="videoFooter">
      <div className="videoFooter_text">
        <h3 className="channel" >@{channel}</h3>
        <p>{description}</p>
        <div className="videoFooter_ticker">
          <MusicNote className="videoFooter__icon" />
          <Ticker mode="smooth">
            {({ index }) => (
              <>
                <p>{song}</p>
              </>
            )}
          </Ticker>
        </div>
      </div>
      <img
        className="videoFooter__record"
        src="https://static.thenounproject.com/png/934821-200.png"
        alt=""
      />
    </div>
  );
}

export default VideoFooter;
