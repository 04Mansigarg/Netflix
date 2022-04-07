import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RecommendIcon from "@mui/icons-material/Recommend";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";
import React from "react";
import styles from "../css/PopUp.module.css";
import { useNavigate } from "react-router-dom";

const PopUp = () => {
  const imgURL =
    "https://occ-0-6246-2164.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABc6iNym2D7VZFoLCN1rOQ4e0c2VKDpOWxqIyT6YJR-nYaQeOGokfxkwmT2C-goQcy25GH3atsW-4USvP4gYHCKCOusmyQ8VisSuQQa3A6_zGA_vV2pcG0ICdiW0ieUmMI9oRhu4L4FiyS-bOKwKUOPrGYfQ.jpg?r=4f8";
  const match = 91;
  const cert = "U/A 16+";
  const duration = "2h 43m";
  const quality = ["Rousing", "Inspiring", "Heartfelt"];
  const navigate = useNavigate();
  return (
    <div className={styles.popup_container}>
      <img src={imgURL} />
      <div className={styles.row1}>
        <span>
          <PlayCircleFilledIcon
            onClick={() => {
              navigate("../player");
            }}
          />
          <AddCircleOutlineIcon />
          <RecommendIcon />
        </span>
        <span>
          <ExpandCircleDownIcon />
        </span>
      </div>
      <div className={styles.row2}>
        <span>{match}% Match</span>
        <span className={styles.cert}>{cert}</span>
        <span>{duration}</span>
      </div>
      <div className={styles.row3}>
        <span>{quality[0]}</span>
        <span>•</span>
        <span>{quality[1]}</span>
        <span>•</span>
        <span>{quality[2]}</span>
      </div>
    </div>
  );
};

export default PopUp;
