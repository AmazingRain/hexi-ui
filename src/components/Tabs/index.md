# Tabs

## 代码演示

```tsx
/**
 * title: tabs 类型
 * desc: type取值为默认值
 */
import React from 'react';
import { Tabs, TabItem, Icon } from 'hexi-ui';

export default () => (
  <>
    <Tabs
      onSelect={(index) => {
        alert(index);
      }}
    >
      <TabItem
        label={
          <>
            <Icon name="ri-home-line" />
            tab1
          </>
        }
      >
        content1
      </TabItem>
      <TabItem label={<>tab1</>}>content2</TabItem>
      <TabItem label={<>tab3</>}>content3</TabItem>
      <TabItem label={<>tab4</>} disabled>
        content2
      </TabItem>
    </Tabs>
  </>
);
```

```tsx
/**
 * title: tabs 类型
 * desc: type取值为 card
 */
import React from 'react';
import { Tabs, TabItem, Icon } from 'hexi-ui';

export default () => (
  <>
    <Tabs type="card">
      <TabItem
        label={
          <>
            <Icon name="ri-home-line" />
            tab1
          </>
        }
      >
        content1
      </TabItem>
      <TabItem label={<>tab1</>}>content2</TabItem>
      <TabItem label={<>tab3</>}>content3</TabItem>
      <TabItem label={<>tab4</>} disabled>
        content2
      </TabItem>
    </Tabs>
  </>
);
```

<API></API>
