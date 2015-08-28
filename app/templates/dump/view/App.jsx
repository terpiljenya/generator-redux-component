import React, { Component } from 'react';

import createBEM from 'lib/createBEM';

import './b-<%= kebabComponentName %>.scss';

export default class <%= componentName %> extends Component {

  render() {
    let b = createBEM({
      block: '<%= kebabComponentName %>'
    });
    return (
      <div className={b()}></div>
    );
  }

}
