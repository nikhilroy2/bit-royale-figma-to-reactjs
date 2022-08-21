import React from 'react';
import '../../sass/header/header.css'
function Header(props) {
    return (
        <header id="Header">
            <ul className="header_list">
                <li>
                    <a href="#">
                        NFT's
                    </a>
                </li>
                <li>
                    <a href="#">
                        Gameplay
                    </a>
                </li>
               
                <li>
                    <a href="#" className='logo_action'>
                        <img src={require('../../assets/icons/BitRoyaleWhite.png')} alt="logo" />
                    </a>
                </li>
                <li>
                    <a href="#">
                        Roadmap
                    </a>
                </li>
                <li>
                    <a href="#">
                        How to Earth
                    </a>
                </li>
            </ul>
        </header>
    );
}

export default Header;