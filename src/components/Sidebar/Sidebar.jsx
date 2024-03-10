import "./Sidebar.scss";
import React from "react";
import axios from "axios";
import Card from "../Card/Card";
import Info from "../Info/Info";
import { AppContext } from "../../App";
import { useCalcTotal } from "../hooks/useCalcTotal";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const Sidebar = ({ setIsOpenSidebar, removeFromCart }) => {
    const { contentCart, isOrderComplete, setContentCart, setIsOrderComplete } = React.useContext(AppContext);
    const [orderId, setOrderId] = React.useState(null);
    const [isLoadingOrder, setIsLoadingOrder] = React.useState(false);
    const {totalPrice} = useCalcTotal();

    const orderComplete = async () => {
        try {
            setIsLoadingOrder(true);
            const { data } = await axios.post("https://65dc8989e7edadead7ec4a3e.mockapi.io/orders", { items: contentCart });
            for (let i = 0; i < contentCart.length; i++) {
                const item = contentCart[i];
                await axios.delete("https://65b278df9bfb12f6eafddb92.mockapi.io/cart/" + item.id);
                await delay(1000);
            }
            setOrderId(data.id);
            setIsOrderComplete(true);
            setContentCart([]);
            setIsLoadingOrder(false);
        } catch (error) {
            console.error("Не удалось создать заказ", error);
            alert("Не удалось создать заказ. Подробности в консоли.");
        }
    };
    return (
        <div className="cart">
            <div className="cart__header">
                <h2 className="cart__title">Корзина</h2>
                <img src="img/cancel.svg" alt="" onClick={setIsOpenSidebar} />
            </div>
            {contentCart.length ? (
                <>
                    <ul className="cart__list">
                        {contentCart.map((item, index) => {
                            return <Card img={item.img} description={item.description} title={item.title} price={item.price} removeFromCart={removeFromCart} id={item.id}></Card>;
                        })}
                    </ul>
                    <div className="cart__price">
                        <span>Стоимость фруктов:</span>
                        <span></span>
                        <span>{totalPrice} руб.</span>
                    </div>
                    <div className="cart__tax">
                        <span>Доставка:</span>
                        <span></span>
                        <span>{Math.trunc(totalPrice * 0.2)} руб.</span>
                    </div>
                    <div className="cart__total">
                        <span>Итого:</span>
                        <span></span>
                        <span>{Math.trunc(totalPrice + totalPrice * 0.2)} руб.</span>
                    </div>
                    <button href="/" className="cart__button" onClick={orderComplete} disabled={isLoadingOrder}>
                        Оформить заказ
                    </button>
                </>
            ) : isOrderComplete ? (
                <Info
                    image="img/complete-order.png"
                    title="Заказ успешно оформлен"
                    description={`Ваш заказ №${orderId} скоро будет передан курьерской службе.`}
                    button="Вернуться к фруктам"
                    onClick={setIsOpenSidebar}
                ></Info>
            ) : (
                <Info image="img/emptyCart.svg" title="Корзина пустая" description="Добавьте фрукты, чтобы сделать заказ" button="Вернуться назад" onClick={setIsOpenSidebar}></Info>
            )}
        </div>
    );
};

export default Sidebar;
