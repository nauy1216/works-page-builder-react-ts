import React from 'react';
import Blockly from '../../packages/blockly/index';

export default class Workspace extends React.Component {
  state = {
    toolboxBlocks: []
  };
  render() {
    return <Blockly />;
  }
}
