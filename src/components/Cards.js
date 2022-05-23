import React from "react";
import CardItem from "./CardItem";
import './Cards.css';

function Cards() {
    return (
        <div className="cards">
            <h1>
                Check out this EPIC destinations!
            </h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                            src="images/img-9.jpg"
                            text="Explore this awesome Mountains"
                            label="Adventure"
                            path="/services"
                        />
                        <CardItem
                            src="images/img-2.jpg"
                            text="Trevel to the awesome islands of New Zealand"
                            label="Trevel"
                            path="/products"
                        />
                    </ul>
                        <ul className="cards__items">
                            <CardItem
                                src="images/img-9.jpg"
                                text="Explore this awesome Mountains"
                                label="Adventure"
                                path="/services"
                            />
                            <CardItem
                                src="images/img-2.jpg"
                                text="Trevel to the awesome islands of New Zealand"
                                label="Trevel"
                                path="/products"
                            />
                            <CardItem
                                src="images/img-2.jpg"
                                text="Trevel to the awesome islands of New Zealand"
                                label="Trevel"
                                path="/products"
                            />
                        </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;