import React from "react";
import "./Button.scss";
import { Link } from "react-router-dom";

const Button = ({ button, onClick, to }) => {
    return (
        <Link to={to}>
            <button class="button" onClick={onClick}>
                {button}
            </button>
        </Link>
    );
};

export default Button;
