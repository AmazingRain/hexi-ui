const fs = require('fs');
// import fs from 'fs';
const path = require('path');
const readline = require('readline');
const cwd = process.cwd();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const getComponentName = async () => {
  return new Promise<string>((resolve) => {
    rl.question(
      '> 请输入要创建组件的名称（大驼峰）\n> ',
      async (name: string) => {
        resolve(name);
        rl.close();
      },
    );
  });
};

const template = {
  tsx(name: string) {
    return `
import React from 'react';
import './style.less';

export interface I${name}Props {

}
const ${name}: React.FC<I${name}Props> = () => {
    return (
        <div>
            ${name}
        </div>
    )
};

export default ${name};        
        `;
  },
  md(name: string) {
    return `
# ${name}

## 基本使用

\`\`\`tsx
import React from 'react';
import { ${name} } from 'hexi-ui';

export default () => (
  <>
    <${name}>${name}</${name}>
  </>
);
\`\`\`

<API></API>`;
  },
};
async function execute() {
  const dirName = await getComponentName();
  let dir = path.join(cwd, 'src', 'components', dirName);
  fs.mkdirSync(dir);

  fs.writeFileSync(path.join(dir, 'index.tsx'), template.tsx(dirName), 'utf-8');
  fs.writeFileSync(path.join(dir, 'index.md'), template.md(dirName), 'utf-8');
  fs.writeFileSync(path.join(dir, 'style.less'), '', 'utf-8');
  fs.appendFileSync(
    path.join(cwd, 'src', 'index.ts'),
    `\nexport { default as ${dirName} } from './components/${dirName}';`,
  );
}

execute();
