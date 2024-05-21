import PropTypes from 'prop-types';
import css from './Feedback.module.css';

const Feedback = ({ good, neutral, bad, total, positive }) => (
  <div className={css.feedback}>
    <p className={css.feedbackItem}>Good: {good}</p>
    <p className={css.feedbackItem}>Neutral: {neutral}</p>
    <p className={css.feedbackItem}>Bad: {bad}</p>
    <p className={css.feedbackItem}>Total: {total}</p>
    <p className={css.feedbackItem}>Positive: {positive}%</p>
  </div>
);

Feedback.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positive: PropTypes.number.isRequired,
};

export default Feedback;
