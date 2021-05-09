import React from 'react';
import { connect } from 'react-redux';
import { RootState } from '../../store/store2/reducer';
function mapStateToProps(state: RootState) {
  return {
    count: state.count
  };
}

function mapDispatchToProps(dispatch) {
  return {
    incr: function () {
      dispatch({
        type: 'INCREMENT_ASYNC'
      });
    },
    decr: function () {
      dispatch({
        type: 'DECREMENT_ASYNC'
      });
    }
  };
}

type Props = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  class TestSaga extends React.Component<Props> {
    render() {
      return (
        <div>
          <h1>hello saga</h1>
          <div>{this.props.count}</div>
          <button onClick={this.props.incr}>+1</button>
          <button onClick={this.props.decr}>-1</button>
        </div>
      );
    }
  }
);
