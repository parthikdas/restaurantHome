import React from 'react'
import { Link } from "react-router-dom";
import "./Navbar.css"
function Navbar() {
    function book() {
        alert("Not Available")
    }
    return (
        <nav>
            <div className="navBar">
                <p className="Name">F&#x263A;&#x263B;dy</p>
                <div className="link-contain">
                    <Link className="links" aria-current="page" to="/">Home</Link>
                    <Link className="links" aria-current="page" to="/menu">Menu</Link>
                    <Link className="links" aria-current="page" to="/chef">Chefs</Link>
                    <Link className="links" aria-current="page" to="/about">About</Link>
                </div>
                <div className="book-button">
                    <button className="book" onClick={book}><p>BOOK A TABLE</p></button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
