import React from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { RouteConfigComponentProps } from 'react-router-config';
import { Button } from 'antd';
import { useDocTitle } from '../../hooks';

function A(props: any) {
  const history = useHistory();
  const route = useRouteMatch();
  console.log('route', route);
  console.log('props', props);
  return (
    <Button
      onClick={() => {
        history.replace('/');
      }}>
      新增
    </Button>
  );
}

const Home: React.FC<RouteConfigComponentProps> = routes => {
  console.log('routes', routes);
  const { route } = routes; // 获取传入的路由配置
  useDocTitle(route?.title); // 修改标题
  return (
    <div>
      <A></A>
    </div>
  );
};

export default Home;
