import { useState } from 'react';

const Card = (card) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  // console.log(card);

  const { img, title, description } = card;

  return (
    <article className="card">
      <img src={img} alt={title} />
      <div className="card-info">
        <h3>{title}</h3>
        <p>{description.slice(0, 45)}...</p>
        <div className="btn-container">
          <button className={`btn ${isLiked && 'liked'}`} onClick={handleLike}>
            {isLiked ? 'liked ❤' : 'like ❤'}
          </button>
        </div>
      </div>
    </article>
  );
};
export default Card;
