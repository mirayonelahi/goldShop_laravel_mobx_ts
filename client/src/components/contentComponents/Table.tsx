import * as React from 'react';
// import { Component } from 'react';
import { observer } from 'mobx-react';

export const Table = observer(
  (props: { itemGroupStore: any }) => (
    <div className="container">
      <div className="row">
        <div className="col col-md-12">
          {console.log('table props: ', props.itemGroupStore)}
          <h1 className="text-center">Things you need to do</h1>
          <table className="table table-striped">
            <thead className="thead-light">
              <tr>
                <th className="text-left">Id</th>
                <th className="text-left">Token</th>
                <th className="text-left">Name</th>
                <th className="text-left">Category</th>
                <th className="text-left">Carat</th>
                <th className="text-left">Weight</th>
                <th className="text-left">Sold</th>
                {/* <th className="text-left">Selling Date</th> */}
                <th className="text-center">Edit</th>
                <th className="text-center">Delete</th>
              </tr>
            </thead>
            <tbody>
              {props.itemGroupStore.map((item: any, index: number) => (
                <tr key={index}>
                  <td className="text-left">{item.id}</td>
                  <td className="text-left">{item.token}</td>
                  <td className="text-left">{item.name}</td>
                  <td className="text-left">{item.category}</td>
                  <td className="text-left">{item.carat}</td>
                  <td className="text-left">{item.weight}</td>
                  <td className="text-left">{item.sold}</td>
                  {/* <td className="text-left">{item.sellingDate}</td> */}
                  <td className="text-center">
                    <button
                      className="btn btn-info mr-1"
                      // disabled={this.todoStore.editDisabled}
                      // onClick={this.todoStore.onEdit.bind(this, todo.id)}
                      // tslint:disable-next-line: indent
                    >
                      Edit
                    </button>
                  </td>
                  <td className="text-center">
                    <button
                      className="btn btn-danger"
                      // disabled={this.todoStore.editDisabled}
                      // onClick={this.todoStore.onDelete.bind(this, todo.id)}
                      // tslint:disable-next-line: indent
                    >
                      Done
                    </button>
                  </td>
                </tr>
              ))}
              {/* <td className="text-left">1</td>
            <td className="text-left">2</td>
            <td className="text-left">Eat</td>
            <td className="text-center">Edit button</td>
            <td className="text-center">Done as</td> */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
);

// export default class Table extends Component {
//   render() {
//     return (
//       <div>
//         <table className="table table-striped">
//           <thead className="thead-light">
//             <tr>
//               <th className="text-left">#</th>
//               <th className="text-left">Id</th>
//               <th className="text-left">Title</th>
//               <th className="text-center">Edit</th>
//               <th className="text-center">Done</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td>01</td>
//               <td>7a07</td>
//               <td>Malala</td>
//               <td>34.6</td>
//               <td>21</td>
//             </tr>
//           </tbody>
//         </table>
//       </div>
//     );
//   }
// }
