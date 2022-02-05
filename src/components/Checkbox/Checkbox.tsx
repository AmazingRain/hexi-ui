import React, { ChangeEvent, useEffect, useState } from 'react';
import cs from 'classnames';
import './style.less';

export interface ICheckboxProps {
  value?: string;
  checked?: boolean;
  disabled?: boolean;
  indeterminate?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}
const Checkbox: React.FC<ICheckboxProps> = (props) => {
  const {
    value = '',
    checked = false,
    disabled = false,
    indeterminate = false,
    onChange,
    children,
  } = props;
  const [isCheck, setIsCheck] = useState(checked);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setIsCheck(!isCheck);
    onChange?.(e);
  };

  useEffect(() => {
    setIsCheck(checked);
  }, [checked]);

  return (
    <label className="hexi-checkbox">
      <input
        type="checkbox"
        value={value}
        checked={checked}
        disabled={disabled}
        onChange={handleChange}
      />
      <span
        className={cs('hexi-checkbox-status', {
          'is-disabled': disabled,
          'is-checked': isCheck,
          'is-indeterminate': indeterminate,
        })}
      ></span>
      <span
        className={cs('hexi-checkbox-text', {
          'is-disabled': disabled,
          'is-checked': isCheck,
        })}
      >
        {children}
      </span>
    </label>
  );
};

export default Checkbox;
