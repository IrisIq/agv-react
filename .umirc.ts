import { defineConfig } from 'umi';

export default defineConfig({
  npmClient: 'cnpm',
  history: { type: 'hash' },
  hash: true,
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  routes: [
    { path: '/', redirect: '/index' },
    { path: '/index', component: 'index' },
  ],
});
