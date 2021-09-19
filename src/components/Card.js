import React from 'react'
function Card(props) {
    return (
        <>
            {props.menuData.map((curEle)=>{
                return (
                <>
                <div className="card">
                <div className="card-number">{curEle.id}</div>
                <div className="card-type">{curEle.category}</div>
                <div className="card-title">{curEle.name}</div>
                <div className="card-description">{curEle.description}</div>
                <img src={curEle.image} alt={curEle.name} className="card-image"/> {/* installed this to run curEle.img -> npm install --save-dev url-loader file-loader*/}
                <div className="order-now">Order Now</div>
             </div>
             </>
             );
            })}
        </>
    )
}

export default Card
