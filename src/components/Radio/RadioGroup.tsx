import React, { useState } from 'react';
import { IRadioProps } from './Radio';
export interface IRadioGroupProps {
  defaultValue?: string;
  onChange?: (e: React.ChangeEvent<HTMLElement>) => void;
}

const RadioGroup: React.FC<IRadioGroupProps> = (props) => {
  const { defaultValue = '', onChange, children } = props;
  const [activeValue, setActiveValue] = useState(defaultValue);
  const renderChildren = () => {
    return React.Children.map(children, (child, index) => {
      const childElement = child as React.FunctionComponentElement<IRadioProps>;
      const props = childElement.props;
      return React.cloneElement(childElement, {
        checked: activeValue === props.value,
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
          onChange?.(e);
          props.onChange?.(e);
          setActiveValue(e.target.value);
        },
      });
    });
  };

  return <div className="hexi-radio-group">{renderChildren()}</div>;
};

export default RadioGroup;
