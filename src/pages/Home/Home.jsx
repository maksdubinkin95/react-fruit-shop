import Card from "../../components/Card/Card";
import "./Home.scss";
import React from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../App";

const Home = () => {
    const [searchValue, setSearchValue] = React.useState("");
    const {addToCart, contentCart, addToFavorites, favorites, isLoading, fruits} = React.useContext(AppContext);
    const renderItems = () => {
        const filtredItems = fruits.filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()));
        if (isLoading) {
            return [...Array(20)].map((fruit) => <Card isLoading={isLoading} />);
        } else {
            return filtredItems.map((fruit) => (
                <Card
                    className={"te"}
                    title={fruit.title}
                    description={fruit.description}
                    img={fruit.img}
                    price={fruit.price}
                    key={fruit.title}
                    addToCart={addToCart}
                    added={contentCart.some((obj) => obj.title === fruit.title)}
                    addToFavorites={addToFavorites}
                    favorited={favorites.some((obj) => obj.title === fruit.title)}
                    isLoading={isLoading}
                    onPlus={true}
                    onFavorited={true}
                />
            ));
        }
    };
    return (
        <section className="cards">
            <div className="container">
                <div className="cards__header">
                    <div className="cards__wrapper">
                        <h2 className="cards__header-title">Все фрукты</h2>
                        <div className="cards__header-search">
                            <input className="cards__header-input" placeholder="Поиск..." type="text" onChange={(event) => setSearchValue(event.target.value)} value={searchValue} />
                            <button
                                className="cards__header-button"
                                onClick={() => {
                                    setSearchValue("");
                                }}
                            >
                                <img src="img/cancel.svg" alt="" />
                            </button>
                        </div>
                    </div>
                </div>
                <ul className="cards__list">{renderItems()}</ul>
            </div>
        </section>
    );
};

export default Home;
