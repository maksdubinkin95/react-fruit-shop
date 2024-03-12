import Card from "../../components/Card/Card";
import React from "react";
import { AppContext } from "../../App";
import Info from "../../components/Info/Info";
import { Link } from "react-router-dom";
import './Orders.scss'


const Orders = () => {
    const {orders, addToCart, contentCart, addToFavorites, favorites, isLoading } = React.useContext(AppContext);

    const renderItems = () => {
        const ordersList = orders.reduce((prev, arr) => [...prev, ...arr.items], []);
        return ordersList.map((fruit) => (
            <Card
                title={fruit.title}
                description={fruit.description}
                img={fruit.img}
                price={fruit.price}
                key={fruit.title}
                added={contentCart.some((obj) => obj.title === fruit.title)}
                addToFavorites={addToFavorites}
                addToCart={addToCart}
                favorited={favorites.some((obj) => obj.title === fruit.title)}
                isLoading={isLoading}
            />
        ));
    };
    return (
        <section className="orders">
            <div className="container">
                <div className="cards__header">
                    <h2 className="cards__header-title">Покупки</h2>
                </div>
                {orders.length ? (
                    <>
                        <ul className="cards__list">{renderItems()}</ul>
                    </>
                ) : (
                    <Link to="/">
                        <Info image="img/other/no-favorites.png" title="У вас нет!" description="С" button="Вернуться к фруктам"></Info>
                    </Link>
                )}
            </div>
        </section>
    );
};

export default Orders;
