const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      {options.map((option, index) => {
        return (
          <button key={index} onClick={onLeaveFeedback}>
            {option}
          </button>
        );
      })}
    </>
  );
};

export default FeedbackOptions;
