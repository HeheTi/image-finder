import { BUTTON_TYPE, type IButtonProps } from './Button.types';
import clsx from 'clsx';

import s from './Button.module.scss';

const Button = ({
  children,
  typeButton = BUTTON_TYPE.BUTTON,
  disabled,
  onClick,
  classNameButton,
}: IButtonProps) => {
  return (
    <button
      type={typeButton}
      disabled={disabled}
      onClick={onClick}
      className={clsx(s.button, classNameButton)}
    >
      {children}
    </button>
  );
};

export default Button;
