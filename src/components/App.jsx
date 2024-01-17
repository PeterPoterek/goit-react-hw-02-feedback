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

  return (
    <>
      <Section title={'Please leave feedback'} />
      <FeedbackOptions />
      <Statistics />
    </>
  );
};
