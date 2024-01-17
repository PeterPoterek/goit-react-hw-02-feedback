import {
  FeedbackOptionsContainer,
  FeedbackButton,
} from './FeedbackOptionsStyles';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <FeedbackOptionsContainer>
      {options.map((option, index) => {
        return (
          <FeedbackButton key={index} onClick={onLeaveFeedback}>
            {option}
          </FeedbackButton>
        );
      })}
    </FeedbackOptionsContainer>
  );
};

export default FeedbackOptions;
