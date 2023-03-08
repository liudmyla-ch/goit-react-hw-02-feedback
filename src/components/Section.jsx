import PropTypes from 'prop-types';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Notification from './Notification';
import styles from './Section.module.css';

const Section = ({
  title,
  good,
  neutral,
  bad,
  total,
  positivePercentage,
  options,
    onLeaveFeedback,
  message,
}) => {
  return (
    <div className={styles.section}>
      <h1>{title}</h1>
      <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback} />
      <div className={styles.statistics}>
        {total >
          0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          ):(<Notification message="There is no feedback" />)}
      </div>
    </div>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
  message: PropTypes.string
};

export default Section;
