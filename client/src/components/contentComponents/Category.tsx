import * as React from 'react';
import { Component } from 'react';

export default class Category extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="buttonBlock">
          <button className="btn btn-success">Bangles</button>
          <button className="btn btn-success">Chain</button>
          <button className="btn btn-success">Bracelet</button>
          <button className="btn btn-success">Ring</button>
          <button className="btn btn-success">Nose Pin</button>
          <button className="btn btn-success">Locket</button>
        </div>
        <div className="addItemBlock">
          <button className="btn btn-warning">Add Item</button>
        </div>
      </React.Fragment>
    );
  }
}
