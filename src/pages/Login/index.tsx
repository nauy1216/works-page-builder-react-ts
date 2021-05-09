import React from 'react';
import { connect } from 'react-redux';
import TestSaga from './TestSaga';
// import { RootState, addCount, incrCount } from '../../store/store1/index';

function mapStateToProps(state: any) {
  return {};
}

function mapDispatchToProps() {
  return {};
}

type Props = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

const Child = connect(mapStateToProps)(
  class _Child extends React.Component<ReturnType<typeof mapStateToProps>> {
    render() {
      return <div>Child</div>;
    }
  }
);

class Login extends React.Component<Props> {
  render() {
    return (
      <div>
        <Child />
        <TestSaga />
        {/* {this.props.count}
        <button onClick={() => this.props.addCount(1)}>+1</button>
        <button onClick={() => this.props.incrCount(-2)}>-1</button> */}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
