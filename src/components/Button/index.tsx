import React, { MouseEventHandler } from "react";
import cs from "classnames";
import Icon from "../Icon";
import './index.less';
type ButtonType = 'default' | 'primary' | 'success' | 'warning' | 'danger';
type ButtonSize = 'small' | 'medium' | 'large';

interface ButtonProps {
  type?: ButtonType;
  size?: ButtonSize;
  icon?: string;
  disabled?: boolean;
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
const Button: React.FC<ButtonProps> = (props) => {
  const {
    type = 'default',
    size = 'medium',
    icon,
    disabled = false,
    children,
    onClick,
  } = props;

  const classNames = cs('hexi-btn', `hexi-btn-${type}`, `hexi-btn-${size}`, {
    'is-disabled': disabled,
  });
  
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled) {
      e.preventDefault();
      return;
    }
    onClick && onClick(e);
  };
  return (
    <button
      className={classNames}
      onClick={handleClick}
    >
      {icon && <Icon name={icon} />}
      <span>{children}</span>
    </button>
  )
};

export default Button;