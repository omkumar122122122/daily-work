import {react} from 'react';
import './App.css';
function Nav(){
  return(
    <div style={{ border: "1px solid black", padding: "16px", display: "flex",
        justifyContent: "space-between" }}>
        <h2>MyBrand</h2>
        <div>
        <span>Home</span>
        <span>About</span>
        <span>Contact</span>
        </div>
        </div>
  )
}

export default App;

