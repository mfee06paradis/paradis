import React from 'react'
import { Row, Col } from 'react-bootstrap'
import '../../styles/discount.scss'
import img10 from '../../images/discount/10.png'
import img11 from '../../images/discount/11.png'
import img12 from '../../images/discount/12.png'
import img13 from '../../images/discount/13.png'
import bgimg from '../../images/discount/bg.png'
import ControlledCarousel from './Discav'

function List() {
    return (
        <>
        <ControlledCarousel />
            <div className="container">
                <div className="card-deck ">
                    <Row >
                        <Col xs={12} md={4} >
                            <div className="card">
                                <img
                                    src={img10}
                                    className="card-img-top pdimg"
                                    alt="..."
                                />
                                <img
                                    src={bgimg}
                                    className="card-img-top bgimg"
                                    alt="..."
                                />

                                <div className="card-body">
                                    <h5 className="card-title">M.A.C</h5>
                                    <h4 className="card-text">磁力眼影</h4>
                                    <h4 className="card-text">STAIRS TO THE STARS</h4>
                                    <p classame="card-text">NTD 880元</p>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} md={4} >
                            <div className="card">
                                <img
                                    src={img11}
                                    className="card-img-top pdimg"
                                    alt="..."
                                />
                                <img
                                    src={bgimg}
                                    className="card-img-top bgimg"
                                    alt="..."
                                />
                                <div className="card-body">
                                    <h5 className="card-title">M.A.C</h5>
                                    <h4 className="card-text">磁力眼影</h4>
                                    <h4 className="card-text">STARS ALIGN</h4>
                                    <p classame="card-text">NTD 880元</p>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} md={4} >
                            <div className="card">
                                <img
                                    src={img12}
                                    className="card-img-top pdimg"
                                    alt="..."
                                />
                                <img
                                    src={bgimg}
                                    className="card-img-top bgimg"
                                    alt="..."
                                />
                                <div className="card-body">
                                    <h5 className="card-title">M.A.C</h5>
                                    <h4 className="card-text">磁力眼影</h4>
                                    <h4 className="card-text">SWING ON A STAR</h4>
                                    <p classame="card-text">NTD 880元</p>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} md={4} >
                            <div className="card">
                                <img
                                    src={img13}
                                    className="card-img-top pdimg"
                                    alt="..."
                                />
                                <img
                                    src={bgimg}
                                    className="card-img-top bgimg"
                                    alt="..."
                                />
                                <div className="card-body">
                                    <h5 className="card-title">M.A.C</h5>
                                    <h4 className="card-text">磁力眼影</h4>
                                    <h4 className="card-text">WISHFUL THINKING</h4>
                                    <p classame="card-text">NTD 880元</p>
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