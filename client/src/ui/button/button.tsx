import React from 'react';
import styles from './button.module.scss';
import classNames from 'classnames';

export interface ButtonProps {
  text: string;
  isDisable?: boolean;
  onClick: () => void;
}

export const Button: React.FC<ButtonProps> = ({ text, isDisable = false, onClick }) => {
  const classes = classNames({
    [`${styles['button']}`]: true,
    [`${styles['button__disable']}`]: isDisable,
  });

  return (
    <button disabled={isDisable} className={classes} onClick={onClick}>
      {text}
    </button>
  );
};
