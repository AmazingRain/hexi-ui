# Button

### 代码演示

#### 按钮类型

```tsx
/**
 * title: 按钮类型
 * desc: type取值为：default、primary、success、warning、danger
 */
import React from 'react';
import { Button, Icon } from 'hexi-ui';

export default () => (
  <>
    <Button>默认按钮</Button>
    <Button type="primary">主要按钮</Button>
    <Button type="success">成功按钮</Button>
    <Button type="warning">警告按钮</Button>
    <Button type="danger">危险按钮</Button>
  </>
);
```

#### 按钮大小

```tsx
/**
 * title: 按钮大小
 * desc: size取值为：large、small
 */
import React from 'react';
import { Button, Icon } from 'hexi-ui';

export default () => (
  <>
    <Button size="large">较大按钮</Button>
    <Button>默认大小</Button>
    <Button size="small">较小按钮</Button>
  </>
);
```

#### 带有 icon 图标和禁用状态的按钮

```tsx
/**
 * title: 按钮大小
 * desc: size取值为：large、small
 */
import React from 'react';
import { Button, Icon } from 'hexi-ui';

export default () => (
  <>
    <Button icon="ri-home-line">带有图标</Button>
    <Button type="primary" disabled icon="ri-terminal-box-line">
      禁用状态
    </Button>
  </>
);
```

<API></API>
