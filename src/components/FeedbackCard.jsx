import PropTypes from "prop-types";

const FeedbackCard = ({ rating }) => {
  return (
    <div>
      <img
        src='images/illustration-thank-you.svg'
        alt='Thank you illustration'
      />
      <p>You selected {rating} out of 5</p>
      <h2>Thank you!</h2>
      <p>
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
