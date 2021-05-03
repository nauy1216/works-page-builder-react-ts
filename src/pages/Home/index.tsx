import React from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { RouteConfigComponentProps } from 'react-router-config';
import { Button } from 'antd';

function A(props: any) {
  const history = useHistory();
  const route = useRouteMatch();
  console.log('route', route);
  console.log('props', props);
  return (
    <Button
      onClick={() => {
        history.push('/');
      }}>
      新增
    </Button>
  );
}

const Home: React.FC<RouteConfigComponentProps> = routes => {
  console.log('routes', routes);
  return (
    <div>
      <h2>home</h2>
      <A></A>
    </div>
  );
};

export default Home;
