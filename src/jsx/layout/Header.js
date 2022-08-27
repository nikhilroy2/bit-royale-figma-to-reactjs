import React, { useState, useEffect, useContext } from 'react';
import { ResolutionContext } from '../../App';
import '../../sass/header/header.css'
function Header(props) {
    const isDesktop = useContext(ResolutionContext);
    const [isScroll, setIsScroll] = useState(false);

    window.addEventListener('scroll', event => {
        //console.log(window.scrollY)
        if (window.scrollY > 0) {
            setIsScroll(true);
        }
    })
    return (

        <header id={isDesktop ? 'Header' : 'mobile_header'}>
            {
                isDesktop ? <ul className="header_list">
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

                    <li className='logo_list'>
                        <a href="#" className={`logo_action ${isScroll ? 'logo_animated' : ''}`}>
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
                </ul> : <div className="mobile_header_list">

                </div>
            }
        </header>
    );
}

export default Header;