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
        <Carousel.Caption className="FirstSlide-text">
          <h1>Mother's Day</h1>
          <h4>NARS 裸光奇肌蜜粉餅</h4>
          <p>
            母親節新品 - 一抹持妝<br></br>
            可校正眼皮暗沉與膚色不均，延長後續粉狀
          </p>
          <button>馬上訂購</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="SecondSlide"></div>
        <Carousel.Caption className="SecondSlide-text">
        <h1>Mother's Day</h1>
          <h4>母親節限定八折優惠</h4>
          <p>
            NARS為母親節推出特別優惠<br></br>
            以柔和至飽和的色調呈現柔滑的色彩，整日保持柔順。
          </p>
          <button>馬上訂購</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="ThirdSlide"></div>

        <Carousel.Caption className="ThirdSlide-text">
        <h1>現正優惠</h1>
          <h4>金緻奢華唇膏7折</h4>
          <p>
            芭比波朗最頂級保養概念唇膏，<br></br>
            大膽顯色，持久潤澤，柔滑一抹，<br></br>
            瞬間釋放金緻女人魅力！
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
        <div>
          <Row xs={1} md={3} className="home-second-width">
            <Col className="home-second-hover" data-aos="fade-in" data-aos-duration="400">
              <div className="home-second-top">
                <p className="home-second-top-text">TOP1</p>
              </div>
              <div className="home-second-item">
                <img src={require('../images/home/Home-2-1.png')} alt="Background"/>
              </div>
              <div className="home-second-item-text">
                <h3>ALBATROSS</h3>
                <p>光綻修容盤</p>
              </div>
            </Col>
            <Col className="home-second-hover"  data-aos="fade-in" data-aos-duration="800">
              <div className="home-second-top">
                <p className="home-second-top-text">TOP2</p>
              </div>
              <div className="home-second-item">
                <img src={require('../images/home/Home-2-2.png')} alt="Background"/>
              </div>
              <div className="home-second-item-text">
                <h3>BETTINA</h3>
                <p>絲絨迷霧唇筆</p>
              </div>
            </Col>
            <Col className="home-second-hover" data-aos="fade-in" data-aos-duration="1200">
              <div className="home-second-top">
                <p className="home-second-top-text">TOP3</p>
              </div>
              <div className="home-second-item">
                <img src={require('../images/home/Home-2-3.png')} alt="Background"/>
              </div>
              <div className="home-second-item-text">
                <h3>GET IT ON</h3>
                <p>特霧唇誘</p>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      {/* third */}
      <div className="bg-pink view-height">
      <hr className="hr-white"></hr>
      <div class="pc-navbar"><br></br></div>
        <Row  className="home-third-width">
          <Col id="home-youtube" xs={12} md={8}  data-aos="fade-in" data-aos-duration="400">
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
          <div className="context-side home-context-side"  data-aos="fade-in" data-aos-duration="800">
                <div className="context-side-before"></div>
                <div className="context-side-mid">
                  <div className="sub-title-deco">
                    <div className="sub-title">
                      <p className="sub-title-eng">Video</p>
                      <p className="sub-title-chs">網紅試妝</p>
                    </div>
                  </div>
                  <div className="home-context-side-text">
                    由網紅親自示範<br></br>
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
