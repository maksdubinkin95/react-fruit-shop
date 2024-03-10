import React from "react";
import "./Card.scss";
import ContentLoader from "react-content-loader";
import App, { AppContext } from "../../App";

const Card = ({ description, onPlus, onFavorited, title, img, price, addToCart, added, removeFromCart, addToFavorites, favorited, id, isLoading }) => {
    const [isLiked, setIsLiked] = React.useState(favorited);
    const [isAdded, setIsAdded] = React.useState(added);
    const { contentCart, loading } = React.useContext(AppContext);

    const isItemAdded = (title) => {
        return contentCart.some((obj) => obj.title === title);
    };

    return isLoading ? (
        // return true ? (
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
                <button disabled={loading} className="card__button-like" onClick={() => setIsLiked(!isLiked)}>
                    {onFavorited && <img className="card__image-like" src={isLiked ? "img/like.svg" : "img/nolike.svg"} onClick={() => addToFavorites({ title, img, price, description })} alt="" />}
                </button>
                <img className="card__image-fruit" src={img} alt="" />
                <div className="card__body">
                    <h4 className="card__title">{title}</h4>
                    <p className="card__description">{description}</p>
                    <div className="card__price">
                        <div className="card__price-inner">
                            <p className="card__price-value">{price}</p>
                        </div>
                        <button disabled={loading} className="card__button-plus" onClick={() => setIsAdded(!isAdded)}>
                            {onPlus && <img className="card__image-plus" src={isItemAdded(title) ? "img/noplus.svg" : "img/plus.svg"} alt="" onClick={() => addToCart({ title, img, price, addToCart, description })} />}
                            {/* {onPlus && <div className="card__svg-wrapper" onClick={() => addToCart({ title, img, price, addToCart, description })}>
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    {isItemAdded(title) ? (
                                        <path
                                            d="M10.6653 5.13122H7.20214V1.66821C7.20214 0.332846 5.13114 0.332846 5.13114 1.66821V5.13122H1.668C0.332935 5.13122 0.332935 7.20215 1.668 7.20215H5.13114V10.6652C5.13114 12.0005 7.20214 12.0005 7.20214 10.6652V7.20215H10.6653C12.0005 7.20215 12.0005 5.13122 10.6653 5.13122Z"
                                            fill="#D3D3D3"
                                        />
                                    ) : (
                                        <path
                                            d="M10.6653 5.13122H7.20214V1.66821C7.20214 0.332846 5.13114 0.332846 5.13114 1.66821V5.13122H1.668C0.332935 5.13122 0.332935 7.20215 1.668 7.20215H5.13114V10.6652C5.13114 12.0005 7.20214 12.0005 7.20214 10.6652V7.20215H10.6653C12.0005 7.20215 12.0005 5.13122 10.6653 5.13122Z"
                                            fill="#D3D3D3"
                                        />
                                    )}
                                </svg>
                            </div>} */}
                            <img
                                className="card__image-cancel"
                                src="img/cancel.svg"
                                alt=""
                                onClick={() => {
                                    setIsAdded(false);
                                    removeFromCart(id);
                                }}
                            />
                        </button>
                    </div>
                </div>
            </li>
        </>
    );
};

export default Card;
