import React from 'react';
import './stylesheet.css';

function Home({ onNavigate }) {
    const backgroundImageStyle = {
        backgroundImage: 'url("https://media.tenor.com/b6FE6drZPbQAAAAd/earth-spin-galaxy.gif")',
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
    };

    function clickedLogin() {
        onNavigate('LoginPage');
    }

    function clickedSignin() {
        onNavigate('SignUp');
    }

    return (
        <div className='Forimage' style={backgroundImageStyle}>
            <header className="header">
                <nav className="navbar">
                    <h2 className="logo"><a href="#">Navigate</a></h2>
                    <input id="menu-toggle" type="checkbox" />
                    <label htmlFor="menu-toggle" id="hamburger-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                            <path d="M3 12h18M3 6h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                    </label>
                    <div className='buttons'>
                        <button onClick={clickedLogin}><span className="button-text">Login</span></button>
                        <button onClick={clickedSignin}><span className="button-text">Sign Up</span></button>
                    </div>
                </nav>
            </header>
            <section className="hero-section">
                <div className="hero">
                    <h2>Discover and Explore</h2>
                </div>
            </section>
        </div>
    );
}

export default Home;
