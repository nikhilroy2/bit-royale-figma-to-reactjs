import React from 'react';
import '../../../sass/homepage/Homepage.css'
function Homepage(props) {
    return (
        <div id='Homepage'>
            <Section1></Section1>
        </div>
    );
}

export default Homepage;

const Section1 = () => {
    return <section id="Section1">
        <img className='circle_img' src={require('../../../assets/homepage/BitRoyaleWhiteSection.png')} alt="" />
        <div>
            <img src={require('../../../assets/homepage/battle.png')} alt="img" />
        </div>
        <p>
            Be strategic, assemble your Heroes, collect NFTs,
            earn rewards and save the Bit Royale Kingdom!
        </p>

        <button className="btn_know">
            KNOW MORE!
        </button>
    </section>
}