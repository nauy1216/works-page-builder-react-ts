import React, { RefObject } from 'react';
import './BlocklyComponent.css';

import Blockly from 'blockly/core';
import locale from 'blockly/msg/en';
import 'blockly/blocks';

Blockly.setLocale(locale);

type Props = {
  initialXml: string;
};

class BlocklyComponent extends React.Component<Props> {
  blocklyDiv: RefObject<any>;
  toolbox: RefObject<any>;
  primaryWorkspace: any;
  constructor(props) {
    super(props);
    this.blocklyDiv = React.createRef();
    this.toolbox = React.createRef();
  }

  componentDidMount() {
    const { initialXml, children, ...rest } = this.props;
    this.primaryWorkspace = Blockly.inject(this.blocklyDiv.current, {
      toolbox: this.toolbox.current,
      scrollbars: true,
      ...rest
    });

    if (initialXml) {
      Blockly.Xml.domToWorkspace(Blockly.Xml.textToDom(initialXml), this.primaryWorkspace);
    }
  }

  get workspace() {
    return this.primaryWorkspace;
  }

  setXml(xml) {
    Blockly.Xml.domToWorkspace(Blockly.Xml.textToDom(xml), this.primaryWorkspace);
  }

  render() {
    const { children } = this.props;
    // @ts-ignore
    return (
      <React.Fragment>
        <div ref={this.blocklyDiv} id="blocklyDiv" />
        {/** @ts-ignore */}
        <xml
          xmlns="https://developers.google.com/blockly/xml"
          is="blockly"
          style={{ display: 'none' }}
          ref={this.toolbox}>
          {children}
          {/** @ts-ignore */}
        </xml>
      </React.Fragment>
    );
  }
}

export default BlocklyComponent;
