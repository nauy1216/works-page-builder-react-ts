import React from 'react';
import { RouteComponentProps } from 'react-router';
import { Switch, Route } from 'react-router-dom';

type RouteConfig = {
  path: string; // 路由地址
  exact?: boolean; // 是否绝对匹配
  // todo：异步组件声明还未处理
  component: React.ComponentType<RouteComponentProps> | any;
  strict?: boolean;
  children?: RouteConfig[];
  [prop: string]: any;
};

export function renderRoutes(routes: RouteConfig[] | undefined) {
  function renderChild(routes: RouteConfig[] | undefined) {
    if (!routes) {
      return null;
    }
    return [
      ...routes.map(route => {
        return (
          <Route
            key={route.path}
            path={route.path}
            exact={route.exact}
            strict={route.strict}
            render={function (props): React.ReactNode {
              debugger;
              const Component = route.component;
              return (
                <Component {...props} route={route}>
                  {renderChild(route.children)}
                </Component>
              );
            }}></Route>
        );
      }),
      null
      // <Redirect key="/404" to="/404"></Redirect>
    ];
  }
  const vnode = (
    <Switch>
      {renderChild(routes)}
      {/* <Redirect to="/404"></Redirect> */}
    </Switch>
  );
  debugger;
  return vnode;
}
