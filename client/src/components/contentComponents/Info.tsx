import * as React from 'react';
import { Component } from 'react';

export default class Info extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="listBlock">
          <div className="row listBlockRow">
            <div className="col col-md-12">
              <div className="row listBlockHeaderRow">
                <div className="col col-md-12 listBlockHeaderCol">
                  <p>85.87 gm</p>
                </div>
              </div>
              <div className="row listBlockSubheaderRow">
                <div className="col col-md-12 listBlockSubheaderCol">
                  <p>Total Weight</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row listBlockRow">
            <div className="col col-md-12">
              <div className="row listBlockHeaderRow">
                <div className="col col-md-12 listBlockHeaderCol">
                  <p>53 pieces</p>
                </div>
              </div>
              <div className="row listBlockSubheaderRow">
                <div className="col col-md-12 listBlockSubheaderCol">
                  <p>No of Item Sold</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row listBlockRow">
            <div className="col col-md-12">
              <div className="row listBlockHeaderRow">
                <div className="col col-md-12 listBlockHeaderCol">
                  <p>128 pieces</p>
                </div>
              </div>
              <div className="row listBlockSubheaderRow">
                <div className="col col-md-12 listBlockSubheaderCol">
                  <p>No of Item Remains</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="updateItemBlock">
          <button className="btn btn-warning">Update Item</button>
        </div>
      </React.Fragment>
    );
  }
}
