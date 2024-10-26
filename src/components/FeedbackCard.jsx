import PropTypes from "prop-types";
import styles from "./FeedbackCard.module.css";

const FeedbackCard = ({ rating }) => {
  return (
    <div className={`card ${styles.center}`} aria-live='polite'>
      <div className={styles.image}>
        <img src='images/illustration-thank-you.svg' alt='' />
      </div>

      <p className={styles.rating}>You selected {rating} out of 5</p>
      <h2 className={styles.title}>Thank you!</h2>
      <p className={styles.description}>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don&apos;t hesitate to get in touch!
      </p>
    </div>
  );
};

FeedbackCard.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default FeedbackCard;
