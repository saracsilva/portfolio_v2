import "./Card.css";

function Card({ title, image }) {
  return (
    <li className="card">
      <a href={`/${title.toLowerCase()}`}>
        <h2 className="card__title">{title}</h2>
        <div className="card__media">
          {image && <img src={image} alt="" className="card__image" />}
        </div>
      </a>
    </li>
  );
}

export default Card;
