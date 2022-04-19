import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from "react-router-dom";




export default function Navbar(props) {
    return (
        

            <nav className="navbar navbar-expand-sm bg-light">
                <div className="container-fluid">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Movie List</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/favorites">Favorites</Link>
                        </li>
                        
                    </ul>
                </div>
            </nav>

       


    );
}