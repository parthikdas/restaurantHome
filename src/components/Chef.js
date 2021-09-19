import React from 'react'
import './Chef.css'
function Chef() {
    function not() {
        alert('Not Now!! They are Busy..');
    }
    return (
        <div className="chef-box" style={{background: "linear-gradient(to bottom, rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('images/chef.jpg') top  no-repeat"}}>
            <div className="nothing"></div>
            <div className="container">
                <div className="head">Our chefs</div>
                <div className="quote">What can be better than food prepaired with love</div>
                <div className="main">
                    <div className="chef-card">
                        <img src="images/jackW.jpg" alt="jack" />
                        <div className="name"><b>Jack Wilson</b></div>
                        <div className="position">Executive Chief</div>
                        <div className="button" onClick={not}><b>Read more</b></div>
                    </div>
                    <div className="chef-card">
                        <img src="images/oscar.jpg" alt="oscar" />
                        <div className="name"><b>Oscar Benedict</b></div>
                        <div className="position">Head Chief</div>
                        <div className="button" onClick={not}><b>Read more</b></div>
                    </div>
                    <div className="chef-card">
                        <img src="images/jackS.jpg" alt="jack" />
                        <div className="name"><b>Jack Sparrow</b></div>
                        <div className="position">Sous Chief</div>
                        <div className="button" onClick={not}><b>Read more</b></div>
                    </div>
                    <div className="chef-card">
                        <img src="images/lisa.jpg" alt="lisa" />
                        <div className="name"><b>Lisa Crawford</b></div>
                        <div className="position">Chief de Partie</div>
                        <div className="button" onClick={not}><b>Read more</b></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Chef
