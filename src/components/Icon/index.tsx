import React from 'react';
import svgs from './remixicon.symbol.svg';
import './style.less';
// let svgs = 'https://xupt-tradingplatform.oss-cn-beijing.aliyuncs.com/2022/01/15/47ef2c02288248f6b96269787ba7b0e0remixicon.symbol.svg'
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
   * @default           16
   */
  width?: number;
  /**
   * 可以这样写属性描述
   * @description       也可以显式加上描述名
   * @description.zh-CN 图标宽度
   * @default           16
   */
  height?: number;
  className?: string;
}
const Icon: React.FC<IIconProps> = (props) => {
  const { name, color, width = 16, height = 16, className } = props;
  return (
    <svg className={className} fill={color} width={width} height={height}>
      <use xlinkHref={`${svgs}#${name}`}></use>
    </svg>
  );
};

export default Icon;
