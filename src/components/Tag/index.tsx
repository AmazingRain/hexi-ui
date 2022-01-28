import React, { useState, useRef } from 'react';
import './style.less';

export interface ITagProps {
  /**
   * 可以这样写属性描述
   * @description       也可以显式加上描述名
   * @description.zh-CN 标签背景颜色
   * @default           无
   */
  color: string;
}

const Tag: React.FC<ITagProps> = ({ color, children }) => {
  return (
    <div
      className="hexi-tag"
      style={{
        backgroundColor: color,
        borderColor: color,
      }}
    >
      {children}
    </div>
  );
};

export default Tag;
