import React, { useState } from 'react';

import { Product } from '../../types/Product';

import './ProductCard.scss';

type Props = {
  product: Product;
}

export const ProductCard: React.FC<Props> = ({ product }) => {
  const { name, images, price, oldPrice, tag } = product;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAdditional, setShowAdditional] = useState(false);

  // Functions for displaying a slider and additional buttons when hovering
  const handleMouseEnter = () => {
    setTimeout(() => {
      setShowAdditional(true);
    }, 300);
  };

  const handleMouseLeave = () => {
    setTimeout(() => {
      setShowAdditional(false);
    }, 300);
  };

  // Functions for switching the slider
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="card" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="card__poster">
        <img
          src={images[currentIndex]} 
          alt={name}
          className="card__image"
        />

        {tag && <div className="card__tag">{tag}</div>}

        {showAdditional && <div className="card__navigation">
          <button className="card__prev-button" onClick={prevSlide}></button>
          <button className="card__next-button" onClick={nextSlide}></button>
        </div>}

        {showAdditional && <div className="actions visible">
          <button className="actions__btn actions__btn--add-to-favorites"></button>
          <button className="actions__btn actions__btn--add-to-bag"></button>
          <button className="actions__btn actions__btn--compare"></button>
        </div>}
      </div>

      <div className="card__description">
        <p className="card__name">{name}</p>

        <div className="card__price">
          {oldPrice && <p className="card__old-price">{oldPrice}</p>}

          <p className="card__current-price">{price}</p>
        </div>
      </div>
    </div>
  );
}
