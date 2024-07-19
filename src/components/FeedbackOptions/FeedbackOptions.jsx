import css from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';
export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={css.container}>
      {options.map(option => (
        <button
          className={css.animateButtons}
          key={option}
          onClick={() => {
            onLeaveFeedback(option);
          }}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.oneOf(['good', 'neutral', 'bad']))
    .isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
