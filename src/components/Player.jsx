import React from "react";
import ReactPlayer from "react-player";
import movieTrailer from "movie-trailer";

const Player = ({title}) => {
  const trailerURL = "";
  movieTrailer(title).then((res) => trailerURL=res);

  return (
    <div>
      <ReactPlayer
        controls
        width="100%"
        height="95vh"
        url=trailerURL
      />
    </div>
  );
};

export default Player;
