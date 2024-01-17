import Notification from '../Notification/Notification.jsx';
import { StatisticsUl } from './StatisticsStyles.js';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <h2>Statistics</h2>

      {total === 0 ? (
        <Notification message={'There is no feedback'} />
      ) : (
        <StatisticsUl>
          <li>Good: {good}</li>
          <li>Neutral: {neutral}</li>
          <li>Bad: {bad}</li>
          <li>Total: {total}</li>
          <li>Positive Feedback: {positivePercentage}%</li>
        </StatisticsUl>
      )}
    </>
  );
};

export default Statistics;
