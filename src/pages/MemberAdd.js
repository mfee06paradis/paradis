import React, { useState , useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { Modal, Form, InputGroup, FormControl } from 'react-bootstrap'
import '../styles/MemberAdd.scss'

import AOS from 'aos';


import { Carousel, Row, Col } from 'react-bootstrap'
import '../styles/home.scss'


const Homepage= ()=> {

  const [index, setIndex] = useState(0)

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex)
  }

  useEffect(() => {
    AOS.init({
      once: true,
      easing: 'ease-in-out',
      duration: 800,
    });
  }, []);

  return (
    <>
      <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <div className="FirstSlide"></div>
        <Carousel.Caption>
          <h1>Mother's Day</h1>
          <h4>母親節新品</h4>
          <p>
            宛如流星輕吻上了雙唇 YSL<br></br>
            獨家雙層夾星科技，外層為濃郁純色複方，<br></br>
            內芯為星漾顯白粒子，能輕鬆打造極顯白的光潤美唇
          </p>
          <button>馬上訂購</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="SecondSlide"></div>
        <Carousel.Caption>
        <h1>Mother's Day</h1>
          <h4>母親節新品</h4>
          <p>
            宛如流星輕吻上了雙唇 YSL<br></br>
            獨家雙層夾星科技，外層為濃郁純色複方，<br></br>
            內芯為星漾顯白粒子，能輕鬆打造極顯白的光潤美唇
          </p>
          <button>馬上訂購</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="ThirdSlide"></div>

        <Carousel.Caption>
        <h1>Mother's Day</h1>
          <h4>母親節新品</h4>
          <p>
            宛如流星輕吻上了雙唇 YSL<br></br>
            獨家雙層夾星科技，外層為濃郁純色複方，<br></br>
            內芯為星漾顯白粒子，能輕鬆打造極顯白的光潤美唇
          </p>
          <button>馬上訂購</button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
      {/* second */}
      <div className="bg-white view-height">
        <hr className="hr-pink"></hr>
        <div className="home-second">
          {/* title */}
          <div className="main-title-before"></div>
          <div className="main-title">
            <h2>Best Hit</h2>
            <h4>熱賣商品</h4>
          </div>
          <div className="main-title-after"></div>
        </div>
        <div>
          <Row xs={1} md={3} className="home-second-width">
            <Col className="home-second-hover" data-aos="fade-in" data-aos-duration="400">
              <div className="home-second-top">
                <p className="home-second-top-text">TOP1</p>
              </div>
              <div className="home-second-item">
                <img src={require('../images/home/Home-2-1.png')} alt="Background"/>
              </div>
              <div className="home-second-item-text">
                <h3>PressedPowder</h3>
                <p>蜜粉餅</p>
              </div>
            </Col>
            <Col className="home-second-hover"  data-aos="fade-in" data-aos-duration="800">
              <div className="home-second-top">
                <p className="home-second-top-text">TOP2</p>
              </div>
              <div className="home-second-item">
                <img src={require('../images/home/Home-2-1.png')} alt="Background"/>
              </div>
              <div className="home-second-item-text">
                <h3>PressedPowder</h3>
                <p>蜜粉餅</p>
              </div>
            </Col>
            <Col className="home-second-hover" data-aos="fade-in" data-aos-duration="1200">
              <div className="home-second-top">
                <p className="home-second-top-text">TOP3</p>
              </div>
              <div className="home-second-item">
                <img src={require('../images/home/Home-2-3.png')} alt="Background"/>
              </div>
              <div className="home-second-item-text">
                <h3>PressedPowder</h3>
                <p>蜜粉餅</p>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      {/* third */}
      <div className="bg-pink view-height">
      <hr className="hr-white"></hr>
      <div class="pc-navbar"><br></br></div>
        <Row  className="home-third-width">
          <Col id="home-youtube" xs={12} md={8}  data-aos="fade-in" data-aos-duration="400">
          <div
              className="video Home-vedio"
              style={{
                position: "relative",
                paddingBottom: "56.25%" /* 16:9 */,
                paddingTop: 25,
                height: 0
              }}
            >
              <iframe className="Home-youtube"
                style={{
                  position: "absolute",
                  top: 0,
                  left:0,
                  width: "95%",
                  height: "95%"
                }}
                src={`https://www.youtube.com/embed/AO8AYcO-TUU`}
                frameBorder="0"
              />
            </div>
          </Col>
          <Col xs={12}md={3}>
          <div className="context-side home-context-side"  data-aos="fade-in" data-aos-duration="800">
                <div className="context-side-before"></div>
                <div className="context-side-mid">
                  <div className="sub-title-deco">
                    <div className="sub-title">
                      <p className="sub-title-eng">Video</p>
                      <p className="sub-title-chs">網紅試妝</p>
                    </div>
                  </div>
                  <div className="home-context-side-text">
                    由網紅Youtuber親自示範<br></br>
                    M.A.C子彈唇膏效果<br></br>
                    <button className="btn-white">立即選購</button>
                  </div>
                </div>
                <div className="context-side-after"></div>
              </div>
          </Col>
        </Row>
      </div>
    </>
  )

}

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
                <div className="rwd-show member-add-label">
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
              <div className="rwd-show member-add-label">
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
              <div className="rwd-show member-add-label">
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
              <div className="rwd-show member-add-label">
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

      <Homepage />
    </>
  )
  return <>{dataLoading ? loading : display}</>
}

export default withRouter(MemberAdd)
