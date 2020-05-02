import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import {
  Modal,
  Row,
  Col,
  Button,
  InputGroup,
  FormControl,
} from 'react-bootstrap'
import '../styles/navbar.scss'

function LoginModal(props) {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      id="login-modal"
    >
      <Modal.Header></Modal.Header>
      <Modal.Body>
        <InputGroup className="mb-2">
          <FormControl
            placeholder="email"
            aria-label="email"
            aria-describedby="login-email"
          />
        </InputGroup>
        <InputGroup className="mb-2">
          <InputGroup.Prepend>
            <InputGroup.Text id="login-password">@</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            placeholder="password"
            aria-label="password"
            aria-describedby="login-password"
          />
        </InputGroup>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}

function Menu() {
  const [modalShow, setModalShow] = React.useState(false)

  return (
    <>
      <div className="navbar-bg"></div>
      <Row className="navbar-icons">
        <Col className="navbar-search">
          <NavLink
            activeClassName="active"
            className="nav-link"
            to="/Uielements"
          ></NavLink>
        </Col>
        <Col className="navbar-cart">
          <NavLink
            activeClassName="active"
            className="nav-link"
            to="/Cart"
          ></NavLink>
        </Col>
        <Col className="navbar-favorite">
          <NavLink
            activeClassName="active"
            className="nav-link"
            to="/Uielements"
          ></NavLink>
        </Col>
        <Col className="navbar-member" md={4}>
          <NavLink
            activeClassName="active"
            className="nav-link"
            to="/Uielements"
            onClick={() => setModalShow(true)}
          >
            <p className="navbar-text-span">會員登入</p>
          </NavLink>
        </Col>
        <Col className="navbar-logout">
          <NavLink
            activeClassName="active"
            className="nav-link"
            to="/Uielements"
          ></NavLink>
        </Col>
      </Row>
      <NavLink className="navbar-logo" to="/">
        <div className="logo"></div>
      </NavLink>
      <Row className="navbar">
        <Col md={5} className="nav-outline">
          <Row className="nav-inline">
            <Col>
              <NavLink
                activeClassName="active"
                className="nav-link"
                to="/Uielements"
              >
                <p class="nav-title-eng">BRANDS</p>
                <p class="nav-title-chs">品牌</p>
              </NavLink>
            </Col>
            <Col>
              <NavLink
                activeClassName="active"
                className="nav-link"
                to="/product"
              >
                <p class="nav-title-eng">PRODUCTS</p>
                <p class="nav-title-chs">商品</p>
              </NavLink>
            </Col>
          </Row>
        </Col>
        <Col md={2}>LOGO</Col>
        <Col md={5} className="nav-outline">
          <Row className="nav-inline">
            <Col>
              <NavLink
                activeClassName="active"
                className="nav-link"
                to="/Discount"
              >
                <p class="nav-title-eng">DISCOUNT</p>
                <p class="nav-title-chs">優惠</p>
              </NavLink>
            </Col>
            <Col>
              <NavLink
                activeClassName="active"
                className="nav-link"
                to="/product"
              >
                <p class="nav-title-eng">MAKEUP</p>
                <p class="nav-title-chs">彩妝教學</p>
              </NavLink>
            </Col>
          </Row>
        </Col>
      </Row>

      <LoginModal show={modalShow} onHide={() => setModalShow(false)} />
    </>
  )
}

export default Menu
