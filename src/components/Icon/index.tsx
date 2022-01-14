import React from "react";
import '../../style/fonts/remixicon.less';
import './style.less';
interface IconProps {
   name: string;
   style?: React.CSSProperties;
}
const Icon: React.FC<IconProps> = ({ name, style }) => {
    return (
        <i className={`hexi-icon-${name}`} style={{...style}} />
    )
};

export default Icon;