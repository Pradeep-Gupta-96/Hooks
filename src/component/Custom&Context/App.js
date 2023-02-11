import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import useCustom from './NewCompo/ComA';


function App() {
  const [count, mult, onclickadd, onclickMulti, multifan, refelement] = useCustom()

  return (
    <div className="App">
      <h3 ref={refelement}> useRef, useMemo With ownCustom hook</h3>
      <h2 >
        count:{count}---mult:{mult}
      </h2>
      <h3>{multifan}</h3>
      <button onClick={onclickadd}>Click Me!</button>
      <button onClick={onclickMulti}>Click Me!</button>
    </div>
  );
}

export default App;


/**
import { createContext, useState } from "react";
import ComA from "./component/ComA";
import './App.css';

export const GlobInfo=createContext()
export default function App() {
  const [color,setcolor]=useState('red')
  const [data,setdata]=useState('')

  const getdata=(item)=>{
    setdata(item)
  }
  
  return (
    <div className="App">
      {data}
      <GlobInfo.Provider  value={{bhagwa:color,getdata:getdata}}>
      <ComA/>
      </GlobInfo.Provider>
    </div>
    
  );
}

 */