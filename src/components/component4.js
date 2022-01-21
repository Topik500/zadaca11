import React from "react";
import {MyContext} from "../container/App"
import FinalComp from "./finalcomponent";

const Comp4 = () => {

  return ( 
    <MyContext.Consumer>
      {value => {return( 
          <div style={{borderStyle:"solid" }}>
            <h1>{value.tekst}</h1>
            <h1>{value.number}</h1>
            <FinalComp />
          </div>
          )}
    }

    </MyContext.Consumer> );
}
 
export default Comp4;