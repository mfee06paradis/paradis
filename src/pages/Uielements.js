import React, { useState } from 'react'
import { Modal, Row, Col } from 'react-bootstrap'

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <div className="modal-context">
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter"></Modal.Title>
          <div className="sub-title">
            <p className="sub-title-eng">Modal</p>
            <p className="sub-title-chs">彈出視窗</p>
          </div>
        </Modal.Header>
        <Modal.Body>
          <h6>I'm a modal</h6>
          <p>安安安彈出視窗</p>
          <br></br>
          <br></br>
          <br></br>
          <button className="btn-green margin-btn-left" onClick={props.onHide}>
            取消
          </button>
          <button className="btn-main margin-btn-right" onClick={props.onHide}>
            確定
          </button>
          <br></br>
        </Modal.Body>
      </div>
    </Modal>
  )
}

function Uielements() {
  //－－－－－－－－－－主要標題－－－－－－－－－－－－－－－－－－
  const main_title = (eng, chs) => {
    return (
      <>
        <div className="main-title-before"></div>
        <div className="main-title">
          <h2>{eng}</h2>
          <h4>{chs}</h4>
        </div>
        <div className="main-title-after"></div>
      </>
    )
  }
  //－－－－－－－－－－圓圈盒子－－－－－－－－－－－－－－－－－－
  const box_circle = (eng, chs) => {
    return (
      <>
        <div className="box-circle">
          <div className="sub-title">
            <p className="sub-title-eng">{eng}</p>
            <p className="sub-title-chs">{chs}</p>
          </div>
          <div className="box-circle-img"></div>
        </div>
      </>
    )
  }

  const [modalShow, setModalShow] = React.useState(false)

  return (
    <>
      <div className="bg-white">
        <br></br>
        <div className="container">
          {/* －－－－－－－－－－主要標題－－－－－－－－－ */}
          {main_title('PRODUCTS', '商品一覧')}

          <br></br>
          <Row xs={1} md={3}>
            {/* －－－－－－－－－－圓圈盒子－－－－－－－－－ */}
            <Col>{box_circle('Lipps', '嘴唇')}</Col>
            <Col>{box_circle('Eyeline', '眼線')}</Col>
            <Col>{box_circle('Face', '臉')}</Col>
          </Row>
        </div>
      </div>
      <div className="bg-pink">
        <hr className="hr-white"></hr>
        <div className="container">
          <div className="context-full">
            <div className="context-full-before"></div>
            <div className="context-full-mid">
              {/* －－－－－－－－－－字體－－－－－－－－－ */}
              <div className="main-title">
                <h2>I'm title font : $font-family-title</h2>
                <h4>我是標題字體</h4>
              </div>
              <hr className="hr-gold"></hr>
              <h6>Brands title font : $font-family-copperplate</h6>
              <p>我是內文字體 : $font-family-content</p>
              <hr className="hr-gold"></hr>
              <button className="btn-main">確定</button>
              <button className="btn-green">取消</button>
              <button className="btn-red" onClick={() => setModalShow(true)}>
                Modal
              </button>

              <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
              />

              <br></br>
              <button className="btn-white">加入購物車</button>
              <button className="btn-pink">回前頁</button>
              <br></br>
              <br></br>
              <br></br>
            </div>
            <div className="context-full-after"></div>
          </div>
        </div>
        <div className="container">
          <Row xs={1} md={2}>
            <Col md={9}>
              <div className="context-side">
                <div className="context-side-before"></div>
                <div className="context-side-mid">
                  <div className="sub-title-deco">
                    <div className="sub-title">
                      <p className="sub-title-eng">Table</p>
                      <p className="sub-title-chs">表單</p>
                    </div>
                  </div>
                  <div className="table-bg">
                    <table className="table table-hover">
                      <tbody>
                        <tr>
                          <td>欄位</td>
                          <td>標籤</td>
                          <td>內容</td>
                        </tr>
                        <tr>
                          <td>111</td>
                          <td>
                            <span className="table-label">必填</span>
                          </td>
                          <td>
                            <div className="rwd-show">
                              欄位
                              <span className="table-label">必填</span>
                            </div>
                            <input type="text" clasName="input-text" />
                          </td>
                        </tr>
                        <tr>
                          <td>111</td>
                          <td>
                            <span className="table-label">必填</span>
                          </td>
                          <td>
                            <input type="text" clasName="input-text" />
                          </td>
                        </tr>
                        <tr>
                          <td>111</td>
                          <td>
                            <span className="table-label">必填</span>
                          </td>
                          <td>
                            <input type="text" clasName="input-text" />
                          </td>
                        </tr>
                        <tr>
                          <td>111</td>
                          <td>
                            <span className="table-label">必填</span>
                          </td>
                          <td>
                            <input type="text" clasName="input-text" />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="context-side-after"></div>
              </div>
            </Col>
            <Col md={3}>
              <div className="side-select">活動優惠</div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  )
}

export default Uielements
