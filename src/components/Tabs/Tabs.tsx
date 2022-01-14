import React, { useState } from "react";
import cs from 'classnames';
import { ITabItemProps } from './TabItem';
import './style.less';

type TypeProps = 'line' | 'card';

interface ITabsProps {
    defaultIndex?: number;
    className?: string;
    onSelect?: (selectIndex: number) => void;
    type?: TypeProps;
}


const Tabs: React.FC<ITabsProps> = (props) => {
    const { defaultIndex = 0, className, onSelect, type = 'line', children } = props;
    const [currentIndex, setCurrentIndex] = useState(defaultIndex);


    const renderNav = () => {
        return React.Children.map(children, (child, index) => {
            const childElement = child as React.FunctionComponentElement<ITabItemProps>;
            const { label, disabled } = childElement.props;
            const classNames = cs('hexi-nav-item', {
                'is-active': currentIndex === index,
                'is-disabled': disabled,
                'is-card': type === 'card',
            });

            const handleClick = (e: React.MouseEvent) => {
                if (disabled) {
                    e.preventDefault();
                    return;
                }
                setCurrentIndex(index);
                onSelect && onSelect(index);
            }
            return (
                <li className={classNames} onClick={handleClick}>
                    {label}
                </li>
            )
        })
    };

    const renderContent = () => {
        return React.Children.map(children, (child, index) => {
            if (currentIndex === index) {
                return child;
            }
        })
    };
    return (
        <div className="hexi-tabs">
            <ul className="hexi-nav">
                {renderNav()}
            </ul>

            <div className="hexi-tabs-content">
                {renderContent()}
            </div>
        </div>
    )
};


export default Tabs;