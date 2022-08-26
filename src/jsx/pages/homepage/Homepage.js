import React from 'react';
import '../../../sass/homepage/Homepage.css'
function Homepage(props) {
    return (
        <div id='Homepage'>
            <Section1></Section1>
            <Section2></Section2>
            <Section3></Section3>
            <Section4></Section4>
            <Section5></Section5>
            <Section6></Section6>
            <Section7></Section7>
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
                <div className="body">
                    <div className="content">
                        <div className="content_title">
                            <img height={85} width={85} src={require('../../../assets/icons/icon2.png')} alt="icon" />
                            <span>Play To Earn</span>
                            <img height={85} width={85} src={require('../../../assets/icons/icon1.png')} alt="icon" />

                        </div>
                        <div className="content_description">
                            <p>
                                After defeating your opponent (on Boss Mode or PVP), they will drop an amount of coins that can be accumulated to buy new heroes or other game items.
                            </p>
                        </div>
                    </div>
                    <div className="content">
                        <div className="content_title">
                            <img src={require('../../../assets/icons/icon3.png')} alt="icon" />
                            <span>Staking</span>
                            <img src={require('../../../assets/icons/icon4.png')} alt="icon" />
                            <img className='coming_soon_icon' src={require('../../../assets/icons/icon5.png')} alt="icon" />
                        </div>
                        <div className="content_description">
                            <p>
                                Stake your "BCOMP" tokens to earn fixed APY profits and still be able to participate in new holder-exclusive launches within the Bit Comp LaunchPad.

                            </p>
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <button className="btn_more">
                        READ MORE ON
                        OUR WHITEPAPER
                    </button>
                </div>
            </div>
        </div>
    </section>
}

const Section4 = () => {
    return (
        <section id="Section4">
            <div className="section_title section_global_title">
                <img src={require('../../../assets/homepage/t.png')} alt="img" />
                <span>HOW <br />
                    TO PLAY</span>
            </div>

            <div className="body">
                <p className="paragraph">
                    After defeating your opponent (on Boss Mode or PVP), they will drop an amount of coins that can be accumulated to buy new heroes or other game items.
                    <br /><br />
                    Now, to help them, you must assemble a team up to 15 Heroes, and battle in 2 different ways
                </p>
                <div className="card_wrapper">
                    <div className="card">
                        <img className='card_bg' src={require('../../../assets/homepage/card_bg.png')} alt="img" />
                        <img className='card_bg_helper' src={require('../../../assets/homepage/card_bg_helper.png')} alt="img" />
                        <div className="card_content">
                            <h3 className="title">
                                Boss Mode (PVE)
                            </h3>
                            <p>
                                In this mode, 5 of your heroes will battle against 1 Boss. Each of them have their power and characteristics, so you must be smart in choosing your team.
                            </p>
                        </div>
                    </div>
                    <div className="card card_2">
                        <img className='card_bg' src={require('../../../assets/homepage/card_bg2.png')} alt="img" />
                        <img className='card_bg_helper card_bg_helper2' src={require('../../../assets/homepage/card_bg_helper2.png')} alt="img" />
                        <div className="card_content">
                            <h3 className="title">
                                Player vs. Player Mode (PVP)
                            </h3>
                            <p>
                                In this mode, 5 of your heroes will battle against 5 heroes of another user. Here, you can choose which enemy to attack and which of your Heroes will deliver the blow!
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer" >
                <button>
                    <img src={require('../../../assets/homepage/more_bit_royale.png')} alt="img" />
                </button>
            </div>
        </section>
    )
}
const Section5 = () => {
    const section_object = [
        {
            id: 1,
            title: 'Heroes',
            img: require('../../../assets/homepage/heroes.gif'),
            description: `Each hero comes from a CHEST, and they can come in different classes with a different level of Attack and Health:`,
            footer_list: <ul>
                <li style={{ '--color': 'rgba(167, 167, 167, 1)' }}>
                    Common
                </li>
                <li style={{ '--color': 'rgba(212, 147, 49, 1)' }}>
                    Uncommon
                </li>
                <li style={{ '--color': 'rgba(248, 49, 120, 1)' }}>
                    Rare
                </li>
                <li style={{ '--color': 'rgba(35, 242, 255, 1)' }}>
                    Mythical
                </li>
                <li style={{ '--color': 'rgba(235, 227, 44, 1)' }}>
                    Ultimate
                </li>
            </ul>
        },
        {
            id: 2,
            title: 'Trainers ',
            img: require('../../../assets/homepage/trainers.gif'),
            description: `Trainers also come inside CHESTS and are divided into 3 classes, each reducing a portion of a hero’s recovering time:`,
            footer_list: <ul>
                <li style={{ '--color': 'rgba(167, 167, 167, 1)' }}>
                    Common
                </li>

                <li style={{ '--color': 'rgba(248, 49, 120, 1)' }}>
                    Rare
                </li>
                <li style={{ '--color': 'rgba(62, 151, 255, 1)' }}>
                    Legendary
                </li>

            </ul>
        },
        {
            id: 3,
            title: <> Training Camp <small>(Coming Soon)</small></>,
            img: require('../../../assets/homepage/training.png'),
            description: `A Training Camp is made to increase the amount of Heroes in your team and can be divided into 3 classes:`,
            footer_list: <ul>
                <li style={{ '--color': 'rgba(167, 167, 167, 1)' }}>
                    Small
                </li>

                <li style={{ '--color': 'rgba(248, 49, 120, 1)' }}>
                    Medium
                </li>
                <li style={{ '--color': 'rgba(255, 204, 0, 1)' }}>
                    Large
                </li>
            </ul>
        },
    ]
    return (
        <section id="Section5">
            <div className="section_title section_global_title">
                <img src={require('../../../assets/homepage/t.png')} alt="img" />
                <span>NFTs</span>
            </div>
            <div className="section_body">
                <div className="card_wrapper">
                    {
                        section_object.map(v => {
                            return (
                                <div key={v.id} className="nft_card">
                                    <div className="card_title">
                                        <img src={v.img} alt="img" />
                                        <h3>
                                            {v.title}
                                        </h3>
                                    </div>
                                    <div className="break"></div>
                                    <div className="card_body">
                                        <p>
                                            {v.description}
                                        </p>
                                    </div>
                                    <div className="card_footer">
                                        {v.footer_list}
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>


                <div className="btn_wrapper" >
                    <button className="btn_nft">
                        <img src={require('../../../assets/homepage/buy_nft.png')} alt="img" />
                        <span>
                            BUY NFT
                        </span>
                    </button>
                </div>
            </div>

            <div className="section_body_slider">
                <SliderCard></SliderCard>

                <div className="break"></div>
            </div>
        </section>
    )
}

const SliderCard = () => {
    const card_object = {
        row1: [
            {
                id: 1,
                img: require('../../../assets/slider/card1.gif'),
                name: 'Knight'
            },
            {
                id: 2,
                img: require('../../../assets/slider/card2.gif'),
                name: 'Ninja'
            },
            {
                id: 3,
                img: require('../../../assets/slider/card3.gif'),
                name: 'OGRE'
            },
            {
                id: 4,
                img: require('../../../assets/slider/card4.gif'),
                name: 'PIRATE'
            },
            {
                id: 5,
                img: require('../../../assets/slider/card5.gif'),
                name: 'Indian'
            },
        ],
        row2: [
            {
                id: 1,
                img: require('../../../assets/slider/card6.gif'),
                name: 'witch'
            },
            {
                id: 2,
                img: require('../../../assets/slider/card7.gif'),
                name: 'HUNTER'
            },
            {
                id: 3,
                img: require('../../../assets/slider/card8.gif'),
                name: 'ROBOT'
            },
            {
                id: 4,
                img: require('../../../assets/slider/card9.gif'),
                name: 'Fairy'
            },
            {
                id: 5,
                img: require('../../../assets/slider/card10.gif'),
                name: 'Lella'
            },
        ]
    }
    return (
        <div id="sliderCard">
            <div className="card_wrapper">
                {
                    card_object.row1.map(v => {
                        return (
                            <div className="card" key={v.id}>
                                <div className="title">
                                    <img src={v.img} alt="" />
                                </div>
                                <div className="body">
                                    <button className="card_btn">
                                        <img src={require('../../../assets/homepage/btn_bg.png')} alt="img" />
                                        <span>{v.name}</span>
                                    </button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

            <div className="card_wrapper">
                {
                    card_object.row2.map(v => {
                        return (
                            <div className="card" key={v.id}>
                                <div className="title">
                                    <img src={v.img} alt="" />
                                </div>
                                <div className="body">
                                    <button className="card_btn">
                                        <img src={require('../../../assets/homepage/btn_bg.png')} alt="img" />
                                        <span>{v.name}</span>
                                    </button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

const Section6 = () => {
    const section_object = [
        {
            id: 1,
            title: `1ST QUARTER
            OF 2022
            `,
            list: <ul>
                <li>
                    Project Concept ✅
                </li>
                <li>
                    First Version of the Website ✅
                </li>
                <li>
                    Star developing the Token and the NFT Game ✅
                </li>
            </ul>,
        },
        {
            id: 2,
            title: `2ND QUARTER
            OF 2022
            `,
            list: <ul>
                <li>
                    SecondVersion of the Website ✅
                </li>
                <li>
                    Star NFT Sale ✅
                </li>
                <li>
                    Private Sale ✅
                </li>
                <li>
                    Marketing Campaign ✅
                </li>
                <li>
                    IDO/Public Sale ✅
                </li>
            </ul>,
        },
        {
            id: 3,
            title: `3RD QUARTER
            OF 2022
            `,
            list: <ul>
                <li>
                    Beta Test NFT Game 🔜
                </li>
                <li>
                    Launch NFT Game 🔜
                </li>
                <li>
                    Create LaunchPad Website 🔜
                </li>
                <li>
                    Launch Staking
                </li>
                <li>
                    System 🔜
                </li>
            </ul>,
        },
        {
            id: 4,
            title: `4TH QUARTER
            OF 2022
            `,
            list: <ul>
                <li>
                    Community Events 🔜
                </li>
                <li>
                    Launch Mobile Version🔜
                </li>
                <li>
                    Monetization of the Website and other Social Networks 🔜
                </li>
                <li>
                    NFT MarketPlace 🔜
                </li>
            </ul>,
        },
        {
            id: 5,
            title: `1ST QUARTER
            OF 2023
            `,
            list: <ul>
                <li>
                    New concept projects for BitComp 🔜
                </li>
                <li>
                    Launch official Bit Compr Netwo12   `rk (Bit Social) 🔜
                </li>
                <li>
                    Research Startups for BitComp LaunchPad 🔜
                </li>
            </ul>,
        },
    ]
    return (
        <section id="Section6">
            <img src={require('../../../assets/homepage/roadmap_draw1.png')} alt="" className="roadmap_draw1" />
            <img src={require('../../../assets/homepage/roadmap_draw2.png')} alt="" className="roadmap_draw2" />
            <div className="section_title">
                <img src={require('../../../assets/homepage/roadmap_title.png')} alt="img" />
            </div>
            <div className="section_body">
                <div className="roadmap_card_wrapper">
                    {
                        section_object.map(v => {
                            return (
                                <div className="card" key={v.id}>
                                    <div className="title">
                                        <img className='title_r' src={require('../../../assets/homepage/r.png')} alt="img" />
                                        <img className='title_s' src={require('../../../assets/homepage/s.png')} alt="img" />
                                        <span className="content">
                                            {v.title}
                                        </span>
                                    </div>
                                    <div className="body">
                                        {v.list}
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        </section>
    )
}

const Section7 = () => {
    const section_object = [
        {
            id: 1,
            img: '',
            title: 'Rafaela Nunes',
            role: 'FOUNDER',
            description: `Graduated from UNIFOR-MG and cryptocurrency enthusiast since 2017, Rafaela is the creator and founder of Bit Comp, idealizing to create an innovative and audacious project.`,
        },
        {
            id: 2,
            img: '',
            title: 'Jaime Caetano',
            role: 'CEO',
            description: `Graduated in Production Engineering from UNIFOR-MG, with experience in the financial and crypto markets since 2016, Jaime is the CEO and responsible for the administration of the project.`,
        },
        {
            id: 3,
            img: '',
            title: 'Dmitry Eremenko',
            role: 'CBD',
            description: `An expert in solidity and blockchain, Dmitry is responsible for Web3 development and project backend.`,
        },
        {
            id: 4,
            img: '',
            title: 'João Pedro',
            role: 'Visual Artist',
            description: `Specialist in illustrations and 2D arts, João is the graphic artist of much of the project.`,
        },
        {
            id: 5,
            img: '',
            title: 'Lorena Mota',
            role: 'PIXELART ARTIST',
            description: `Lorena is responsible for creating the design of all characters (NFTs) in the project.`,
        },
    ]
    return (
        <section id="Section7">
            <div className="section_title">
                GET TO KNOW
                OUR TEAM
            </div>
            <div className="section_body">
                <div className="team_card_wrapper">
                    {
                        section_object.map(v => {
                            return (
                                <div className="card" key={v.id}>
                                    <div className="title"></div>
                                    <div className="body">
                                        <h3>
                                            {v.title}
                                        </h3>
                                        <strong>{v.role}</strong>
                                        <p>
                                            {v.description}
                                        </p>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>


            </div>
            <div className="section_footer">
                <img src={require('../../../assets/homepage/welcome.png')} alt="img" />
                <p>
                    Welcome my royal friend!
                    <br /><br />
                    In the land, we are fighting a perverse King who hates Magical Creatures!
                    <br /><br />
                    I’m sure you’re a brave soul who wants the good to prevail.
                    <br /><br />
                    So join the resistance and become part of a community!

                </p>

                <SocialList></SocialList>
            </div>
        </section>
    )
}


const SocialList = () => {
    const list_object = [
        {
            id: 1,
            name: 'Twitter',
            img: require('../../../assets/icons/twitter.png'),
            link: '#',
        },
        {
            id: 2,
            name: 'Discord',
            img: require('../../../assets/icons/discord.png'),
            link: '#',
        },
        {
            id: 3,
            name: 'telegram',
            img: require('../../../assets/icons/telegram.png'),
            link: '#',
        },
        {
            id: 4,
            name: 'Instragram',
            img: require('../../../assets/icons/instragram.png'),
            link: '#',
        },
    ]
    return (
        <ul id="social_list">
            {
                list_object.map(v => {
                    return (
                        <li key={v.id}>
                            <a href={v.link}>
                                <img src={v.img} alt={v.name} />
                            </a>
                        </li>
                    )
                })
            }
        </ul>
    )
}