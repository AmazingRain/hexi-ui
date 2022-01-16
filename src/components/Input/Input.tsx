import React, {
  ChangeEvent,
  InputHTMLAttributes,
  ReactNode,
  useState,
} from 'react';
import cs from 'classnames';
import './style.less';
type InputSize = 'large' | 'medium' | 'small';
export interface IInputProps
  extends Omit<InputHTMLAttributes<HTMLElement>, 'size'> {
  defaultValue?: string;
  size?: InputSize;
  prefixIcon?: ReactNode;
  suffixIcon?: ReactNode;
  disabled?: boolean;
  style?: React.CSSProperties;
}

const Input: React.FC<IInputProps> = (props) => {
  const {
    defaultValue,
    size = 'medium',
    disabled = false,
    style,
    onChange,
    prefixIcon,
    suffixIcon,
    ...restProps
  } = props;
  const classNames = cs('hexi-input-wrapper', `hexi-input-${size}`, {
    'is-disabled': disabled,
  });
  const [value, setValue] = useState(defaultValue);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(value);
    onChange?.(e);
  };

  return (
    <div className={classNames} style={{ ...style }}>
      {prefixIcon}
      <input
        value={defaultValue || value}
        type="text"
        className="hexi-input"
        disabled={disabled}
        onChange={handleChange}
        {...restProps}
      />
      {suffixIcon}
    </div>
  );
};

export default Input;
