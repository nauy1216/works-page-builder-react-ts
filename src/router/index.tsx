import React from 'react';
import { RouteComponentProps } from 'react-router';
import { Redirect, Switch, Route } from 'react-router-dom';
import { useDocTitle } from '../hooks';

type RouteConfig = {
  path: string; // 路由地址
  exact?: boolean; // 是否绝对匹配
  // todo：异步组件声明还未处理
  component: React.ComponentType<RouteComponentProps> | any;
  strict?: boolean;
  children?: RouteConfig[];
  [prop: string]: any;
};

// 拦截的逻辑统一在这里处理
function RouteComponentWrap(props) {
  // const { children } = props;
  useDocTitle(props.route.title);
  return props.children;
}

export function renderRoutes(routes: RouteConfig[] | undefined) {
  function renderChild(routes: RouteConfig[] | undefined) {
    if (!routes) {
      return null;
    }
    return (
      <Switch>
        {routes.map(route => {
          return (
            <Route
              key={route.path}
              path={route.path}
              exact={route.exact}
              strict={route.strict}
              render={function (props): React.ReactNode {
                const Component = route.component;
                const children = (
                  <RouteComponentWrap {...props} route={route}>
                    <Component {...props} route={route}>
                      {renderChild(route.children)}
                    </Component>
                  </RouteComponentWrap>
                );
                return children;
              }}></Route>
          );
        })}
        <Redirect key="/404" to="/404"></Redirect>
      </Switch>
    );
  }
  const vnode = renderChild(routes);
  return vnode;
}
