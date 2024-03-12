import React from "react";
import "./Card.scss";
import ContentLoader from "react-content-loader";
import { AppContext } from "../../App";
import ButtonAdded from "../Buttons/ButtonAdded";
import ButtonNotAdded from "../Buttons/ButtonNotAdded";
import ButtonCancel from "../Buttons/ButtonCancel";
import ButtonFavorite from "../Buttons/ButtonFavorite";
import ButtonNotFavorite from "../Buttons/ButtonNotFavorite";

const Card = ({ description, onPlus, onFavorited, title, img, price, removeFromCart, addToFavorites, favorited, id, isLoading }) => {
    const [isLiked, setIsLiked] = React.useState(favorited);
    const { contentCart, loading, addToCart } = React.useContext(AppContext);

    const handleAddToCart = async (obj) => {
        try {
            await addToCart(obj);
        } catch (error) {
            console.log(error);
        }
    };
    const isItemAdded = (title) => {
        return contentCart.some((obj) => obj.title === title);
    };

    return isLoading ? (
        <ContentLoader class="card__skeleton" speed={2} width={"100%"} height={341} viewBox="0 0 100% 341" backgroundColor="#ebebeb" foregroundColor="#ffffff">
            <rect x="0" y="0" rx="10" ry="10" width="33" height="33" />
            <rect x="0" y="40" rx="10" ry="10" width="100%" height="130" />
            <rect x="0" y="180" rx="10" ry="10" width="100%" height="18" />
            <rect x="0" y="205" rx="10" ry="10" width="100%" height="35" />

            <rect x="0" y="255" rx="10" ry="10" width="70" height="18" />
            <rect x="calc(100% - 33px)" y="calc(100% - 33px)" rx="10" ry="10" width="33" height="33" />
        </ContentLoader>
    ) : (
        <>
            <li className="cards__item card">
                {onFavorited &&
                    (isLiked ? (
                        <ButtonFavorite disabled={loading} title={title} img={img} price={price} description={description} addToFavorites={addToFavorites} isLiked={isLiked} setIsLiked={setIsLiked}></ButtonFavorite>
                    ) : (
                        <ButtonNotFavorite disabled={loading} title={title} img={img} price={price} description={description} addToFavorites={addToFavorites} isLiked={isLiked} setIsLiked={setIsLiked}></ButtonNotFavorite>
                    ))}
                <img className="card__image-fruit" src={img} alt="" />
                <div className="card__body">
                    <h4 className="card__title">{title}</h4>
                    <p className="card__description">{description}</p>
                    <div className="card__price">
                        <div className="card__price-inner">
                            <p className="card__price-value">{price}</p>
                        </div>
                        {onPlus ? (
                            isItemAdded(title) ? (
                                <ButtonNotAdded disabled={loading} title={title} img={img} price={price} description={description} handleAddToCart={handleAddToCart}></ButtonNotAdded>
                            ) : (
                                <ButtonAdded disabled={loading} title={title} img={img} price={price} description={description} handleAddToCart={handleAddToCart}></ButtonAdded>
                            )
                        ) : (
                            <ButtonCancel title={title} img={img} price={price} description={description} handleAddToCart={handleAddToCart} removeFromCart={removeFromCart} id={id}></ButtonCancel>
                        )}
                    </div>
                </div>
            </li>
        </>
    );
};

export default Card;
