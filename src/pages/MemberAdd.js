import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'

//import { Row, Col } from 'react-bootstrap'

function MemberAdd(props) {
  //const userid = props.match.params.userid
  // console.log(userid)

  //const [user, setUser] = useState({})
  const [dataLoading, setDataLoading] = useState(false)

  const [memberName, setMemberName] = useState('')
  const [memberEmail, setMemberEmail] = useState('')
  const [memberPW, setMemberPW] = useState('')

  async function addUserToSever() {
    // 開啟載入指示
    setDataLoading(true)

    const newData = { memberName, memberPW, memberEmail }

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
      props.history.push('/')
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
      <h1>會員編輯</h1>
      <hr />
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">姓名</label>
        <input
          type="text"
          className="form-control"
          value={memberName}
          onChange={(event) => {
            setMemberName(event.target.value)
          }}
        />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">帳號</label>
        <input
          type="text"
          className="form-control"
          value={memberEmail}
          onChange={(event) => {
            setMemberEmail(event.target.value)
          }}
        />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">密碼</label>
        <input
          type="password"
          className="form-control"
          value={memberPW}
          onChange={(event) => {
            setMemberPW(event.target.value)
          }}
        />
      </div>
      <button
        onClick={() => {
          addUserToSever()
        }}
        className="btn btn-primary"
      >
        儲存
      </button>
    </>
  )
  return <>{dataLoading ? loading : display}</>
}

export default withRouter(MemberAdd)
