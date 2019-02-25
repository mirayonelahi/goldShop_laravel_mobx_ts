// SideBar.js

import React, { Component } from 'react'

export default class SideBar extends Component {
	render() {
		return (
			<aside className="main-sidebar">
				<section className="sidebar">
					<div className="user-panel">
						<div className="pull-left image">
							<img src="dist/img/user2-160x160.jpg" className="img-circle" alt="User Image" />
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
							<a href="#">Link in level 2</a>
						</li>
						<li className="treeview">
							<a href="#">
								<i className="fa fa-link" /> <span>Shop</span>
								<span className="pull-right-container">
									<i className="fa fa-angle-left pull-right" />
								</span>
							</a>
							<ul className="treeview-menu">
								<li>
									<i className="fas fa-store" /> <span>Inventory</span>
								</li>
								<li>
									<i className="fas fa-shopping-cart" /> <span>Sales</span>
								</li>
								<li>
									<a href="#">Link in level 2</a>
								</li>
							</ul>
						</li>
					</ul>
				</section>
			</aside>
		)
	}
}
