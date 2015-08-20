import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as <%= lowComponentName %>ActionCreators from './actionCreators';

@connect(({ <%= componentName %> }) => ({ <%= componentName %> }))
export default class <%= componentName %> extends Component {

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    <%= componentName %>: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props);
    this.actions = bindActionCreators(<%= lowComponentName %>ActionCreators, props.dispatch);
  }

  render() {
    let {
      someAction
    } = this.actions;

    return (
      <div></div>
    );
  }

}
