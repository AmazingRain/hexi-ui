# Button

## 代码演示
```tsx
/**
 * title: 我是标题
 * desc: 我是简介，我可以用 `Markdown` 来编写
 */
import React from 'react';
import { Button } from 'hexi-ui';

export default () => (
    <>
      <Button size='lg'>Default</Button>
      <Button disabled>Disabled</Button>
      <Button type='success' disabled>成功按钮</Button>
      <br />
    </>
);
```
<API></API>
<Alert type="info">
  注意，内部暂时只能编写 HTML
</Alert>
#### 标签测试 <Badge>Hello</Badge>