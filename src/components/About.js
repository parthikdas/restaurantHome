import React from 'react'
import './About.css'
function About() {
    function no(){
        alert("not now!!");
    }
    return (
        <div className="about-container">
            <div className="first">
                <div className="about">ABOUT US</div>
                <div className="foody">F&#x263A;&#x263B;DY</div>
                <div className="a"></div>
                <div className="b"></div>
                <div className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/>Repellat aliquam enim sed obcaecati autem? Inventore repellat illo cum<br/>blanditiis doloremque provident. Animi accusantium eum quod! Officiis quae<br/>nam laborum? Laborum ipsa officiis velit tempora, molestias<br/>laboriosam consequuntur reprehenderit molestiae ratione, pariatur<br/>deleniti quia reiciendis possimus dolore vero rem in animi!</div>
                <div className="about-button" onClick={no}>Read More</div>
            </div>
            <div className="second">
                <img src="images/about.jpg" alt="Just a Pic" />
            </div>
        </div>
    )
}

export default About
