import React, { useState, useRef } from 'react';
import './style.less';

export interface ITagProps {
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
