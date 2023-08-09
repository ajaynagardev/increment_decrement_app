// import logo from './logo.svg';
import { useState } from 'react';
import './style/App.css';
import data from './data';
import Tours from './component/Tours';
// import AppLogic from './component/AppLogic'

function App() {
  const [tours, setTours]=useState(data);

  return (
    <div>

{/*     
      <div className="App">
        <header className="App-header">
          <AppLogic/>


        </header>
      </div> */}



      <div>
        <Tours tours={tours}></Tours>
      </div>
          
    </div>
  );
}

export default App;
