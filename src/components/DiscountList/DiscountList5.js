import React from 'react'
import { Row, Col } from 'react-bootstrap'
import '../../styles/discount.scss'
import img15 from '../../images/discount/15.png'
function List() {
    return (
        <>
            <div className="container">
                <div className="card-deck">

                    <Col xs={12} md={4} >
                        <div className="card">
                            <img
                                src={img15}
                                className="card-img-top"
                                alt="..."
                            />
                            <div className="card-body">
                                <h5 className="card-title">M.A.C</h5>
                                <h4 className="card-text">壞女孩眼頰盤</h4>
                                <h4 className="card-text">超級公主病</h4>
                                <p classame="card-text">NTD 1800元</p>
                            </div>
                        </div>
                    </Col>

                </div>
            </div>
        </>
    )
}

export default List