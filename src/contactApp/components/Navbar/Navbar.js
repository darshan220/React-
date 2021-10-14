import React from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router} from 'react-router-dom';

function Navbar(props) {
    
  return (
    <div>
        <Router>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3 fs-2">
                <Link to="/" className="navbar-brand ml-5">
                    React Redux Contact App
                </Link>
            </nav>
        </Router>
    </div>
  );
}

export default Navbar;
