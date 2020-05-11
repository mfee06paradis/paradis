import React from 'react'
import { Row, Col } from 'react-bootstrap'
import '../../styles/discount.scss'
import img4 from '../../images/discount/4.jpg'
import img5 from '../../images/discount/5.jpg'
import img6 from '../../images/discount/6.jpg'
import img7 from '../../images/discount/7.jpg'
import img8 from '../../images/discount/8.jpg'
import img9 from '../../images/discount/9.jpg'

function List() {
    return (
        <>
            <div className="container">
                <div className="card-deck">
                    <Row >
                        <Col xs={12} md={4} >
                            <div className="card">
                                <img
                                    src={img4}
                                    className="card-img-top"
                                    alt="..."
                                />
                                <div className="card-body">
                                    <h5 className="card-title">Bobbi Brown</h5>
                                    <h4 className="card-text">迷戀輕吻唇膏</h4>
                                    <h4 className="card-text">性感惡魔 BLACKBERRY</h4>
                                    <p classame="card-text">NTD 1050元</p>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} md={4} >
                        <div className="card">
                            <img
                                src={img5}
                                className="card-img-top"
                                alt="..."
                            />
                            <div className="card-body">
                                <h5 className="card-title">Bobbi Brown</h5>
                                <h4 className="card-text">迷戀輕吻唇膏</h4>
                                <h4 className="card-text">熱情如火 SUNSET</h4>
                                <p classame="card-text">NTD 1050元</p>
                            </div>
                        </div>
                        </Col>
                        <Col xs={12} md={4} >
                        <div className="card">
                            <img
                                src={img6}
                                className="card-img-top"
                                alt="..."
                            />
                            <div className="card-body">
                                <h5 className="card-title">Bobbi Brown</h5>
                                <h4 className="card-text">迷戀輕吻唇膏</h4>
                                <h4 className="card-text">薩珊裸 SAZAN NUDE</h4>
                                <p classame="card-text">NTD 1050元</p>
                            </div>
                        </div>
                        </Col>
                        <Col xs={12} md={4} >
                        <div className="card">
                            <img
                                src={img7}
                                className="card-img-top"
                                alt="..."
                            />
                            <div className="card-body">
                                <h5 className="card-title">Bobbi Brown</h5>
                                <h4 className="card-text">迷戀輕吻唇露</h4>
                                <h4 className="card-text">定情櫻桃 CHERRY CRUSH</h4>
                                <p classame="card-text">NTD 980元</p>
                            </div>
                        </div>
                        </Col>
                        <Col xs={12} md={4} >
                        <div className="card">
                            <img
                                src={img8}
                                className="card-img-top"
                                alt="..."
                            />
                            <div className="card-body">
                                <h5 className="card-title">Bobbi Brown</h5>
                                <h4 className="card-text">迷戀輕吻唇露</h4>
                                <h4 className="card-text">訂製可可 HAUTE COCOA</h4>
                                <p classame="card-text">NTD 980元</p>
                            </div>
                        </div>
                        </Col>
                        <Col xs={12} md={4} >
                        <div className="card">
                            <img
                                src={img9}
                                className="card-img-top"
                                alt="..."
                            />
                            <div className="card-body">
                                <h5 className="card-title">Bobbi Brown</h5>
                                <h4 className="card-text">迷戀輕吻唇露</h4>
                                <h4 className="card-text">熱戀節奏 SMOOTHIE MOVE</h4>
                                <p classame="card-text">NTD 980元</p>
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