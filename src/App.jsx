import { useState } from "react";
import RatingCard from "./components/RatingCard";

function App() {
  const [selectedRating, setSelectedRating] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (rating) => {
    setSelectedRating(rating);
    setIsSubmitted(true);
    console.log(selectedRating);
  };

  return (
    <main>
      {!isSubmitted && <RatingCard onSubmit={handleSubmit} />}
      {isSubmitted && <h2>{`You chose ${selectedRating}`}</h2>}
    </main>
  );
}

export default App;
