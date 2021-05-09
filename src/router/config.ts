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
    meta: {
      title: '登录' // 自定义属性
    }
  },
  // 404 Not Found
  {
    path: '/404',
    component: loadable(() => import('../pages/NotFound')),
    name: '404',
    meta: {
      title: '404' // 自定义属性
    }
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
        name: 'home',
        meta: {
          login: true,
          title: '主页'
        }
      },
      {
        path: '/workspace',
        exact: true,
        component: loadable(() => import('../pages/Workspace')), // 组件需要你自己准备
        name: 'home',
        meta: {
          login: true,
          title: '主页'
        }
      }
    ]
  }
];
