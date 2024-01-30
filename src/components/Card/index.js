import React from "react";
import "./Card.scss";

const Card = (obj) => {
  const {title, img, price} = obj
  const [isLike, setIsLike] = React.useState(false)
  const [isPlus, setIsPlus] = React.useState(false)
  

  return (
    <li className="cards__item card">
      <button onClick={() => setIsLike(!isLike)}><img className="card__img-like" src={isLike ? "img/like.svg" : "img/nolike.svg"} alt="" /></button>
      <img className="card__img-fruit" src={img} alt="" />
      <p className="card__name">{title}</p>
      <div className="card__price">
        <div className="card__options">
          <p className="card__price-title">ЦЕНА:</p>
          <p className="card__price-value">{price}</p>
        </div>
        <button onClick={() => setIsPlus(!isPlus)}><img className="card__img-plus" src={isPlus ? "img/noplus.svg" :"img/plus.svg" } alt="" /></button>
      </div>
    </li>
  );
};

export default Card;
