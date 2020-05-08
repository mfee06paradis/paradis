import React, { useState, useEffect, useRef } from 'react'
import { NavLink, Redirect } from 'react-router-dom'
import { Modal, Row, Col, Form, InputGroup, FormControl,Nav, Navbar } from 'react-bootstrap'
import '../styles/navbar.scss'

function Menu(props) {
  const [show, setShow] = useState(false)

  const [userData, setUserData] = useState([])
  const [userEmail, setUserEmail] = useState([])
  const [userPassword, setUserPassword] = useState([])
  const [userRemember, setUserRemember] = useState(false)

  const [loginMessage, setLoginMessage] = useState('')

  const handleClose = () => {
    setShow(false)
    setLoginMessage('')
  }

  const handleShow = () => {
    setShow(true)
    if (userRemember === false) {
      setUserEmail('')
      setUserPassword('')
    }
  }

  const NavbarToggle = useRef(null);

  useEffect(() => {
    fetch('http://localhost:5000/members')
      .then(function (response) {
        return response.json()
      })
      .then(function (myJson) {
        // console.log(myJson);
        setUserData(myJson)
      })
  }, []) 
  

  const lcstg = localStorage.getItem('Member')

  const isAuthTrueMenu = () => {
    const userNameLogin = localStorage.getItem('Member') || []
    const parseuserNameLogin = JSON.parse(userNameLogin)
    const nameParseuserNameLogin = parseuserNameLogin.memberName
    const sliceNameParseuserNameLogin = nameParseuserNameLogin.slice(1)
    return (
      <>
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
          <Col className="navbar-favorite phone-navbar">
            <NavLink
              activeClassName="active"
              className="nav-link"
              to="/Uielements"
            ></NavLink>
          </Col>
          <Col className="navbar-member navebar-member-phone" xs={6} md={4}>
            <NavLink activeClassName="active" className="nav-link" to="/Member">
              <p className="navbar-text-span">
                歡迎{sliceNameParseuserNameLogin}
              </p>
            </NavLink>
          </Col>
          <Col className="navbar-logout">
            <NavLink
              activeClassName="active"
              className="nav-link"
              to="/Home"
              onClick={()=>{alert('已成功登出'); props.setIsAuth(false);localStorage.clear();}}
            ></NavLink>
          </Col>
        </Row>
      </>
    )
  }

  const isAuthFalseMenu = () => {
    return (
      <>
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
              to="/Home"
              onClick={handleShow}
            ></NavLink>
          </Col>
          <Col className="navbar-favorite phone-navbar">
            <NavLink
              activeClassName="active"
              className="nav-link"
              to="/Home"
              onClick={handleShow}
            ></NavLink>
          </Col>
          <Col className="navbar-member" xs={4} md={6}>
            <NavLink
              activeClassName="active"
              className="nav-link"
              to="/Home"
              onClick={handleShow}
            >
              <p className="navbar-text-span phone-navbar">會員登入</p>
            </NavLink>
          </Col>
        </Row>
      </>
    )
  }
  return (
    <>
    {lcstg ? props.setIsAuth(true) : props.setIsAuth(false)}
    <div id="pc-navbar">
      <div className="navbar-bg"></div>
      {props.isAuth ? isAuthTrueMenu() : isAuthFalseMenu()}
      <NavLink className="navbar-logo" to="/Home">
        <div className="logo"></div>
      </NavLink>
      <Row className="navbar">
        <Col md={5} className="nav-outline">
          <Row className="nav-inline">
            <Col>
              <NavLink
                activeClassName="active"
                className="nav-link"
                to="/Brands"
              >
                <p class="nav-title-eng">BRANDS</p>
                <p class="nav-title-chs">品牌</p>
              </NavLink>
            </Col>
            <Col>
              <NavLink
                activeClassName="active"
                className="nav-link"
                to="/Product"
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
                to="/MakeUp"
              >
                <p class="nav-title-eng">MAKEUP</p>
                <p class="nav-title-chs">彩妝教學</p>
              </NavLink>
            </Col>
          </Row>
        </Col>
      </Row>
      </div>

    <div id="phone-navbar">
    {props.isAuth ? isAuthTrueMenu() : isAuthFalseMenu()}
    <Navbar sticky="top" id="navbar" collapseOnSelect bg="primary" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" ref={NavbarToggle}/>
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <NavLink
            activeClassName="active"
            className="nav-link nav-link-phone"
            to="/Brands"
            onClick={()=>{NavbarToggle.current.click()}}          
          >
            <p class="nav-title-eng">BRANDS</p>
            <p class="nav-title-chs">品牌</p>
          </NavLink>
          <NavLink
            activeClassName="active"
            className="nav-link nav-link-phone"
            to="/product"
            onClick={()=>{NavbarToggle.current.click()}}
          >
            <p class="nav-title-eng">PRODUCTS</p>
            <p class="nav-title-chs">商品</p>
          </NavLink>
          <NavLink
            activeClassName="active"
            className="nav-link nav-link-phone"
            to="/Discount"
            onClick={()=>{NavbarToggle.current.click()}}
          >
            <p class="nav-title-eng">DISCOUNT</p>
            <p class="nav-title-chs">優惠</p>
          </NavLink>
          <NavLink
            activeClassName="active"
            className="nav-link nav-link-phone"
            to="/MakeUp"
            onClick={()=>{NavbarToggle.current.click()}}
          >
            <p class="nav-title-eng">MAKEUP</p>
            <p class="nav-title-chs">彩妝教學</p>
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </div>

      <Modal show={show} onHide={handleClose} id="login-modal">
        <Modal.Header></Modal.Header>
        <Modal.Body>
          <Form>
            <InputGroup className="mb-2">
              <FormControl
                type="text"
                id="login-email"
                placeholder="email"
                aria-label="email"
                aria-describedby="login-email"
                value={userEmail}
                onChange={(e) => {
                  setUserEmail(e.target.value)
                }}
              />
            </InputGroup>
            <InputGroup className="mb-2">
              <FormControl
                type="password"
                id="login-password"
                placeholder="password"
                aria-label="password"
                aria-describedby="login-password"
                value={userPassword}
                onChange={(e) => {
                  setUserPassword(e.target.value)
                }}
              />
            </InputGroup>
            {loginMessage ? (
              <div className="Login-feedback">{loginMessage}</div>
            ) : (
              ''
            )}
            <div className="checkbox">
              <input
                type="checkbox"
                id="check"
                name="check"
                value=""
                onChange={(e) => {
                  if (e.target.checked) {
                    setUserRemember(true)
                  } else {
                    setUserRemember(false)
                  }
                }}
              />
              <label for="check">
                <span></span>記住我
              </label>
            </div>
            <div className="Login-button">
              <button
                className="btn-main"
                type="button"
                onClick={(e) => {
                  const getUser = userData.find((value) => {
                    if (
                      userEmail === value.memberEmail &&
                      userPassword === value.memberPw
                    ) {
                      return true
                    } else {
                      return false
                    }
                  })
                  if (getUser !== undefined) {
                    localStorage.setItem('Member', JSON.stringify(getUser))
                  }
                  const isMember = userData.some((value) => {
                    if (
                      userEmail === value.memberEmail &&
                      userPassword === value.memberPw
                    ) {
                      return true
                    } else {
                      return false
                    }
                  })
                  if (isMember) {
                    setTimeout(() => {
                      props.setIsAuth(true)
                      setShow(false)
                    }, 500)
                  } else {
                    props.setIsAuth(false)
                    setLoginMessage('帳號或密碼錯誤')
                  }
                }}
              >
                登入
              </button>
            </div>
            <hr className="login-hr"></hr>
            <div className="linktoRegister">
              還沒有帳號嗎？
              <span>
                <NavLink to="/Register">點我註冊會員</NavLink>
              </span>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default Menu