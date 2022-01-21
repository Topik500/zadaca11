import React from 'react';
import Comp1  from "../components/component1.js";
export const MyContext = React.createContext('TEKST');

function App() {

  return (
    <div>
      <MyContext.Provider value={{tekst:'Test', number: 5}}> 
        <Comp1 />
      </MyContext.Provider>
  </div>
  );
}

export default App;
