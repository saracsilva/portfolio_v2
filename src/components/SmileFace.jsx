import smileIcon from "../assets/icons/smile_face.svg";
import "./SmileFace.css";

function SmileFace({ animated = false, size = "large" }) {
  const classes = [
    "smile-face",
    animated && "smile-face--animated",
    size !== "large" && `smile-face--${size}`,
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
