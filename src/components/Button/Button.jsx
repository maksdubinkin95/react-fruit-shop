import React from "react";
import "./Button.scss"

const Button = ({button, onClick}) => {
    return (
        <button class="button" onClick={onClick}>
            {button}
        </button>
    );
};

export default Button;
