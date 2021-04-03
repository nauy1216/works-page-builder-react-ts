import loadable from '@loadable/component'; // 按需加载
import AppLayout from '../components/Layout';

// 如果访问路径有二级目录，则需要配置这个值，
// 如首页地址为'http://tianzhen.tech/blog/home'，则这里配置为'/blog'
export const basename = '';

export const routes = [
  {
    path: '/login',
    exact: true,
    component: loadable(() => import('../pages/Login')), // 组件需要你自己准备
    name: 'Login', // 自定义属性
    title: '登录' // 自定义属性
    // 这里可以扩展一些自定义的属性
  },
  // 404 Not Found
  {
    path: '/404',
    component: loadable(() => import('../pages/NotFound')),
    name: '404',
    title: '404'
  },
  {
    path: '/',
    component: AppLayout,
    name: 'AppLayout',
    title: 'HelloWorld',
    children: [
      {
        path: '/home',
        exact: true,
        component: loadable(() => import('../pages/Home')), // 组件需要你自己准备
        name: 'home', // 自定义属性
        title: 'react-home' // 自定义属性
      }
    ]
  }
];
