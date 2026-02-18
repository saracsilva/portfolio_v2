import smileIcon from "../assets/icons/smile_face.svg";
import "./SmileFace.css";

function SmileFace({ animated = false, small = false }) {
  const classes = [
    "smile-face",
    animated && "smile-face--animated",
    small && "smile-face--small",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes}>
      <img className="smile-face__icon" src={smileIcon} alt="Smile Face Icon" />
    </div>
  );
}

export default SmileFace;
