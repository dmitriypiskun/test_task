import classNames from 'classnames';
import React from 'react';
import styles from './input-number.module.scss';

export interface InputNumberProps {
  value?: number;
  min?: number;
  max?: number;
  isDisabled?: boolean;
  isError?: boolean;
  onChange: (value: number) => void;
}

export const InputNumber: React.FC<InputNumberProps> = ({
  value,
  min = 0,
  max = 100,
  isDisabled = false,
  isError = false,
  onChange,
}) => {
  const classes = classNames({
    [`${styles['container']}`]: true,
    [`${styles['container__error']}`]: isError,
  });

  return (
    <input
      type="number"
      min={min}
      max={max}
      value={value}
      disabled={isDisabled}
      className={classes}
      onChange={e => onChange(Number(e.target.value))}
    />
  );
};
