import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import RatingCard from "./components/RatingCard";
import FeedbackCard from "./components/FeedbackCard";

function App() {
  const [selectedRating, setSelectedRating] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const cardVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 },
  };

  const handleSubmit = () => {
    if (selectedRating) {
      setIsSubmitted(true);
    }
  };

  return (
    <main className='container'>
      <AnimatePresence mode='wait'>
        {!isSubmitted && (
          <motion.div
            key='rating'
            variants={cardVariants}
            initial='initial'
            animate='animate'
            exit='exit'
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <RatingCard
              onSubmit={handleSubmit}
              selectedRating={selectedRating}
              setSelectedRating={setSelectedRating}
            />
          </motion.div>
        )}
        {isSubmitted && (
          <motion.div
            key='feedback'
            variants={cardVariants}
            initial='initial'
            animate='animate'
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <FeedbackCard rating={selectedRating} />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

export default App;
