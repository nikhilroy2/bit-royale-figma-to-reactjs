import React from 'react';
import '../../../sass/homepage/Homepage.css'
function Homepage(props) {
    return (
        <div id='Homepage'>
            <Section1></Section1>
            <Section2></Section2>
            <Section3></Section3>
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
            <img src={require('../../../assets/homepage/know_more.png')}
                alt="img" />
        </button>
    </section>
}

const Section2 = () => {
    return (
        <section id='Section2'>
            <div className="section_title">
                <img src={require('../../../assets/homepage/section_title_bit.png')} alt="img" />
            </div>
            <div className="section_body">
                <div className="video_frame">
                    <iframe
                        width={560}
                        height={315}
                        src="https://www.youtube.com/embed/p3z-VAwRTtM"
                        title="YouTube video player"
                        frameBorder={0}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen=""
                    />
                </div>
                <div className="content_wrapper">
                    <p className='paragraph'>
                        Bit Royale is the most promising NFT game of 2022!
                        Here, you’ll collect NFT heroes and assemble a team strong enough to defeat other players or bosses and take back the control of the Bit Royal Kingdom from a tyrant and cruel king!
                        <br /><br />
                        To play the game use your “BCOMP” tokens to purchase your NFT heroes, trainers and lands from our P2E game.
                    </p>
                    <button className='btn_more'>
                        <span>
                            MORE ABOUT
                            BIT ROYALE
                        </span>
                    </button>
                </div>
            </div>
        </section>
    )
}

const Section3 = () => {
    return <section id="Section3">

    </section>
}