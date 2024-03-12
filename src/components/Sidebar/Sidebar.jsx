import "./Sidebar.scss";
import React from "react";
import axios from "axios";
import Card from "../Card/Card";
import Info from "../Info/Info";
import { AppContext } from "../../App";
import { useCalcTotal } from "../hooks/useCalcTotal";
import Button from "../Button/Button";

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
                <button className="card__button button-added">
                    <div
                        className="button-added--cancel"
                        onClick={setIsOpenSidebar}
                    >
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M9.0799 7.61553L6.6311 5.16673L9.07982 2.71801C10.0241 1.77376 8.55964 0.309342 7.6154 1.25359L5.16668 3.70231L2.71787 1.2535C1.77384 0.309466 0.309467 1.77384 1.2535 2.71787L3.70231 5.16668L1.25359 7.61539C0.309343 8.55964 1.77376 10.0241 2.71801 9.07982L5.16673 6.6311L7.61553 9.0799C8.55969 10.0241 10.0241 8.55969 9.0799 7.61553Z"
                                fill="#B5B5B5"
                            />
                        </svg>
                    </div>
                </button>
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
                        <span>{totalPrice} ₽</span>
                    </div>
                    <div className="cart__tax">
                        <span>Доставка:</span>
                        <span></span>
                        <span>{Math.trunc(totalPrice * 0.2)} ₽</span>
                    </div>
                    <div className="cart__total">
                        <span>Итого:</span>
                        <span></span>
                        <span>{Math.trunc(totalPrice + totalPrice * 0.2)} ₽</span>
                    </div>
                    <button href="/" className="cart__button" onClick={orderComplete} disabled={isLoadingOrder}>
                        Оформить заказ
                    </button>
                </>
            ) : isOrderComplete ? (
                <Info
                    image="img/other/complete-order.png"
                    title="Спасибо за заказ!"
                    description={`Заказ №${orderId} скоро отправится к Саймону!`}
                    button="Вернуться к фруктам"
                    onClick={setIsOpenSidebar}
                ></Info>
            ) : (
                <Info image="img/other/emptyCart.png" title="Корзина совсем пустая!" description="Добавьте фрукты, чтобы накормить Саймона" button="Вернуться назад" onClick={setIsOpenSidebar}></Info>
            )}
        </div>
    );
};

export default Sidebar;
