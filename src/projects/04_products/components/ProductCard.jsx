import { useState } from 'react';

const Card = ({ setWishlistIds, ...product }) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleWishlist = (id) => {
    setIsLiked(!isLiked);
    setWishlistIds((prevIds) => {
      if (!isLiked) {
        return [...prevIds, id];
      } else {
        return prevIds.filter((idItem) => idItem !== id);
      }
    });
  };

  const getOriginalPrice = (price, discountPercentage) => {
    return Math.round(((price * 100) / (100 - discountPercentage)).toFixed(2));
  };

  const {
    id,
    thumbnail: img,
    title,
    brand,
    price,
    availabilityStatus,
    rating,
    discountPercentage,
  } = product;

  return (
    <article className="card product-card">
      <img src={img} alt={title} />
      <div className="card-info">
        <h3>{title}</h3>
        <div className="brand">
          <span>From: </span>
          <span>
            <strong>{brand}</strong>
          </span>
        </div>
        <div className="ratings">
          <span className="rating">{rating} ⭐</span>
          <span className="availabilityStatus">{availabilityStatus} </span>
        </div>
        <span className="special-price">Special price</span>
        <div className="price-tags">
          <span className="price">${price}</span>
          <span className="original-price">
            ${getOriginalPrice(price, discountPercentage)}
          </span>
          <span className="discountPercentage">{discountPercentage}%</span>
        </div>
        <div className="btn-container">
          <span>Wishlist </span>
          <button
            className={`btn ${isLiked && 'liked'}`}
            onClick={() => handleWishlist(id)}
          >
            ❤
          </button>
        </div>
      </div>
    </article>
  );
};
export default Card;
