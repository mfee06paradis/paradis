import React from 'react'
import { Row, Col } from 'react-bootstrap'
import '../../styles/discount.scss'
import bgimg from '../../images/discount/bg.png'
import img16 from '../../images/discount/16.png'
import img17 from '../../images/discount/17.png'
import img18 from '../../images/discount/18.png'
import img19 from '../../images/discount/19.png'
import img20 from '../../images/discount/20.png'
import img21 from '../../images/discount/21.png'
import ControlledCarousel from './Discav'
function List() {
    return (
        <>
        <ControlledCarousel />
            <div className="container">
                <div className="card-deck">
                    <Row >
                        <Col xs={12} md={4} >
                            <div className="card">
                                <img
                                    src={img16}
                                    className="card-img-top pdimg"
                                    alt="..."
                                />
                                <img
                                    src={bgimg}
                                    className="card-img-top bgimg"
                                    alt="..."
                                />
                                <div className="card-body">
                                    <h5 className="card-title">NARS</h5>
                                    <h4 className="card-text">妝點甜心遮瑕蜜</h4>
                                    <h4 className="card-text">CHANTILLY</h4>
                                    <p classame="card-text">NTD 1100元</p>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} md={4} >
                            <div className="card">
                                <img
                                    src={img17}
                                    className="card-img-top pdimg"
                                    alt="..."
                                />
                                <img
                                    src={bgimg}
                                    className="card-img-top bgimg"
                                    alt="..."
                                />
                                <div className="card-body">
                                    <h5 className="card-title">NARS</h5>
                                    <h4 className="card-text">裸光奇肌蜜粉餅</h4>
                                    <h4 className="card-text">FLESH</h4>
                                    <p classame="card-text">NTD 1550元</p>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} md={4} >
                            <div className="card">
                                <img
                                    src={img18}
                                    className="card-img-top pdimg"
                                    alt="..."
                                />
                                <img
                                    src={bgimg}
                                    className="card-img-top bgimg"
                                    alt="..."
                                />
                                <div className="card-body">
                                    <h5 className="card-title">NARS</h5>
                                    <h4 className="card-text">驚綺絨彩筆</h4>
                                    <h4 className="card-text">GOLSHAN</h4>
                                    <p classame="card-text">NTD 1100元</p>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} md={4} >
                            <div className="card">
                                <img
                                    src={img19}
                                    className="card-img-top pdimg"
                                    alt="..."
                                />
                                <img
                                    src={bgimg}
                                    className="card-img-top bgimg"
                                    alt="..."
                                />
                                <div className="card-body">
                                    <h5 className="card-title">NARS</h5>
                                    <h4 className="card-text">絕對經典唇膏</h4>
                                    <h4 className="card-text">HONOLULU HONEY</h4>
                                    <p classame="card-text">NTD 950元</p>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} md={4} >
                            <div className="card">
                                <img
                                    src={img20}
                                    className="card-img-top pdimg"
                                    alt="..."
                                />
                                <img
                                    src={bgimg}
                                    className="card-img-top bgimg"
                                    alt="..."
                                />
                                <div className="card-body">
                                    <h5 className="card-title">NARS</h5>
                                    <h4 className="card-text">ALL IN ONE亮彩膏</h4>
                                    <h4 className="card-text">MAUI</h4>
                                    <p classame="card-text">NTD 1350元</p>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} md={4} >
                            <div className="card">
                                <img
                                    src={img21}
                                    className="card-img-top pdimg"
                                    alt="..."
                                />
                                <img
                                    src={bgimg}
                                    className="card-img-top bgimg"
                                    alt="..."
                                />
                                <div className="card-body">
                                    <h5 className="card-title">NARS</h5>
                                    <h4 className="card-text">晶采全效凝膠</h4>
                                    <h4 className="card-text">ORGASM</h4>
                                    <p classame="card-text">NTD 1100元</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    )
}

export default List