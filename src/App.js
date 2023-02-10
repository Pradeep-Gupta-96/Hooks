import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import { createContext, useState } from 'react';
import ComA from './component/useContext/ComA';
export const GlobalInfo = createContext()

function App() {
  const [color,setcolor]=useState("green")
  return (
    <div className="App" >
    <GlobalInfo.Provider value={{Appcolor:color}}>
      <ComA />
    </GlobalInfo.Provider>
    </div>
  );
}

export default App;
