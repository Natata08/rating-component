import styles from "./RatingCard.module.css";

const RatingCard = () => {
  const ratings = [1, 2, 3, 4, 5];
  return (
    <div className={styles.card}>
      <div className={styles.starIcon}>
        <img src='/images/icon-star.svg' alt='Star icon' />
      </div>
      <h2 className={styles.title}>How did we do?</h2>
      <p className={styles.description}>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <form>
        <fieldset className={styles.ratingFieldset}>
          <legend className='srOnly'>Rate your experience</legend>
          {ratings.map((rating) => (
            <label key={`rating-${rating}`} className={styles.ratingLabel}>
              <input
                type='radio'
                name='rating'
                value={rating}
                className={styles.ratingInput}
              />
              <span className={styles.ratingButton}>{rating}</span>
            </label>
          ))}
        </fieldset>

        <button type='submit' className={styles.submitButton}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default RatingCard;
