// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Login from './Login';
import Register from './Register';

function App() {
  const [appear, setAppear] = useState(true);

  function change(){
    setAppear(false);
  }
  function reverse(){
    setAppear(true)
  }
  return (
    <div className="App">
     {appear && <Login change={change}></Login>}
      {!appear && <Register reverse={reverse}></Register>}
    </div>
  );
}

export default App;
