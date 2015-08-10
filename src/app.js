'use strict';

// styles
import yetiStyles from 'yeticss/public/css/main.css';
import appStyles from './app.scss';

// scripts
import app from 'ampersand-app';
import Router from './router';

// expose `app` to browser console
window.app = app;

app.extend({
  init() {
    this.router = new Router();
    this.router.history.start();
  },
});

app.init();