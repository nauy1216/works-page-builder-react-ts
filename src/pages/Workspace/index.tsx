import React from 'react';
import Blockly from '../../blockly/index.jsx';

export default class Workspace extends React.Component {
  state = {
    toolboxBlocks: []
  };
  render() {
    return <Blockly />;
  }
}
