import { forwardRef } from "react";
import "./Modal.css";

const Modal = forwardRef(function Modal(
  { title, description, image, onClose },
  ref,
) {
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  const handleCancel = (e) => {
    e.preventDefault();
    onClose();
  };

  return (
    <dialog
      ref={ref}
      className="modal"
      onClick={handleBackdropClick}
      onCancel={handleCancel}
    >
      <div className="modal__content">
        <h2>{title}</h2>
        <p>{description}</p>
        {image && <img src={image} alt="" className="modal__image" />}
        <button type="button" className="modal__close-button" onClick={onClose}>
          Close
        </button>
      </div>
    </dialog>
  );
});

export default Modal;
