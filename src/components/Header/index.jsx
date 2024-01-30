import "./Header.scss";
import "../Card/Card.scss";
import React from "react";

const Header = () => {
  const [openSidebar, setOpenSidebar] = React.useState(false);

  const sidebarActive = () => {
    openSidebar ? setOpenSidebar(false) : setOpenSidebar(true);
    
  };

  return (
    <header className="page__header page-header">
      <div
        className={
          openSidebar
            ? "page-header__sidebar basket-sidebar active"
            : "page-header__sidebar basket-sidebar"
        }
      >
        <div className="card-sidebar__header">
          <h2 className="basket-sidebar__title">Корзина</h2>
          <img src="img/cancel.svg" alt="" onClick={sidebarActive}/>
        </div>
        <ul className="basket-sidebar__list">
          <li className="basket-sidebar__item card-sidebar">
            <div className="card-sidebar__img-fruit">
              <img src="img/fruits/orange.png" alt="" />
            </div>
            <div className="card-sidebar__text">
              <p className="card-sidebar__name">
                Мужские Кроссовки Nike Air Max 270
              </p>
              <div className="card-sidebar__price">
                <p className="card-sidebar__price-value">1 299 руб.</p>
                <img
                  className="card-sidebar__img-cancel"
                  src="img/cancel.svg"
                  alt=""
                />
              </div>
            </div>
          </li>
          <li className="basket-sidebar__item card-sidebar">
            <div className="card-sidebar__img-fruit">
              <img src="img/fruits/orange.png" alt="" />
            </div>
            <div className="card-sidebar__text">
              <p className="card-sidebar__name">
                Мужские Кроссовки Nike Air Max 270
              </p>
              <div className="card-sidebar__price">
                <p className="card-sidebar__price-value">1 299 руб.</p>
                <img
                  className="card-sidebar__img-cancel"
                  src="img/cancel.svg"
                  alt=""
                />
              </div>
            </div>
          </li>
          <li className="basket-sidebar__item card-sidebar">
            <div className="card-sidebar__img-fruit">
              <img src="img/fruits/orange.png" alt="" />
            </div>
            <div className="card-sidebar__text">
              <p className="card-sidebar__name">
                Мужские Кроссовки Nike Air Max 270
              </p>
              <div className="card-sidebar__price">
                <p className="card-sidebar__price-value">1 299 руб.</p>
                <img
                  className="card-sidebar__img-cancel"
                  src="img/cancel.svg"
                  alt=""
                />
              </div>
            </div>
          </li>
          <li className="basket-sidebar__item card-sidebar">
            <div className="card-sidebar__img-fruit">
              <img src="img/fruits/orange.png" alt="" />
            </div>
            <div className="card-sidebar__text">
              <p className="card-sidebar__name">
                Мужские Кроссовки Nike Air Max 270
              </p>
              <div className="card-sidebar__price">
                <p className="card-sidebar__price-value">1 299 руб.</p>
                <img
                  className="card-sidebar__img-cancel"
                  src="img/cancel.svg"
                  alt=""
                />
              </div>
            </div>
          </li>
          <li className="basket-sidebar__item card-sidebar">
            <div className="card-sidebar__img-fruit">
              <img src="img/fruits/orange.png" alt="" />
            </div>
            <div className="card-sidebar__text">
              <p className="card-sidebar__name">
                Мужские Кроссовки Nike Air Max 270
              </p>
              <div className="card-sidebar__price">
                <p className="card-sidebar__price-value">1 299 руб.</p>
                <img
                  className="card-sidebar__img-cancel"
                  src="img/cancel.svg"
                  alt=""
                />
              </div>
            </div>
          </li>
          <li className="basket-sidebar__item card-sidebar">
            <div className="card-sidebar__img-fruit">
              <img src="img/fruits/orange.png" alt="" />
            </div>
            <div className="card-sidebar__text">
              <p className="card-sidebar__name">
                Мужские Кроссовки Nike Air Max 270
              </p>
              <div className="card-sidebar__price">
                <p className="card-sidebar__price-value">1 299 руб.</p>
                <img
                  className="card-sidebar__img-cancel"
                  src="img/cancel.svg"
                  alt=""
                />
              </div>
            </div>
          </li>
          <li className="basket-sidebar__item card-sidebar">
            <div className="card-sidebar__img-fruit">
              <img src="img/fruits/orange.png" alt="" />
            </div>
            <div className="card-sidebar__text">
              <p className="card-sidebar__name">
                Мужские Кроссовки Nike Air Max 270
              </p>
              <div className="card-sidebar__price">
                <p className="card-sidebar__price-value">1 299 руб.</p>
                <img
                  className="card-sidebar__img-cancel"
                  src="img/cancel.svg"
                  alt=""
                />
              </div>
            </div>
          </li>
        </ul>
        <div className="basket-sidebar__total">
          <span>Итого:</span>
          <span></span>
          <span>21 498 руб.</span>
        </div>
        <div className="basket-sidebar__tax">
          <span>Налог 5%:</span>
          <span></span>
          <span>1074 руб.</span>
        </div>
        <a href="/" className="basket-sidebar__button">
          Оформить заказ
        </a>
      </div>
      <div className="container">
        <nav className="page-header__navigation main-navigation">
          <img className="logo" src="/img/logo.png" alt="img" />
          <div className="main-navigation__descriptor">
            <p className="main-navigation__title">СПЕЛАЯ ЛАВКА</p>
            <p className="main-navigation__description">Самые вкусные фрукты</p>
          </div>
          <ul className="main-navigation__list">
            <li className="main-navigation__item">
              <img src="/img/basket.svg" alt="img" />
              <a
                className="main-navigation__name"

                onClick={sidebarActive}
              >
                1205 руб.
              </a>
            </li>
            <li className="main-navigation__item">
              <img src="/img/heart.svg" alt="img" />
              <a className="main-navigation__name" href="/">
                Закладки
              </a>
            </li>
            <li className="main-navigation__item">
              <img src="/img/profile.svg" alt="img" />
              <a className="main-navigation__name" href="/">
                Профиль
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
