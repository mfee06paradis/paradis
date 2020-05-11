import React, { useState, useEffect } from 'react'
import AOS from 'aos';


import { Carousel, Row, Col } from 'react-bootstrap'
import '../styles/home.scss'

function ControlledCarousel() {
  const [index, setIndex] = useState(0)

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex)
  }

  useEffect(() => {
    AOS.init({
      once: true,
      easing: 'ease-in-out',
      duration: 800,
    });
  }, []);

  

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <div className="FirstSlide"></div>
        <Carousel.Caption>
          <h1>Mother's Day</h1>
          <h4>母親節新品</h4>
          <p>
            宛如流星輕吻上了雙唇 YSL<br></br>
            獨家雙層夾星科技，外層為濃郁純色複方，<br></br>
            內芯為星漾顯白粒子，能輕鬆打造極顯白的光潤美唇
          </p>
          <button>馬上訂購</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="SecondSlide"></div>
        <Carousel.Caption>
        <h1>Mother's Day</h1>
          <h4>母親節新品</h4>
          <p>
            宛如流星輕吻上了雙唇 YSL<br></br>
            獨家雙層夾星科技，外層為濃郁純色複方，<br></br>
            內芯為星漾顯白粒子，能輕鬆打造極顯白的光潤美唇
          </p>
          <button>馬上訂購</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="ThirdSlide"></div>

        <Carousel.Caption>
        <h1>Mother's Day</h1>
          <h4>母親節新品</h4>
          <p>
            宛如流星輕吻上了雙唇 YSL<br></br>
            獨家雙層夾星科技，外層為濃郁純色複方，<br></br>
            內芯為星漾顯白粒子，能輕鬆打造極顯白的光潤美唇
          </p>
          <button>馬上訂購</button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

function Home() {
  return (
    <>
      <ControlledCarousel />
      {/* second */}
      <div className="bg-white view-height">
        <hr className="hr-pink"></hr>
        <div className="home-second">
          {/* title */}
          <div className="main-title-before"></div>
          <div className="main-title">
            <h2>Best Hit</h2>
            <h4>熱賣商品</h4>
          </div>
          <div className="main-title-after"></div>
        </div>
        <main data-aos="fade-in" data-aos-duration="400">
          <Row xs={1} md={3} className="home-second-width">
            <Col className="home-second-hover">
              <div className="home-second-top">
                <p className="home-second-top-text">TOP1</p>
              </div>
              <div className="home-second-item">
                <img src={require('../images/home/Home-2-1.png')} alt="Background"/>
              </div>
              <div className="home-second-item-text">
                <h3>PressedPowder</h3>
                <p>蜜粉餅</p>
              </div>
            </Col>
            <Col className="home-second-hover">
              <div className="home-second-top">
                <p className="home-second-top-text">TOP2</p>
              </div>
              <div className="home-second-item">
                <img src={require('../images/home/Home-2-1.png')} alt="Background"/>
              </div>
              <div className="home-second-item-text">
                <h3>PressedPowder</h3>
                <p>蜜粉餅</p>
              </div>
            </Col>
            <Col className="home-second-hover">
              <div className="home-second-top">
                <p className="home-second-top-text">TOP3</p>
              </div>
              <div className="home-second-item">
                <img src={require('../images/home/Home-2-3.png')} alt="Background"/>
              </div>
              <div className="home-second-item-text">
                <h3>PressedPowder</h3>
                <p>蜜粉餅</p>
              </div>
            </Col>
          </Row>
        </main>
      </div>
      {/* third */}
      <div className="bg-pink view-height">
      <hr className="hr-white"></hr>
      <div class="pc-navbar"><br></br></div>
        <Row  className="home-third-width" data-aos="fade-in" data-aos-duration="400">
          <Col id="home-youtube" xs={12} md={8}>
          <div
              className="video Home-vedio"
              style={{
                position: "relative",
                paddingBottom: "56.25%" /* 16:9 */,
                paddingTop: 25,
                height: 0
              }}
            >
              <iframe className="Home-youtube"
                style={{
                  position: "absolute",
                  top: 0,
                  left:0,
                  width: "95%",
                  height: "95%"
                }}
                src={`https://www.youtube.com/embed/AO8AYcO-TUU`}
                frameBorder="0"
              />
            </div>
          </Col>
          <Col xs={12}md={3}>
          <div className="context-side home-context-side">
                <div className="context-side-before"></div>
                <div className="context-side-mid">
                  <div className="sub-title-deco">
                    <div className="sub-title">
                      <p className="sub-title-eng">Video</p>
                      <p className="sub-title-chs">網紅試妝</p>
                    </div>
                  </div>
                  <div className="home-context-side-text">
                    由網紅Youtuber親自示範<br></br>
                    M.A.C子彈唇膏效果<br></br>
                    <button className="btn-white">立即選購</button>
                  </div>
                </div>
                <div className="context-side-after"></div>
              </div>
          </Col>
        </Row>
      </div>
    </>
  )

}

export default Home
