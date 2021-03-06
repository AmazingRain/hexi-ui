import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'hexi-ui',
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  // logo: '/images/logo.png',
  outputPath: 'docs-dist',
  locales: [['zh-CN', '中文']],
  resolve: {
    includes: ['docs', 'src/components'],
  },
  base: '/hexi-ui',
  publicPath: '/hexi-ui/',
  exportStatic: {},
  // more config: https://d.umijs.org/config
});
