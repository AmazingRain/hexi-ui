# Checkbox

## 基本使用

```tsx
import React from 'react';
import { Checkbox, CheckboxGroup } from 'hexi-ui';
let value = [];
export default () => (
  <>
    <Checkbox value={'A'}>A</Checkbox>
  </>
);
```

## 半选

```tsx
import React, { useState } from 'react';
import { Checkbox, CheckboxGroup } from 'hexi-ui';
export default () => {
  return (
    <>
      <Checkbox value={'A'} indeterminate></Checkbox>
    </>
  );
};
```

## 多选框组

```tsx
/**
 * title: 默认选中
 * desc: 只需设置 value 即可
 */
import React from 'react';
import { Checkbox, CheckboxGroup } from 'hexi-ui';
export default () => (
  <>
    <CheckboxGroup
      checkAll
      onChange={(value) => {
        console.log(value);
      }}
      value={['A', 'B']}
    >
      <Checkbox value={'A'}>A</Checkbox>
      <Checkbox value={'B'}>B</Checkbox>
      <Checkbox value={'C'}>C</Checkbox>
      <Checkbox value={'D'}>D</Checkbox>
      <Checkbox value={'E'}>E</Checkbox>
    </CheckboxGroup>
  </>
);
```

## 全选

```tsx
import React, { useState, useEffect } from 'react';
import { Checkbox, CheckboxGroup } from 'hexi-ui';
export default () => {
  const [isAll, setIsAll] = useState(false);
  const [indeterminate, setIndeterminate] = useState(false);
  const letters = ['A', 'B', 'C', 'D', 'E'];
  const [checkList, setCheckList] = useState(['A']);

  useEffect(() => {
    if (checkList.length > 0 && checkList.length < letters.length) {
      setIndeterminate(true);
      setIsAll(false);
    } else if (checkList.length === letters.length) {
      setIndeterminate(false);
      setIsAll(true);
    } else if (checkList.length === 0) {
      setIsAll(false);
    }
  }, [checkList.length]);

  return (
    <>
      <Checkbox
        indeterminate={indeterminate}
        checked={isAll}
        onChange={() => {
          !isAll ? setCheckList([...letters]) : setCheckList([]);
        }}
      >
        all
      </Checkbox>
      <CheckboxGroup
        value={checkList}
        onChange={(value) => {
          setCheckList([...value]);
          console.log(value);
        }}
      >
        {letters.map((l) => (
          <Checkbox key={l} value={l}>
            {l}
          </Checkbox>
        ))}
      </CheckboxGroup>
    </>
  );
};
```

<API></API>
