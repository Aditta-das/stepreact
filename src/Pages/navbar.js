import React from "react";
import { Link } from 'react-router-dom';
import './styles/navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {
    return (
        <>
            <div className="webName">
                <h1 className="webTitle">Sigmoid</h1>
            </div>
            <ul className="nav justify-content-center">
                <li className="nav-item">
                    <Link className="nav-link" to="/home">LeetCode</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/dropaquestion">Drop A Question</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/qa">Q&A</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/resume">My Resume</Link>
                </li>
            </ul>
        </>
    );
}

export default Navbar;