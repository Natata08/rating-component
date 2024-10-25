const RatingCard = () => {
  const ratings = [1, 2, 3, 4, 5];
  return (
    <div>
      <div>
        <img src='/images/icon-star.svg' alt='Star icon' />
      </div>
      <h2>How did we do?</h2>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <form>
        <fieldset>
          <legend>Rate your experience</legend>
          {ratings.map((rating) => (
            <label key={`rating-${rating}`}>
              <input type='radio' name='rating' value={rating} />
              <span>{rating}</span>
            </label>
          ))}
        </fieldset>

        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default RatingCard;
