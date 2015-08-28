import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { someAction } from './actions';

@connect(({ <%= componentName %> }) => ({ <%= componentName %> }))
export default class <%= componentName %> extends Component {

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    <%= componentName %>: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props);
    this.actions = bindActionCreators({ someAction }, props.dispatch);
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
