# Menu

具有导航功能的菜单

## 代码演示

#### 水平导航

```tsx
import React from 'react';
import { Menu, MenuItem, SubMenu, Icon } from 'hexi-ui';
export default () => (
  <>
    <Menu>
      <MenuItem icon={<Icon name="ri-home-line" color="#909399" />}>
        首页
      </MenuItem>
      <MenuItem>关于</MenuItem>
      <SubMenu title="下拉菜单">
        <MenuItem>下拉选项一</MenuItem>
        <MenuItem>下拉选项二</MenuItem>
      </SubMenu>
      <MenuItem>其它</MenuItem>
    </Menu>
  </>
);
```

#### 垂直导航

```tsx
import React from 'react';
import { Menu, MenuItem, SubMenu, Icon } from 'hexi-ui';
export default () => (
  <>
    <Menu mode="vertical" style={{ width: '200px' }} defaultIndex="2-1">
      <MenuItem icon={<Icon name="ri-home-line" color="#909399" />}>
        首页
      </MenuItem>
      <MenuItem>关于</MenuItem>
      <SubMenu title="下拉菜单">
        <MenuItem>下拉选项一</MenuItem>
        <MenuItem>下拉选项二</MenuItem>
      </SubMenu>
      <MenuItem>其它</MenuItem>
    </Menu>
  </>
);
```

<API></API>
