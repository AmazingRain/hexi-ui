import React from 'react';
import svgs from './remixicon.symbol.svg';
import './style.less';

interface IIconProps {
  /**
   * 可以这样写属性描述
   * @description       也可以显式加上描述名
   * @description.zh-CN 图标名称
   * @default           --
   */
  name: string;
  /**
   * 可以这样写属性描述
   * @description       也可以显式加上描述名
   * @description.zh-CN 图标颜色
   * @default           --
   */
  color?: string;
  /**
   * 可以这样写属性描述
   * @description       也可以显式加上描述名
   * @description.zh-CN 图标长度
   * @default           --
   */
  width?: number;
  /**
   * 可以这样写属性描述
   * @description       也可以显式加上描述名
   * @description.zh-CN 图标宽度
   * @default           --
   */
  height?: number;
  className?: string;
}
const Icon: React.FC<IIconProps> = (props) => {
  const { name, color = '#333', width = 16, height = 16, className } = props;
  return (
    <svg className={className} fill={color} width={width} height={height}>
      <use xlinkHref={`${svgs}#${name}`}></use>
    </svg>
  );
};

export default Icon;
