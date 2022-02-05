import React, {
  ChangeEvent,
  FunctionComponentElement,
  useEffect,
  useState,
} from 'react';
import { ICheckboxProps } from './Checkbox';

export interface ICheckboxGroupProps {
  value?: string[];
  onChange?: (checkedValue: string[]) => void;
}
const CheckboxGroup: React.FC<ICheckboxGroupProps> = (props) => {
  const { value = [], onChange, children } = props;
  const [checkedValue, setCheckedValue] = useState<string[]>(value);

  useEffect(() => {
    setCheckedValue([...value]);
  }, [value]);

  const renderChildren = () => {
    return React.Children.map(children, (child, index) => {
      const Checkbox = child as FunctionComponentElement<ICheckboxProps>;
      const { props } = Checkbox;

      return React.cloneElement(Checkbox, {
        checked: checkedValue.includes(props?.value || ''),
        onChange: (e: ChangeEvent<HTMLInputElement>) => {
          const child = e.target;

          if (child.checked) {
            checkedValue.push(child.value);
          } else {
            const i = checkedValue.indexOf(child.value);
            checkedValue.splice(i, 1);
          }

          setCheckedValue([...checkedValue]);
          onChange?.([...checkedValue]);
          props?.onChange?.(e);
        },
      });
    });
  };

  return <div>{renderChildren()}</div>;
};

export default CheckboxGroup;
