import React, { useState } from "react";
import "./RatingCard.css";
import IconStar from "../../assets/images/icon-star.svg";

const RatingCard = ({ rating, setRating, reviewSubmitted }: any) => {
  const initialReviews = [
    {
      number: 1,
      isSelected: false,
    },
    {
      number: 2,
      isSelected: false,
    },
    {
      number: 3,
      isSelected: false,
    },
    {
      number: 4,
      isSelected: false,
    },
    {
      number: 5,
      isSelected: false,
    },
  ];
  const [reviews, setReviews] = useState(initialReviews);

  const updateReviews = (number: any) => {
    reviews.map((review) => (review.isSelected = false));

    let updatedReviews = reviews.map((review) => {
      if (review.number === number) {
        review.isSelected = !review.isSelected;
        setRating(review.number);
      }
      return review;
    });

    setReviews(updatedReviews);
  };

  const submitRate = (e: any) => {
    e.preventDefault();
    reviewSubmitted(true);
  };

  return (
    <div className='rating-card-container'>
      <div className='bg-transparent rating-card-star'>
        <img src={IconStar} alt='card star' />
      </div>
      <div className='rating-card-content'>
        <h4 className='rating-card-title'>How did we do?</h4>
        <p className='rating-card-paragraph'>
          Please let use know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
      </div>
      <div className='rating-card-rate'>
        <div className='rating-card-numbers'>
          {reviews.map(({ number, isSelected }: any) => {
            return (
              <span
                key={number}
                className={`bg-transparent ${isSelected && "active"}`}
                onClick={() => updateReviews(number)}>
                {number}
              </span>
            );
          })}
        </div>
        <button className='rating-card-submit-btn' onClick={submitRate}>
          SUBMIT
        </button>
      </div>
    </div>
  );
};

export default RatingCard;
