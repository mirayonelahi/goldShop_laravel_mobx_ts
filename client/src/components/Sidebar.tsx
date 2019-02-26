import * as React from 'react';
import { Component } from 'react';

export default class SideBar extends Component {
  render() {
    return (
      <aside className="main-sidebar">
        <section className="sidebar">
          <div className="user-panel">
            <div className="pull-left image">
              <img
                src="dist/img/user2-160x160.jpg"
                className="img-circle"
                alt="User Image"
              />
            </div>
            <div className="pull-left info">
              <p>mahmood.ayon</p>
              <a href="#">
                <i className="fa fa-circle text-success" /> Online
              </a>
            </div>
          </div>

          <ul className="sidebar-menu" data-widget="tree">
            <li className="active">
              <a href="#">
                <i className="fa fa-link" /> <span>Welcome</span>
              </a>
            </li>
            <li className="treeview">
              <a>
                <i className="fa fa-link" /> <span>Shop</span>
                <span className="pull-right-container">
                  <i className="fa fa-angle-left pull-right" />
                </span>
              </a>
              <ul className="treeview-menu">
                <li>
                  <a href="#">
                    <i className="fa fa-link" /> <span>Invenotry</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-link" /> <span>Sales</span>
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-link" /> <span>Report</span>
              </a>
            </li>
          </ul>
        </section>
      </aside>
    );
  }
}
