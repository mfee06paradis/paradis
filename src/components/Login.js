import React, { useState, useEffect } from 'react'
import { Modal, Row, Col, Form, InputGroup, FormControl } from 'react-bootstrap'
import '../styles/navbar.scss'

function Login(props) {
  const [userData, setUserData] = useState([])
  const [userEmail, setUserEmail] = useState([])
  const [userPassword, setUserPassword] = useState([])

  //   useEffect(() => {
  //     fetch('http://localhost:7777/myserver')
  //       .then(function (response) {
  //         return response.json()
  //       })
  //       .then(function (myJson) {
  //         // console.log(myJson);
  //         setUserData(myJson)
  //       })
  //   }, [])

  //   useEffect(() => {
  //     //console.log(userData);
  //   }, [userEmail])

  return (
    <>
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
          <button
            className="btn-main"
            type="button"
            onClick={() => {
              console.log(userEmail)
              console.log(userPassword)
              if (userEmail === 'dd@gmail.com') {
                return props.setIsAuth(true)
              } else {
                return props.setIsAuth(false)
              }
            }}
          >
            登入
          </button>
        </Form>
      </Modal.Body>
    </>
  )
}

export default Login
