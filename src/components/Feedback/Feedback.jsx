import PropTypes from 'prop-types';
import css from './Feedback.module.css';

const Feedback = ({ feedback, totalFeedback, positiveFeedbackPercentage }) => (
  <div className={css.container}>
    <h2 className={css.header}>Feedback Statistics</h2>
    <p className={css.stat}>Good: {feedback.good}</p>
    <p className={css.stat}>Neutral: {feedback.neutral}</p>
    <p className={css.stat}>Bad: {feedback.bad}</p>
    <p className={css.stat}>Total Feedback: {totalFeedback}</p>
    <p className={css.stat}>Positive Feedback: {positiveFeedbackPercentage}%</p>
  </div>
);

Feedback.propTypes = {
  feedback: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
  totalFeedback: PropTypes.number.isRequired,
  positiveFeedbackPercentage: PropTypes.number.isRequired,
};

export default Feedback;
