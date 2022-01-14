import React from 'react';
import cs from 'classnames';
import Icon from '../Icon';
import './style.less';
type ButtonType = 'default' | 'primary' | 'success' | 'warning' | 'danger';
type ButtonSize = 'small' | 'medium' | 'large';

interface ButtonProps {
  /**
   * 可以这样写属性描述
   * @description       也可以显式加上描述名
   * @description.zh-CN 按钮类型
   * @default           default
   */
  type?: ButtonType;
  /**
   * 可以这样写属性描述
   * @description       也可以显式加上描述名
   * @description.zh-CN 按钮大小
   * @default           default
   */
  size?: ButtonSize;
  /**
   * 可以这样写属性描述
   * @description       也可以显式加上描述名
   * @description.zh-CN 图标内容
   * @default           --
   */
  icon?: string;
  /**
   * 可以这样写属性描述
   * @description       也可以显式加上描述名
   * @description.zh-CN 是否禁用
   * @default           false
   */
  disabled?: boolean;
  children?: React.ReactNode;
  /**
   * 可以这样写属性描述
   * @description       也可以显式加上描述名
   * @description.zh-CN 触发点击执行回调
   * @default           (e) => void
   */
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
    <button className={classNames} onClick={handleClick}>
      {icon && <Icon name={icon} />}
      {children}
    </button>
  );
};

export default Button;
