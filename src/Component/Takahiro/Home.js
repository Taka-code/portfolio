import React from "react"
import "./Home.css"
import hero from "../pic/hero.png"
import skill1 from "../pic/skill1.png"
import skill2 from "../pic/skill2.png"
import skill3 from "../pic/skill3.png"
import { Typewriter } from "react-simple-typewriter"

const Home = () => {
    return (
        <>
            <section className='hero' id='home'>
                <div className='container f_flex top'>
                    <div className='left top'>
                        <h3>My portfolio site.</h3>
                        <h1>
                            見てくれ。僕は、<span>ココだ。</span>
                        </h1>
                        {/* <h2>答えがないからこそ</h2> */}
                        <h2>
                            僕は、『<span>
                                <Typewriter words={["Design", "Art", "Family", "Friend", "Movie", "Food", "Game", "君", ""]} loop cursor cursorStyle='|' typeSpeed={70} deleteSpeed={50} delaySpeed={2000} />
                            </span>』が好きだ。

                        </h2>



                        <div className='hero_btn d_flex'>
                            <div className='col_1'>
                                <h4>僕と貴方が、ここで繋がる。</h4>
                                <div className='button'>
                                    <a href="https://www.facebook.com/takahiro.yamamoto.311/">
                                        <button className='btn_shadow'>
                                            <i class='fab fa-facebook-f'></i>
                                        </button>
                                    </a>
                                    <a href="https://www.instagram.com/takahero.5/">
                                        <button className='btn_shadow'>
                                            <i class='fab fa-instagram'></i>
                                        </button>
                                    </a>
                                    <a href="https://github.com/Taka-code">
                                        <button className='btn_shadow'>
                                            <i class="fab fa-github"></i>
                                        </button>
                                    </a>
                                </div>
                            </div>
                            <div className='col_1'>
                                <h4>よく使うもの。</h4>
                                <button className='btn_shadow-skill'>
                                    <img src={skill1} alt='' />
                                </button>
                                <button className='btn_shadow-skill'>
                                    <img src={skill2} alt='' />
                                </button>
                                <button className='btn_shadow-skill'>
                                    <img src={skill3} alt='' />
                                </button>

                                {/* <div className='button'>
                                    <button className='btn_shadow'>
                                        <i class="fab fa-js-square"></i>
                                    </button>
                                    <button className='btn_shadow'>
                                        <i class="fab fa-figma"></i>
                                    </button>
                                    <button className='btn_shadow'>
                                        <i class="fab fa-react"></i>
                                    </button>
                                    <button className='btn_shadow'>
                                        <i class="fab fa-vuejs"></i>
                                    </button>
                                </div> */}
                            </div>
                        </div>
                    </div>
                    <div className='right'>
                        <div className='right_img'>
                            <img src={hero} alt='' />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home
