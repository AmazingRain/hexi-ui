import React, { TextareaHTMLAttributes } from 'react';
import cs from 'classnames';

interface ITextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

const TextArea: React.FC<ITextAreaProps> = (props) => {
  const { disabled, ...restProps } = props;
  const classNames = cs('hexi-textarea', {
    'is-disabled': disabled,
  });
  return <textarea className={classNames} {...props}></textarea>;
};

export default TextArea;
