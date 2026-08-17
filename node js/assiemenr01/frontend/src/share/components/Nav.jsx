import { Link } from "react-router-dom";
import './Nav.css'

const Nav = () => {
  return (
    <nav >
        <div className="nav">
            <h1>om</h1>
            <div className="navbarlinks">
            <Link className="navbarlink" to="/Portfolio">Portfolio</Link>
            <Link className="navbarlink" to="/products">Products</Link>
            <Link className="navbarlink" to="/blogs">Blogs</Link>
            <Link className="navbarlink" to="/profiles">Profiles</Link>

        </div>
        </div>
       
      
    </nav>
  );
};

export default Nav;