import * as React from 'react';
import { Component } from 'react';
import Carat from './contentComponents/Carat';
import Category from './contentComponents/Category';
// import Table from './contentComponents/Table';
import Info from './contentComponents/Info';

export default class Content extends Component {
  render() {
    return (
      <div className="container-fluid content-wrapper contentContainer">
        <div className="row caratRow">
          <div className="col col-md-10 col-md-offset-2 caratCol">
            <Carat />
          </div>
        </div>
        <div className="row categoryTableInfoRow">
          <div className="categoryBlock">
            <div className="col col-md-2 categoryCol">
              <Category />
            </div>
          </div>
          <div className="col col-md-8 tableCol">
            {/* <Table /> */}
            <h1>Content</h1>
          </div>
          <div className="col col-md-2 infoCol">
            <Info />
          </div>
        </div>
      </div>
    );
  }
}
