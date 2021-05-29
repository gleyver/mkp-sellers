import React from 'react';

function Header(props) {
    return (
        <div className="header">
            <div className="header-logo">
                <div className="logo">LOGO</div>
                <div className="head-sup-button">
                    <a className="btn-my-dashboard" href="/dashboard"> Meu DashBoard </a>
                </div>
            </div>
            <div className="support-search">
            <input type="text" id="site-searc" placeHolder="Geladeira Brastemp" className="search" name="search"
                aria-label="Search"/>
            </div>
            <svg viewBox="0 0 1440 120" className="wave"><path d="M1440,21.2101911 L1440,120 L0,120 L0,21.2101911 C120,35.0700637 240,42 360,42 C480,42 600,35.0700637 720,21.2101911 C808.32779,12.416393 874.573633,6.87702029 918.737528,4.59207306 C972.491685,1.8109458 1026.24584,0.420382166 1080,0.420382166 C1200,0.420382166 1320,7.35031847 1440,21.2101911 Z"></path></svg>
        </div>
    );
}

export default Header;