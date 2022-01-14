import React from "react";
import cs from 'classnames';
import { createContext } from "react";
import { useState } from "react";
import './style.less';
import MenuItem, { IMenuItemProps } from "./MenuItem";

type MenuMode = 'horizontal' | 'vertical';
type SelectCallBack = (selectedIndex: string) => void;
export interface IMenuProps {
    defaultIndex?: string;
    mode?: MenuMode;
    className?: string;
    style?: React.CSSProperties;
    onSelect?: SelectCallBack;
}

export interface IMenuContext {
    currentIndex: string;
    onSelect?: SelectCallBack;
    mode?: MenuMode;
}

export const MenuContext = createContext<IMenuContext>({
    currentIndex: '0',
})
const Menu: React.FC<IMenuProps> = (props) => {
    const { defaultIndex = '0', mode = 'horizontal', className, style, children, onSelect } = props;
    const [currentIndex, setCurrentIndex] = useState(defaultIndex);

    const classNames = cs('hexi-menu', className, {
        'hexi-menu-vertical': mode === 'vertical',
        'hexi-menu-horizontal': mode === 'horizontal',
    })

    const handleClick = (index: string) => {
        setCurrentIndex(index);
        onSelect && onSelect(index);
    };

    const renderChildren = () => {
        return React.Children.map(children, (child, index) => {
            const childElement = child as React.FunctionComponentElement<IMenuItemProps>;
            const { displayName } = childElement.type;
            if (displayName === 'MenuItem' || displayName === 'SubMenu') {
                return React.cloneElement(childElement, {
                    index: index.toString()
                })
            } else {
                console.warn('Warning: The child component of Menu must be MenuItem or SubMenu');
            }
        })
    };
    return (
        <ul
            className={classNames}
            style={{ ...style }}
        >
            <MenuContext.Provider value={{
                currentIndex,
                onSelect: handleClick,
                mode,
            }}
            >
                {renderChildren()}
            </MenuContext.Provider>
        </ul>
    )
};


export default Menu;