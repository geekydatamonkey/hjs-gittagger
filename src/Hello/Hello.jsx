import React from 'react';

// styles
require('./hello.scss');

export default React.createClass({
  displayName: 'Hello',
  render: function() {
    return (
      <section className='hello container'>
        <h1>Hello there, {this.props.name}!</h1>
      </section>
    );
  }
});
