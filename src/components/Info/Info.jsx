import React from "react";
import "./info.scss";
import Button from "../Button/Button";

const Info = ({ image, title, description, button, onClick }) => {
    return (
        <div className="info">
            <div className="info__wrapper">
                <img className="info__image" src={image} alt="" />
            </div>
            <h2 className="info__title">{title}</h2>
            <p className="info__description">{description}</p>
            <Button onClick={onClick} button={button}></Button>
        </div>
    );
};

export default Info;
