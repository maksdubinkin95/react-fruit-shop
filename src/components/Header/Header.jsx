import Sidebar from "../Sidebar/Sidebar";

import "./Header.scss";
import "../Card/Card.scss";
import React from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../App";
import { useCalcTotal } from "../hooks/useCalcTotal";

const Header = () => {
    const [isOpenSidebar, setIsOpenSidebar] = React.useState(false);
    const { totalPrice } = useCalcTotal();
    const { contentCart, addToCart, removeFromCart } = React.useContext(AppContext);
    return (
        <header className="header">
            {isOpenSidebar ? <Sidebar setIsOpenSidebar={() => setIsOpenSidebar(!isOpenSidebar)} contentCart={contentCart} addToCart={addToCart} removeFromCart={removeFromCart} setContentCart={setIsOpenSidebar}></Sidebar> : undefined}
            <div className="container">
                <nav className="header__navigation main-navigation">
                    <Link class="header__logo-wrapper" to="/">
                        <img className="logo" src="/img/logo.png" alt="Логотип" />
                        <div className="main-navigation__descriptor">
                            <p className="main-navigation__title">Спелая лавка</p>
                            <p className="main-navigation__description">Вкусные фрукты</p>
                        </div>
                    </Link>
                    <ul className="main-navigation__list">
                        <li className="main-navigation__item" onClick={() => setIsOpenSidebar(!isOpenSidebar)}>
                            <img src="/img/basket.svg" alt="img" />
                            <a className="main-navigation__name" >
                                {totalPrice} руб.
                            </a>
                        </li>
                        <li className="main-navigation__item">
                            <Link to="/favorites">
                                <img src="/img/heart.svg" alt="img" />
                                <span className="main-navigation__name" href="/">
                                    Закладки
                                </span>
                            </Link>
                        </li>
                        <li className="main-navigation__item">
                            <Link class="header__orders" to="orders">
                                <img src="/img/profile.svg" alt="img" />
                                <a className="main-navigation__name" href="/">
                                    Профиль
                                </a>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
