# Input

## 代码演示

#### 基本使用

```tsx
import React, { useState } from 'react';
import { Input, TextArea } from 'hexi-ui';

const Demo = () => {
  const [value, setValue] = useState('');
  const onChange = (e) => {
    console.log(e.target.value);
    setValue(e.target.value);
  };
  return (
    <>
      <Input placeholder="请输入内容" style={{ width: '200px' }} />
      <br />
      <Input
        placeholder="获取输入内容"
        style={{ width: '200px' }}
        value={value}
        onChange={onChange}
      />
      <br />
      <TextArea style={{ width: '200px' }} rows={5} cols={5} />
    </>
  );
};

export default Demo;
```

#### 不同大小的按钮

```tsx
import React from 'react';
import { Input, TextArea } from 'hexi-ui';

export default () => (
  <>
    <Input placeholder="请输入内容" style={{ width: '200px' }} size="large" />
    <br />
    <Input placeholder="请输入内容" style={{ width: '200px' }} />
    <br />
    <Input placeholder="请输入内容" style={{ width: '200px' }} size="small" />
    <br />
    <TextArea style={{ width: '200px' }} disabled rows={5} cols={5} />
  </>
);
```

#### 带有图标和禁用

```tsx
import React from 'react';
import { Input, Icon, TextArea } from 'hexi-ui';

export default () => (
  <>
    <Input placeholder="禁用" style={{ width: '200px' }} disabled />
    <br />
    <Input
      placeholder="带有图标"
      style={{ width: '200px' }}
      prefixIcon={<Icon name="ri-home-line" />}
      suffixIcon={<Icon name="ri-store-2-line" />}
    />
    <br />
  </>
);
```
