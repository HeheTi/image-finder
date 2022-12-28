import PropTypes from 'prop-types';
import css from './Button.module.css';

const Button = ({ isLoading, onClick }) => {
  return (
    <button className={css.button} disabled={isLoading} onClick={onClick}>
      Load More
    </button>
  );
};

Button.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
