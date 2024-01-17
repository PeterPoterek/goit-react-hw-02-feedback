import { useState } from 'react';

import FeedbackOptions from './FeedbackOptions/FeedbackOptions.jsx';
import Section from './Section/Section.jsx';
import Statistics from './Statistics/Statistics.jsx';

export const App = () => {
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleStateChange = e => {
    const buttonClicked = e.target.textContent;

    setState(prevState => {
      switch (buttonClicked) {
        case 'Good':
          return { ...prevState, good: prevState.good + 1 };
        case 'Neutral':
          return { ...prevState, neutral: prevState.neutral + 1 };
        case 'Bad':
          return { ...prevState, bad: prevState.bad + 1 };
        default:
          console.error('Error');
          return prevState;
      }
    });
  };
  const [total, setTotal] = useState(0);

  return (
    <>
      <Section title={'Please leave feedback'} />
      <FeedbackOptions
        options={['Good', 'Neutral', 'Bad']}
        onLeaveFeedback={handleStateChange}
      />
      <Statistics
        good={state.good}
        neutral={state.neutral}
        bad={state.bad}
        total={total}
        positivePercentage={0}
      />
    </>
  );
};
