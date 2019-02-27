import * as React from 'react';
// import { Component } from 'react';
import Carat from './contentComponents/Carat';
import Category from './contentComponents/Category';
import { Table } from './contentComponents/Table';
import Info from './contentComponents/Info';
import { inject, observer } from 'mobx-react';
import Store from '../models/Store';

interface InjectedAppProps {
  store?: typeof Store.Type;
}

export const Content = inject('store')(
  observer((props: InjectedAppProps) => (
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
          {/* <h1>Content</h1> */}
          <Table itemGroupStore={props.store!.itemGroupStore.items}/>
        </div>
        <div className="col col-md-2 infoCol">
          <Info />
        </div>
      </div>
    </div>
  ))
);

// export default class Content extends Component {
//   render() {
//     return (

//     );
//   }
// }
