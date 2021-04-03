import React from 'react';

export default class Layout extends React.Component<any> {
  render() {
    return (
      <div>
        <h1>App Layout</h1>
        {this.props.children}
      </div>
    );
  }
}
