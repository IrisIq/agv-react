import { defineConfig } from 'umi';

export default defineConfig({
  npmClient: 'cnpm',
  history: { type: 'hash' },
  hash: true,
  publicPath: './',
  routes: [
    { path: '/', redirect: '/index' },
    { path: '/index', component: 'index' },
  ],
});
