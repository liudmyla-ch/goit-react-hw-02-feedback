import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <h2 className={styles.title}>Statistics</h2>
      <ul className={styles.list}>
        <li className={styles.item}>
          <span className={styles.label}>Good:</span>
          <span className={styles.value}>{good}</span>
        </li>
        <li className={styles.item}>
          <span className={styles.label}>Neutral:</span>
          <span className={styles.value}>{neutral}</span>
        </li>
        <li className={styles.item}>
          <span className={styles.label}>Bad:</span>
          <span className={styles.value}>{bad}</span>
        </li>
        <li className={styles.item}>
          <span className={styles.label}>Total:</span>
          <span className={styles.value}>{total}</span>
        </li>
        <li className={styles.item}>
          <span className={styles.label}>Positive feedback:</span>
          <span className={styles.value}>{positivePercentage}%</span>
        </li>
      </ul>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
