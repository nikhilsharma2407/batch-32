import logo from './logo.svg';
import './App.css';
import ComponentA from './ComponentA';
import FC from "./FC"
import { useState } from 'react';
import Users from './Users';

function App() {
  const name = "Nikhil";
  const [showComponent, setShowComponent] = useState(false);
  return (
    <div className="App">
      <h1>Hello {name}</h1>
      <button onClick={()=>setShowComponent(!showComponent)}>{showComponent?'Hide Component':'Show Compoent'}</button>
      {/* {showComponent?<ComponentA name={name} id={101} />:null} */}
      {showComponent?<FC/>:null}
      <Users />
      
    </div>
  );
}

export default App;
