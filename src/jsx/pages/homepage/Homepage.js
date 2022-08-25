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
        <div className="section_title section_global_title">
            <img src={require('../../../assets/homepage/t.png')} alt="img" />
            <span>TOKENOMICS</span>
        </div>
        <div className="section_body">
            <p className="paragraph">
                With an innovative savings and reinvestment system, we are different from all current projects on the Blockchain!
                <br /><br />
                As you play, it will be necessary to reactivate your NFTs with "BUSD" after a certain level of profit. That means there’ll always be a BUSD balance generated for the project, Which will be used to buy back the "BComp" token within the DEX's, creating stability for the token.
                <br /><br />
                With the purchased value of the "BComp" token, the balance will be redirected to the reward pool wallet and some tokens can also be burned, creating a shortage for the "BComp" token.

            </p>

            <div className="buyback_wrapper">
                <img src={require('../../../assets/homepage/buyback_img.png')} alt="img" />
            </div>

            <div className="content_1_wrapper">
                <div className="bcomp_wrapper">
                    <div className="title">
                        <img src={require('../../../assets/homepage/bcomp.png')} alt="img" />
                    </div>
                    <div className="body">
                        <p className="bcomp_paragraph">
                            The BComp token is BCOMP is the official token of the entire Bit Comp project, involving game NFT, LaunchPad and future projects.
                            <br /><br />
                            It is issued on Binance Smart Chain and aims to create a strong and sustainable token in the long term, generating stability and income for its investors.

                        </p>
                    </div>
                </div>
                <div className="buy_bcomp_wrapper">
                    <img src={require('../../../assets/homepage/buy_bcomp.png')} alt="img" />
                    <button className="buy_bcomp_btn">
                        <img src={require('../../../assets/homepage/buy_bcomp_btn.png')} alt="img" />
                    </button>
                </div>
            </div>
            <div className="how_to_earn_wrapper">
                <div className="section_global_title">
                    <img className='chest_img' src={require('../../../assets/homepage/chest.png')} alt="img" />
                    <div className="content">
                        <img src={require('../../../assets/homepage/t.png')} alt="img" />
                        <span>HOW TO <br /> EARN?
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </section>
}