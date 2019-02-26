import * as React from 'react';
import { Component } from 'react';
 
export default class Carat extends Component {

    render() { 
        return ( 
            <React.Fragment>
                <button className="btn btn-success">18 Carat</button>
                <button className="btn btn-success">20 Carat</button>
                <button className="btn btn-success">21 Carat</button>
            </React.Fragment>
         );
    }
}