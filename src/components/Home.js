import React from 'react';
import "./Home.css";
import "./Navbar.css"
function Home() {
    return (
        <>
            <div className="home-first" style={{background: "linear-gradient(to bottom, rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('images/bg.jpg') center  no-repeat"}}>
                <div className="welcome">Welcome to</div>
                <div className="res orange-text">F&#x263A;&#x263B;dY</div>
            </div>
        </>
    )
}

export default Home
