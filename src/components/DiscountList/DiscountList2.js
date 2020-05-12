import React from 'react'
import { Row, Col } from 'react-bootstrap'
import '../../styles/discount.scss'
import bgimg from '../../images/discount/bg.png'
import img1 from '../../images/discount/1.png'
import img2 from '../../images/discount/2.png'
import img3 from '../../images/discount/3.png'
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
                                    src={img1}
                                    className="card-img-top pdimg"
                                    alt="..."
                                />
                                <img
                                    src={bgimg}
                                    className="card-img-top bgimg"
                                    alt="..."
                                />
                                <div className="card-body">
                                    <h5 className="card-title">Bobbi Brown</h5>
                                    <h4 className="card-text">金緻奢華唇膏</h4>
                                    <h4 className="card-text">英倫女王 YOUR MAJESTY</h4>
                                    <p classame="card-text">NTD 1200元</p>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} md={4} >
                            <div className="card">
                                <img
                                    src={img2}
                                    className="card-img-top pdimg"
                                    alt="..."
                                />
                                <img
                                    src={bgimg}
                                    className="card-img-top bgimg"
                                    alt="..."
                                />
                                <div className="card-body">
                                    <h5 className="card-title">Bobbi Brown</h5>
                                    <h4 className="card-text">金緻奢華唇膏</h4>
                                    <h4 className="card-text">粉紅裸唇 PINK NUDE</h4>
                                    <p classame="card-text">NTD 1200元</p>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} md={4} >
                            <div className="card">
                                <img
                                    src={img3}
                                    className="card-img-top pdimg"
                                    alt="..."
                                />
                                <img
                                    src={bgimg}
                                    className="card-img-top bgimg"
                                    alt="..."
                                />
                                <div className="card-body">
                                    <h5 className="card-title">Bobbi Brown</h5>
                                    <h4 className="card-text">金緻奢華唇膏</h4>
                                    <h4 className="card-text">嫣紅玫瑰 ROSE BLOSSOM</h4>
                                    <p classame="card-text">NTD 1200元</p>
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