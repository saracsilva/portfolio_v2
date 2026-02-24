import { forwardRef } from "react";
import "./Modal.css";
import { TfiClose } from "react-icons/tfi";
import Button from "../components/Button";

const Modal = forwardRef(function Modal({ project, onClose }, ref) {
  if (!project) return null;

  const { title, description, image, github, live } = project;

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
        <div className="modal__media">
          {image && <img src={image} alt="" className="modal__image" />}
        </div>
        <div className="modal__details">
          <div className="modal__header">
            <h2 className="modal__title">{title}</h2>
            <Button
              aria-label="close modal"
              variant="outlined"
              type="button"
              onClick={onClose}
              icon={true}
            >
              <TfiClose />
            </Button>
          </div>
          <p className="modal__description">{description}</p>

          <div className="modal__links">
            {typeof github === "object" ? (
              <div className="flex flex-col gap-2 border-r-2 pr-4">
                <a
                  className="modal__link"
                  href={github.frontend}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub Frontend
                </a>
                <a
                  className="modal__link"
                  href={github.backend}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub Backend
                </a>{" "}
              </div>
            ) : (
              <a
                className="modal__link flex flex-col gap-2 border-r-2 pr-4"
                href={github}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            )}

            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="modal__link"
            >
              Live Demo
            </a>
          </div>
        </div>
      </div>
    </dialog>
  );
});

export default Modal;
