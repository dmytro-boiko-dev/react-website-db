import React from 'react';
import '../App.css';
import {Button} from "./Button";
import './HeroSection.css';

export function HeroSection() {
    return (
        <div className='hero-container'>

            <video src="/videos/v13.mp4"
                   autoPlay={true}
                   muted={true}
                   controls={false}
                   loop={true}
                   playsInline={true}
            />

            {/*<video*/}
            {/*    autoPlay={true}*/}
            {/*    muted={true}*/}
            {/*    controls={false}*/}
            {/*    loop={true}*/}
            {/*    playsInline={true}*/}
            {/*>*/}
            {/*    <source src="/videos/v13.mp4" type="video/mp4"/>*/}
            {/*</video>*/}

            <h1>DIANA BOIKO</h1>
            <p>CELTA certified English Teacher</p>
            <div className='hero-btns'>
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>ABOUT ME</Button>
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>MY COURSES
                    <i className='far fa-play-circle'/>
                </Button>
            </div>
        </div>

    );
}

export default HeroSection;