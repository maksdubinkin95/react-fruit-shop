import Card from "../../components/Card/Card";
import React from "react";
import { AppContext } from "../../App";
import Info from "../../components/Info/Info";
import { Link } from "react-router-dom";

const Favorites = () => {
    const { addToCart, contentCart, fruits, addToFavorites, favorites, isLoading } = React.useContext(AppContext);
    const renderItems = () => {
        console.log(favorites);
        return favorites.map((fruit) => (
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
                onPlus={true}
                onFavorited={true}
            />
        ));
    };
    return (
        <section className="cards">
            <div className="container">
                <div className="cards__header">
                    <h2 className="cards__header-title">Любимые фрукты Саймона</h2>
                </div>
                {favorites.length ? (
                    <>
                        <ul className="cards__list">{renderItems()}</ul>
                    </>
                ) : (
                    <Link to="/">
                        <Info image="img/other/no-favorites.png" title="Выберите любимые фрукты Саймона" description="Нажмите на сердечко!" button="Вернуться к фруктам"></Info>
                    </Link>
                )}
            </div>
        </section>
    );
};

export default Favorites;
