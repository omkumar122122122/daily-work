import {react} from 'react';
function Nav(props){
  return(
    <div style={{ border: "1px solid black", padding: "16px", display: "flex",
        justifyContent: "space-between" }}>
        <h2>MyBrand</h2>
        <div>
        <span>{props.link}</span>
        <span>About</span>
        <span>Contact</span>
        </div>
        </div>
  )
}
 export default Nav;


