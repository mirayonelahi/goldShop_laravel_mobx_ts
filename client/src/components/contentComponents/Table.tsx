import * as React from 'react';
import { Component } from 'react';

export default class Table extends Component {
  render() {
    return (
      <div>
        <table className="table table-striped">
          <thead className="thead-light">
            <tr>
              <th className="text-left">#</th>
              <th className="text-left">Id</th>
              <th className="text-left">Title</th>
              <th className="text-center">Edit</th>
              <th className="text-center">Done</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>01</td>
              <td>7a07</td>
              <td>Malala</td>
              <td>34.6</td>
              <td>21</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
