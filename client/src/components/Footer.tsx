import * as React from 'react';
import { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <footer className="main-footer">
        <div className="pull-right hidden-xs">Anything you want</div>
        <strong>
          Copyright &copy; 2016 <a href="#">Company</a>.
        </strong>{' '}
        All rights reserved.
      </footer>
    );
  }
}
