import logo from './logo.svg';
import './App.css';
import ComponentA from './ComponentA';
import FC from "./FC"
import { useState } from 'react';
import Users from './Users';
import Flexbox from './Flexbox';

function App() {
  const [showComponent, setShowComponent] = useState(false);
  return (
    <div className="App">
      <button onClick={() => setShowComponent(!showComponent)}>{showComponent ? 'Hide Component' : 'Show Compoent'}</button>
      {/* {showComponent?<ComponentA name={name} id={101} />:null} */}
      {showComponent ? <FC /> : null}
      <Users />
      {/* <Flexbox /> */}

    </div>
  );
}

export default App;
