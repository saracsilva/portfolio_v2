import { forwardRef } from "react";

const Modal = forwardRef(function Modal({ title, onClose }, ref) {
  return (
    <dialog ref={ref} className="modal">
      <h2>{title}</h2>
      <button type="button" className="modal__close-button" onClick={onClose}>
        Close
      </button>
    </dialog>
  );
});

export default Modal;
