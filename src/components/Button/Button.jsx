import css from './Button.module.css';
import PropTypes from 'prop-types';

export const Button = ({ onClick }) => {
  return (
    <button type="button" className={css.Button} onClick={onClick}>
      Loard more
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
