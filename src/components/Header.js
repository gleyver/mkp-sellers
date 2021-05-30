import React from 'react';

function Header(props) {
    return (
        <div className="header">
            <div className="header-logo">
                <div className="logo"></div>
                <div className="head-sup-button">
                    <a className="btn-my-dashboard"  target="_blank" href="https://dataplatform.cloud.ibm.com/dashboards/e6fb6dc6-555f-4e43-bdc0-a36b82e24111/view/5006c12164952a9010dddce407cd79067f61740bb0bbd551d5817b4909662797f36140c5c82b4f58d3175363faea43509d"> Meu Indicadores </a>
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