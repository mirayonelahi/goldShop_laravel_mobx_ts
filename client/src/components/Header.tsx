import * as React from 'react';
import { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <header className="main-header">
        <a href="index2.html" className="logo">
          <span className="logo-mini">
            <b>G</b>S
          </span>
          <span className="logo-lg">
            Shop<b>Gold</b>
          </span>
        </a>

        <nav className="navbar navbar-static-top" role="navigation">
          <a
            href="#"
            className="sidebar-toggle"
            data-toggle="push-menu"
            role="button"
          >
            <span className="sr-only">Toggle navigation</span>
          </a>
          <div className="navbar-custom-menu">
            <ul className="nav navbar-nav">
              <li className="dropdown user user-menu">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                  <img
                    src="dist/img/user2-160x160.jpg"
                    className="user-image"
                    alt="User Image"
                  />
                  <span className="hidden-xs">RedX Solutions</span>
                </a>
                <ul className="dropdown-menu">
                  <li className="user-header">
                    <img
                      src="dist/img/user2-160x160.jpg"
                      className="img-circle"
                      alt="User Image"
                    />
                    <p>
                    RedX Solutions -  digital agency
                      <small>Since IDK</small>
                    </p>
                  </li>
                  <li className="user-footer">
                    <div className="pull-right">
                      <a href="#" className="btn btn-default btn-flat">
                        Sign out
                      </a>
                    </div>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}
