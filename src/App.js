import React ,{useState}from 'react';
import './App.css';

function App() {
  let t = new Date().toLocaleTimeString();
  const [tym,setTym] = useState(t);  
  const Show = () => {
    t = new Date().toLocaleTimeString();
    setTym(t);
  }
  return (
    <div className="App">
     <h1>{tym}</h1>
     <button onClick={Show}>Show Current Time</button>
    </div>
  );
}

export default App;
