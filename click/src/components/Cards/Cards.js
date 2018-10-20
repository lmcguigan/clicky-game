//import React from "react";
import React from "react";
import "./Cards.css";

const Cards = (props) =>{
        return (
            <div className="card-container">
                {
                   props.fruits.map(function (fruit) {
                        return (
                            <div key={fruit.id} className="fruit-card" data-id={fruit.id} onClick={(event) =>{ props.handleCardClick(event) }}>
                                <img alt={fruit.name} name={fruit.id} src={fruit.image}></img>
                            </div>
                        )
                    })
                }
            </div>
        )
}

export default Cards;