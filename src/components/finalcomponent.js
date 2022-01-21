import React, { Component } from 'react';
import {MyContext} from "../container/App"

class FinalComp extends Component {
  render() { 
    return  ( 
    <MyContext.Consumer>
      {value => {return( 
          <div style={{borderStyle:"solid" }}>
            <h1>{value.tekst}</h1>
            <h1>{value.number}</h1>
          </div>
          )}
    }

    </MyContext.Consumer> );
  }
}
 
export default FinalComp;