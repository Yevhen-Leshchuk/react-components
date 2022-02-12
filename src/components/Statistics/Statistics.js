import PropTypes from 'prop-types';
import s from './Statistics.module.css';

function getRandomColor() {
  const random = function () {
    return Math.floor(Math.random() * 255);
  };
  return 'rgb(' + random() + ',' + random() + ',' + random() + ')';
}

export const Statistics = ({ title, stats }) => {
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>{title}</h2>}

      <ul className={s.statsList}>
        {stats.map(stat => (
          <li
            key={stat.id}
            className={s.item}
            style={{ backgroundColor: getRandomColor() }}
          >
            <span className={s.label}>{stat.label}</span>
            <span className={s.percentage}>{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      percentage: PropTypes.number,
      id: PropTypes.string,
    })
  ).isRequired,
};
