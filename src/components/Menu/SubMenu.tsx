import React, { useContext, useMemo, useState } from "react";
import cs from "classnames";
import Icon from "../Icon";
import { MenuContext } from './Menu';
import { IMenuItemProps } from './MenuItem';
export interface SubMenuProps {
    index?: string;
    title: string;
    className?: string;
}

const SubMenu: React.FC<SubMenuProps> = (props) => {
    const { index, title, className, children } = props;
    const [isOpen, setIsOpen] = useState(false);
    const { currentIndex, mode } = useContext(MenuContext);

    const classNames = cs(' hexi-submenu', className, {
        'is-active': currentIndex.slice(0, 1) === index,
    });


    const renderChildren = () => {
        const classNames = cs('hexi-submenu-content', {
            'is-open': isOpen,
        });
        const childrenComponent = React.Children.map(children, (child, i) => {
            const childElement = child as React.FunctionComponentElement<IMenuItemProps>;
            const { displayName } = childElement.type;
            if (displayName === 'MenuItem') {
                return React.cloneElement(childElement, {
                    index: `${index}-${i}`
                })
            } else {
                console.warn('Warning: The child component of SubMenu must be MenuItem');
            }
        });

        return (
            <ul className={classNames}>
                {childrenComponent}
            </ul>
        )
    };
    const submenuTitleCS = cs('hexi-submenu-title', {
        'is-active': currentIndex.slice(0, 1) === index,
    });
    let timer: any;
    const handleMouse = (e: React.MouseEvent, toggle: boolean) => {
        console.log(isOpen);
        
        clearTimeout(timer)
        e.preventDefault()
        timer = setTimeout(() => {
            setIsOpen(toggle)
        }, 100)
    }
    const hoveEvents = mode === 'horizontal' ? {
        onMouseEnter: (e: React.MouseEvent) => handleMouse(e, true),
        onMouseLeave: (e: React.MouseEvent) => handleMouse(e, false),
    } : {};

    const clickEvents = mode === 'vertical' ? {
        onClick: (e: React.MouseEvent) => handleMouse(e, !isOpen),
    } : {};
    return (
        <li
            key={index}
            className={classNames}
            {...hoveEvents}
        >
            <div className={submenuTitleCS} {...clickEvents}>
                <span>{title}</span>
                <Icon name={`ri-arrow-${isOpen ? 'up' : 'down'}-s-line`}/>
            </div>
            {renderChildren()}
        </li >
    )
};

SubMenu.displayName = 'SubMenu';
export default SubMenu;