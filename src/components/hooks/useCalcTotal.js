import React from "react";
import { AppContext } from "../../App";


export const useCalcTotal = () => {
    const { contentCart, setContentCart } = React.useContext(AppContext);
    const totalPrice = contentCart.reduce((sum, obj) => parseInt(sum) + parseInt(obj.price), 0);
    return { contentCart, totalPrice, setContentCart };
};
