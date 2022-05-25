import React from "react";
import {Button} from "./Button";
import './Footer.css';
import {Link} from "react-router-dom";

function Footer() {
    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
                <p className='footer-subscription-heading'>
                    Subscribe to my news & updates
                </p>
                <p className='footer-subscription-text'>
                    You can unsubscribe at any time.
                </p>
                <div className='input-areas'>
                    <form>
                        <input type='email' name='email' placeholder='Your email' className='footer-input'/>
                        <Button buttonStyle='btn--outline'>Subscribe</Button>
                    </form>
                </div>
            </section>
            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>About Us</h2>
                        <Link to='/sign-up'>How it works</Link>
                        <Link to='/courses'>Terms and Conditions</Link>
                    </div>
                </div>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>Contact Us</h2>
                        <Link to='/sign-up'>CEO</Link>
                        <Link to='/courses'>CTO</Link>
                    </div>
                </div>
            </div>
            <section className='social-media'>
                <div className='social-media-wrap'>
                    <div className='footer-logo'>
                        <Link to='/' className='social-logo'>
                            DB <i className='fa-solid fa-graduation-cap' />
                        </Link>
                    </div>
                    <small className='website-rights'>DB © 2022</small>
                    <div className='social-icons'>
                        <Link to='/' className='social-icon-link facebook' target='_blank' arial-label='Facebook'>
                            <i className='fab fa-facebook-f' />
                        </Link>
                        <Link to='/' className='social-icon-link instagram' target='_blank' arial-label='Instagram'>
                            <i className='fab fa-instagram' />
                        </Link>
                        <Link to='/' className='social-icon-link youtube' target='_blank' arial-label='YouTube'>
                            <i className='fab fa-youtube' />
                        </Link>
                        <Link to='/' className='social-icon-link linkedin' target='_blank' arial-label='LinkedIn'>
                            <i className='fab fa-linkedin' />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer;