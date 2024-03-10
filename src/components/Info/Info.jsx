import React from "react";
import "./info.scss";

const Info = ({ image, title, description, button, onClick }) => {
    return (
        <div className="info">
            <div className="info__wrapper">
                <img className="info__image" src={image} alt="" />
            </div>
            <h2 className="info__title">{title}</h2>
            <p className="info__description">{description}</p>
            <button className="info__button" onClick={onClick}>{button}</button>
        </div>
    );
};

export default Info;
