import React, { useState } from 'react'
import './MenuCard.css'
import Menu from './api/MenuApi.js';
import Card from './Card.js'
const original = Menu;
function MenuCard() {
    const [menuData, setMenuData] = useState(Menu);
    
    function breakfast() {
        let i=0,j=0,update=[];
        for(i=0;i<original.length;i++){
            if(original[i].category === "Breakfast") update[j++] = original[i]
        }
        setMenuData(update)
    }
    function lunch() {
        let i=0,j=0,update=[];
        for(i=0;i<original.length;i++){
            if(original[i].category === "Lunch") update[j++] = original[i]
        }
        setMenuData(update)
    }
    function dinner() {
        let i=0,j=0,update=[];
        for(i=0;i<original.length;i++){
            if(original[i].category === "Dinner") update[j++] = original[i]
        }
        setMenuData(update)
    }
    function all() {
        setMenuData(original)
    }
    return (
        <div className="container">
            <div className="useless"></div>
            <nav className="foodNav">
                <p className="links" onClick={breakfast} >Breakfast</p>
                <p className="links" onClick={lunch} >Lunch</p>
                <p className="links" onClick={dinner} >Dinner</p>
                <p className="links" onClick={all} >All</p>
            </nav>
            <div className="card-container">
                <Card menuData={menuData}/>
            </div>
        </div>
    )
}

export default MenuCard
