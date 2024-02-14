import ChildA from './ChildA';
import React, { createContext} from 'react';
let data = createContext();
let data1 = createContext();
function App() {
  const name = "geeta  n Sanap";
  const age =32;
 
  return (
  
    <div className="App">
      <data.Provider value={name}>
      <data1.Provider value={age}>
      <ChildA />
      </data1.Provider>
      </data.Provider>
    
    </div>
  );
}

export default App;
export {data, data1};
