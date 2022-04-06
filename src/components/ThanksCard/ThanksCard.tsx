import React from "react";
import "./ThanksCard.css";
import IllustrationThankYou from "../../assets/images/illustration-thank-you.svg";

const ThanksCard = ({ rating }: any) => {
  return (
    <div className='thanks-card-container'>
      <div className='thanks-card-illustration'>
        <img src={IllustrationThankYou} alt='submitted review thank you' />
      </div>
      <div className='thanks-card-review'>
        <p>You selected {rating} out of 5</p>
      </div>
      <div className='thanks-card-content'>
        <h3>Thank You!</h3>
        <p>
          We appreciate you taking the time to give a rating. If you ever need
          more support, don't hesitate to get in touch.
        </p>
      </div>
    </div>
  );
};

export default ThanksCard;
