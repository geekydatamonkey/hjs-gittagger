'use strict';

import app from 'ampersand-app';
import React from 'react';
import Router from 'ampersand-router';
import PublicPage from './pages/public.js';
import ReposPage from './pages/repos.js';

export default Router.extend({
  routes: {
    '': 'public',
    'repos': 'repos'
  },
  
  public() {
    React.render(<PublicPage />, document.body);
  },

  repos() {
    React.render(<ReposPage />, document.body);
  },
});
