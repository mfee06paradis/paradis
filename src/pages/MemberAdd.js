import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import { Modal, Form, InputGroup, FormControl } from 'react-bootstrap'
import '../styles/MemberAdd.scss'

//import { Row, Col } from 'react-bootstrap'

function MemberAdd(props) {
  const [show, setShow] = useState(true)

  const handleClose = () => {
    setShow(false)
  }

  const handleShow = () => {
    setShow(true)
  }

  const [dataLoading, setDataLoading] = useState(false)

  const [memberName, setMemberName] = useState('')
  const [memberEmail, setMemberEmail] = useState('')
  const [memberPw, setMemberPw] = useState('')
  const [memberPwcheck, setMemberPwcheck] = useState('')

  const [emailMessage, setEmailMessage] = useState('')
  const [pwMessage, setPwMessage] = useState('')

  async function addUserToSever() {
    // 開啟載入指示
    setDataLoading(true)

    const newData = { memberName, memberPw, memberEmail }

    // 連接的伺服器資料網址
    const url = 'http://localhost:5000/members/add'

    // 注意資料格式要設定，伺服器才知道是json格式
    const request = new Request(url, {
      method: 'POST',
      body: JSON.stringify(newData),
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })

    console.log(JSON.stringify(newData))

    const response = await fetch(request)
    const data = await response.json()

    console.log('伺服器回傳的json資料', data)
    // 要等驗証過，再設定資料(簡單的直接設定)

    //直接在一段x秒關掉指示器
    setTimeout(() => {
      setDataLoading(false)
      alert('儲存完成')
      props.history.push('/Home')
      window.location.reload();
    }, 500)
  }

  // const userDataNo = <h2>此會員不存在</h2>
  // const useridNo = <h2>需要會員id</h2>

  const loading = (
    <>
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </>
  )

  const display = (
    <>
    <Modal show={show} id="register-modal">
    <Modal.Header></Modal.Header>
    <Modal.Body>
      <Form className="table-bg">
        <table className="table table-hover">
          <tbody>
            <tr>
              <td>暱稱</td>
              <td>
                <span className="table-label">必填</span>
              </td>
              <td>
                <div className="rwd-show">
                <label htmlFor="memberName">暱稱</label>
                  <span className="table-label">必填</span>
                </div>
                <InputGroup className="RegisterInput">
                  <FormControl
                    type="text"
                    className="input-text"
                    placeholder="暱稱"
                    aria-label="memberName"
                    aria-describedby="memberName"
                    value={memberName}
                    onChange={(event) => {
                      setMemberName(event.target.value)
                    }}
                  />
                </InputGroup>
              </td>
            </tr>
            <tr>
              <td>Email</td>
              <td>
                <span className="table-label">必填</span>
              </td>
              <td>
              <div className="rwd-show">
                <label htmlFor="memberName">Email帳號</label>
                <span className="table-label">必填</span>
              </div>
              <InputGroup className="RegisterInput">
                  <FormControl
                    type="text"
                    className="input-text"
                    placeholder="Email帳號"
                    aria-label="memberEmail"
                    aria-describedby="memberEmail"
                    value={memberEmail}
                    onChange={(event) => {
                      setMemberEmail(event.target.value)
                    }}
                    onBlur={()=>{
                      if(memberEmail.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)){
                        setEmailMessage('')
                      }else{
                        setEmailMessage('Email格式錯誤')
                      }}
                    }
                  />
                </InputGroup>
                {emailMessage ? (<div className="Register-feedback">{emailMessage}</div>) : ('')}
              </td>
            </tr>
            <tr>
              <td>密碼</td>
              <td>
                <span className="table-label">必填</span>
              </td>
              <td>
              <div className="rwd-show">
                <label htmlFor="memberName">密碼</label>
                <span className="table-label">必填</span>
              </div>
              <InputGroup className="RegisterInput">
                  <FormControl
                    type="password"
                    className="input-text"
                    placeholder="密碼"
                    aria-label="memberPw"
                    aria-describedby="memberPw"
                    value={memberPw}
                    onChange={(event) => {
                      setMemberPw(event.target.value)
                    }}
                  />
                </InputGroup>
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                <span className="table-label">必填</span>
              </td>
              <td>
              <div className="rwd-show">
                <label htmlFor="memberName">請再次輸入密碼</label>
                <span className="table-label">必填</span>
              </div>
              <InputGroup className="RegisterInput">
                  <FormControl
                    type="password"
                    className="input-text"
                    placeholder="請再次輸入密碼"
                    aria-label="memberPwcheck"
                    aria-describedby="memberPwcheck"
                    value={memberPwcheck}
                    onChange={(event) => {
                      setMemberPwcheck(event.target.value)
                    }}
                    onBlur={()=>{
                      if(memberPwcheck !== memberPw){
                        setPwMessage('輸入密碼不相同')
                      }else{
                        setPwMessage('')
                      }}
                    }
                  />
                </InputGroup>
                {pwMessage ? (<div className="Register-feedback">{pwMessage}</div>) : ('')}
              </td>
            </tr>
          </tbody>
        </table>
      </Form>
      <button className="btn-green Register-cancel" onClick={()=>{props.history.push('/Home')}}>取消</button>
      <div className="Register-button">
          <button
            className="btn-main"
            type="button"
            onClick={() => {
              if(emailMessage==='' && pwMessage==='' && memberName !== '' && memberEmail !== '' && memberPw !== ''){
                addUserToSever()
                handleClose()
              }
          }}
          >
            註冊
          </button>
      </div>
    </Modal.Body>
  </Modal>

      <h1>會員編輯</h1>
      <hr />
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">姓名</label>
        <input
          type="text"
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">帳號</label>
        <input
          type="text"
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">密碼</label>
        <input
          type="password"
          className="form-control"
        />
      </div>
      <button
        className="btn btn-primary"
      >
        儲存
      </button>
    </>
  )
  return <>{dataLoading ? loading : display}</>
}

export default withRouter(MemberAdd)
