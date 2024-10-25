import { useState } from "react";
import RatingCard from "./components/RatingCard";
import FeedbackCard from "./components/FeedbackCard";

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
      {isSubmitted && <FeedbackCard rating={selectedRating} />}
    </main>
  );
}

export default App;
