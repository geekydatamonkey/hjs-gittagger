'use strict';

import React from 'react';
import Hello from './Hello/Hello';

// styles
import stylesYeti from 'yeticss/public/css/main.css';
import stylesApp from './app.scss';

React.render(<Hello name='World' code="function() {}" />, document.body);
