import React, { useEffect, useState } from 'react';
import cs from 'classnames';
import './style.less';

export interface IRadioProps {
  value?: string;
  checked?: boolean;
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Radio: React.FC<IRadioProps> = (props) => {
  const {
    value,
    checked = false,
    onChange,
    disabled = false,
    children,
  } = props;
  const [isChecked, setIsChecked] = useState(checked);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(true);
    onChange?.(e);
  };
  useEffect(() => {
    setIsChecked(checked);
  }, [checked]);
  return (
    <label
      className="hexi-radio"
      style={{
        cursor: disabled ? 'not-allowed' : 'default',
      }}
    >
      <input
        type="radio"
        value={value}
        onChange={handleChange}
        checked={isChecked}
        disabled={disabled}
      />
      <span
        className={cs('hexi-radio-status', {
          'is-checked': isChecked,
          'is-disabled': disabled,
        })}
      ></span>
      <span
        className={cs('hexi-radio-text', {
          'is-disabled': disabled,
        })}
      >
        {children}
      </span>
    </label>
  );
};

Radio.displayName = 'Radio';
export default Radio;
