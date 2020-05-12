import React , {useEffect}from 'react'
import { Row, Col } from 'react-bootstrap'
import AOS from 'aos';
import '../styles/navbar.scss'

function Footer() {

  useEffect(() => {
    AOS.init({
      once: true,
      easing: 'ease-in-out',
      duration: 800,
    });
  }, []);


  return (
    <>
      <div id="backtotop" className="phone-navbar backtotop" data-aos="fade-in" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}></div>
      <footer className="footer navbar-fixed-bottom">
        <hr className="hr-white"></hr>
        <div className="footer-width">
          <Row>
            <Col md={4} className="footer-deco-left"></Col>
            <Col md={4}>
              <Row>
                <Col xs={12} md={12} className="footer-logo"></Col>
                <Col xs md={4} className="footer-fb"></Col>
                <Col xs md={4} className="footer-ig"></Col>
                <Col xs md={4} className="footer-twitter"></Col>
              </Row>
            </Col>
            <Col md={4} className="footer-deco-right"></Col>
          </Row>
        </div>
      </footer>
    </>
  )
}

export default Footer