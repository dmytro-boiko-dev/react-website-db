import React from "react";
import CardItem from "./CardItem";
import './Cards.css';

function Cards() {
    return (
        <div className="cards">
            <h1>
                ABOUT MY PRODUCTs
            </h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                            src="images/1_my.jpg"
                            text="My courses description"
                            label="My courses"
                            path="/courses"
                        />
                        <CardItem
                            src="images/2_corp.jpg"
                            text="Events for companies"
                            label="Companies"
                            path="/products"
                        />
                    </ul>
                        <ul className="cards__items">
                            <CardItem
                                src="images/3_it.jpg"
                                text="English for IT engineers"
                                label="IT"
                                path="/courses"
                            />
                            <CardItem
                                src="images/4_small.jpg"
                                text="Lessons for small groups"
                                label="Small groups"
                                path="/products"
                            />
                            <CardItem
                                src="images/5_indi.jpg"
                                text="Individual lessons"
                                label="Individual"
                                path="/products"
                            />
                        </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;