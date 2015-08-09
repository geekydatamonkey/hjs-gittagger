import React from 'react';

// styles
require('./hello.css');

export default React.createClass({
  displayName: 'Hello',
  render: function() {
    return (
      <h1 className='hello'>Hello there, {this.props.name}!</h1>
    );
  }
});
