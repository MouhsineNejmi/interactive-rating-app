import React, { useState } from "react";
import "./App.css";
import RatingCard from "./components/RatingCard/RatingCard";
import ThanksCard from "./components/ThanksCard/ThanksCard";

const App = () => {
  const [submitted, setSubmitted] = useState(false);
  const [rating, setRating] = useState(0);

  return (
    <div className='card-container'>
      {submitted ? (
        <ThanksCard rating={rating} />
      ) : (
        <RatingCard
          rating={rating}
          setRating={setRating}
          reviewSubmitted={setSubmitted}
        />
      )}
    </div>
  );
};

export default App;
