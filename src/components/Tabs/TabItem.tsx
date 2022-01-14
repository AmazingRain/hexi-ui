import React from "react";

export interface ITabItemProps {
    label: React.ReactNode;
    disabled?: boolean;
}
const TabItem: React.FC<ITabItemProps> = ({ children }) => {
    return (
        <div
            className="hexi-tabs-content-item"
        >
            {children}
        </div>
    )
};


export default TabItem;