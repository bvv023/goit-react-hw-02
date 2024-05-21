import PropTypes from 'prop-types';
import css from './Options.module.css';

const Options = ({ onLeaveFeedback, onReset, totalFeedback }) => (
  <div className={css.options}>
    <button className={css.button} onClick={() => onLeaveFeedback('good')}>Good</button>
    <button className={css.button} onClick={() => onLeaveFeedback('neutral')}>Neutral</button>
    <button className={css.button} onClick={() => onLeaveFeedback('bad')}>Bad</button>
    {totalFeedback > 0 && (
      <button className={css.button} onClick={onReset}>Reset</button>
    )}
  </div>
);

Options.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
  totalFeedback: PropTypes.number.isRequired,
};

export default Options;
