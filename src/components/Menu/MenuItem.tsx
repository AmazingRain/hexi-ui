import React, { useContext } from 'react';
import cs from 'classnames';
import { MenuContext } from './Menu';
import Icon from '../Icon';
type MenuMode = 'horizontal' | 'vertical';

export interface IMenuItemProps {
  /**
   * 可以这样写属性描述
   * @description       也可以显式加上描述名
   * @description.zh-CN 按钮类型
   * @default           default
   */
  index?: string;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
  icon?: React.ReactNode;
}

const MenuItem: React.FC<IMenuItemProps> = (props) => {
  const { index, disabled, className, style, children, icon } = props;
  const { currentIndex, onSelect } = useContext(MenuContext);

  const classNames = cs('hexi-menu-item', className, {
    'is-disabled': disabled,
    'is-active': currentIndex === index,
  });

  const handleClick = () => {
    if (onSelect && !disabled && typeof index === 'string') {
      onSelect(index);
    }
  };
  return (
    <li className={classNames} onClick={handleClick} style={{ ...style }}>
      {icon}
      <span>{children}</span>
    </li>
  );
};
MenuItem.displayName = 'MenuItem';

export default MenuItem;
