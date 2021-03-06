'use strict';

import app from 'ampersand-app';
import React from 'react';
import Router from 'ampersand-router';
import PublicPage from './pages/public.js';
import ReposPage from './pages/repos.js';
import Layout from './layout';

export default Router.extend({
  renderPage(page, opts = {layout: true}) {
    if (opts.layout) {
      page = (
        <Layout>
          {page}
        </Layout>
      );
    }
    React.render(page, document.body);
  },

  routes: {
    '': 'public',
    'repos': 'repos'
  },
  
  public() {
    this.renderPage(<PublicPage />, {layout: false});
  },

  repos() {
    this.renderPage(<ReposPage />);
  },
});
