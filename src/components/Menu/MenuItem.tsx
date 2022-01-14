import React, { useContext } from "react";
import cs from 'classnames';
import { MenuContext } from './Menu';

type MenuMode = 'horizontal' | 'vertical';

export interface IMenuItemProps {
    index?: string;
    disabled?: boolean;
    className?: string;
    style?: React.CSSProperties;
}

const MenuItem: React.FC<IMenuItemProps> = (props) => {
    const { index, disabled, className, style, children } = props;
    const { currentIndex, onSelect } = useContext(MenuContext);
    
    const classNames = cs('hexi-menu-item', className, {
        'is-disabled': disabled,
        'is-active': currentIndex === index,
    })

    const handleClick = () => {
        if (onSelect && !disabled && (typeof index === 'string')) {
            onSelect(index)
        }
    };
    return (
        <li
            className={classNames}
            onClick={handleClick}
        >
            {children}
        </li>
    )
};
MenuItem.displayName = 'MenuItem';

export default MenuItem;