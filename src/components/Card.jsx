import "./Card.css";

function Card({ title, image, onOpen }) {
  const handleClick = (e) => {
    e.preventDefault();
    onOpen();
  };

  return (
    <li>
      <button onClick={handleClick} className="card" type="button">
        <h2 className="card__title">{title}</h2>
        <div className="card__media">
          {image && <img src={image} alt="" className="card__image" />}
        </div>
      </button>
    </li>
  );
}

export default Card;
