import "./App.scss";

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Orders from "./pages/Orders/Orders";
import Favorites from "./pages/Favorites/Favorites";

import Poster from "./components/Poster/Poster";
import Header from "./components/Header/Header";

import axios from "axios";

export const AppContext = React.createContext({});

function App() {
    const [contentCart, setContentCart] = React.useState([]);
    const [fruits, setFruits] = React.useState([]);
    const [favorites, setFavorites] = React.useState([]);
    const [orders, setOrders] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);
    const [isOrderComplete, setIsOrderComplete] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    React.useEffect(() => {
        async function fetchData() {
            try {
                const [cartResponseCart, cardResponseFruits, cardResponseFavorites, cardResponseOrders] = await Promise.all([
                    axios.get("https://65b278df9bfb12f6eafddb92.mockapi.io/cart"),
                    axios.get("https://65b278df9bfb12f6eafddb92.mockapi.io/fruits"),
                    axios.get("https://65dc8989e7edadead7ec4a3e.mockapi.io/favorites"),
                    axios.get("https://65dc8989e7edadead7ec4a3e.mockapi.io/orders"),
                ]);

                setContentCart(cartResponseCart.data);
                setFruits(cardResponseFruits.data);
                setFavorites(cardResponseFavorites.data);
                setOrders(cardResponseOrders.data);
                setIsLoading(false);
            } catch (error) {
                alert("Произошла ошибка при запросе данных с сервера");
                console.error(error);
            }
        }
        fetchData();
    }, []);

    const addToFavorites = async (obj) => {
        try {
            setLoading(true);
            console.log(loading, "loading стал true");
            if (favorites.find((item) => item.title === obj.title)) {
                const response = await axios.get("https://65dc8989e7edadead7ec4a3e.mockapi.io/favorites");
                const favoritesId = response.data.find((item) => item.title === obj.title).id;
                const favoritesTitle = response.data.find((item) => item.title === obj.title).title;
                removeFromFavorites(favoritesId, favoritesTitle);
            } else {
                const response = await axios.post("https://65dc8989e7edadead7ec4a3e.mockapi.io/favorites", obj);
                setFavorites((prev) => [...prev, response.data]);
            }
        } catch (error) {
            alert("Произошла ошибка c избранными товарами");
            console.error(error);
        } finally {
            setLoading(false);
        }
    };
    const removeFromFavorites = (favoritesId, title) => {
        try {
            axios.delete(`https://65dc8989e7edadead7ec4a3e.mockapi.io/favorites/${favoritesId}`);
            setFavorites((prev) => prev.filter((item) => item.title !== title));
        } catch (error) {
            alert("Произошла ошибка c удалением избранных товаров");
            console.error(error);
        }
    };

    const addToCart = async (obj) => {

        try {
            setLoading(true);
            if (contentCart.find((item) => item.title === obj.title)) {
                const response = await axios.get("https://65b278df9bfb12f6eafddb92.mockapi.io/cart");
                const id = response.data.find((item) => item.title === obj.title).id;
                await removeFromCart(id);
            } else {
                const resp = await axios.post("https://65b278df9bfb12f6eafddb92.mockapi.io/cart", obj);
                await setContentCart((prev) => [...prev, resp.data]);
            }
        } catch (error) {
            alert("Произошла ошибка c добавлением в корзину");
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const removeFromCart = async (id) => {
        try {
            await axios.delete(`https://65b278df9bfb12f6eafddb92.mockapi.io/cart/${id}`);
            setContentCart((prev) => prev.filter((item) => item.id !== id));
        } catch (error) {
            alert("Произошла ошибка c удалением из корзины");
            console.error(error);
        }
    };


    return (
        <>
            <BrowserRouter>
                <AppContext.Provider
                    value={{
                        loading,
                        orders,
                        isOrderComplete,
                        setIsOrderComplete,
                        fruits,
                        contentCart,
                        addToCart,
                        removeFromCart,
                        setContentCart,
                        addToFavorites,
                        favorites,
                        isLoading,
                        removeFromCart
                    }}
                >
                    <Header contentCart={contentCart} addToCart={addToCart} removeFromCart={removeFromCart} setContentCart={setContentCart}></Header>
                    <Poster></Poster>
                    <Routes>
                        <Route path="/" element={<Home></Home>}></Route>
                        <Route path="/favorites" element={<Favorites></Favorites>}></Route>
                        <Route path="/orders" element={<Orders></Orders>}></Route>
                    </Routes>
                </AppContext.Provider>
            </BrowserRouter>
        </>
    );
}

export default App;
