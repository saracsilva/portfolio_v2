import smileIcon from "../assets/icons/smile_face.svg";
import "./SmileFace.css";

function SmileFace({ animated = false }) {
  return (
    <div className={animated ? "smile-face animated" : "smile-face"}>
      <img className="smile-face__icon" src={smileIcon} alt="Smile Face Icon" />
    </div>
  );
}

export default SmileFace;
