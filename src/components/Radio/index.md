# Radio

## 基本使用

```tsx
import React, { useState } from 'react';
import { Radio } from 'hexi-ui';
const Demo: React.FC = () => {
  return (
    <>
      <Radio value="A" onChange={(e) => alert(e.target.value)}>
        A
      </Radio>
    </>
  );
};

export default Demo;
```

## 禁用状态

```tsx
import React, { useState } from 'react';
import { Radio } from 'hexi-ui';
const Demo: React.FC = () => {
  return (
    <>
      <Radio value="A" onChange={(e) => alert(e.target.value)} checked disabled>
        A
      </Radio>
      <Radio value="B" onChange={(e) => alert(e.target.value)} disabled>
        A
      </Radio>
    </>
  );
};

export default Demo;
```

## 单选框组

一组互斥的 Radio 的使用

```tsx
import React from 'react';
import { Radio, RadioGroup } from 'hexi-ui';
const Demo: React.FC = () => {
  return (
    <>
      <RadioGroup
        defaultValue={'A'}
        onChange={(e) => {
          alert(e.target.value);
        }}
      >
        <Radio value="A">A</Radio>
        <Radio value="B">B</Radio>
        <Radio value="C">C</Radio>
      </RadioGroup>
    </>
  );
};

export default Demo;
```

<API></API>
