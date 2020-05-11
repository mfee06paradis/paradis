import React, { useState, useEffect } from 'react';
import SideBar from '../components/SideBar';
import AnimatedVisibility from '../components/AnimatedVisibility';
import '../styles/member.scss';
import { withRouter } from 'react-router-dom';
import { Modal } from 'react-bootstrap';
function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <div className="modal-context" style={{ backgroundColor: '#FEDFE1' }}>
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter"></Modal.Title>
          <div className="sub-title">
            <h1 className="sub-title-eng">新增信用卡成功!</h1>
          </div>
        </Modal.Header>
        <Modal.Body>
          <br></br>
          <button className="btn-main" onClick={props.onHide}>
            確定
          </button>
          <br></br>
        </Modal.Body>
      </div>
    </Modal>
  );
}
function CreditCard(props) {
  const [modalShow, setModalShow] = useState(false);
  const [creditCardNumber, setCreditCardNumber] = useState('');
  const [creditCardSafeCode, setCreditCardSafeCode] = useState('');
  const [creditCardName, setCreditCardName] = useState('');
  const [creditCardMonth, setCreditCardMonth] = useState('');
  const [creditCardYear, setCreditCardYear] = useState('');
  const [userCard, setUserCard] = useState('');
  const [memberID, setMemberID] = useState('');
  const [visible, setVisible] = useState(true);
  function ShowMe() {
    setVisible(true);
  }
  function hideMe() {
    setVisible(false);
  }

  const checkCardNumber = function () {
    let x = document.getElementById('cardNumber').value;
    if (x.charAt(0) === '4') {
      document.getElementById('visa').style.display = 'block';
    } else if (
      x.substring(0, 2) === '51' ||
      x.substring(0, 2) === '52' ||
      x.substring(0, 2) === '53' ||
      x.substring(0, 2) === '54' ||
      x.substring(0, 2) === '55'
    ) {
      document.getElementById('mastercard').style.display = 'block';
    }
    if (!x) {
      document.getElementById('visa').style.display = 'none';
      document.getElementById('mastercard').style.display = 'none';
    }
  };
  const checkCardLength = function () {
    let x = document.getElementById('cardNumber').value;
    if (x.length === 16) {
      document.getElementById('cardMesg').innerHTML = 'OK';
      return true;
    } else if (!x) {
      document.getElementById('cardMesg').innerHTML = '請輸入卡號';
      return false;
    } else {
      document.getElementById('cardMesg').innerHTML = '卡號格式錯誤';
      return false;
    }
  };
  const callTwoFunction = () => {
    checkCardNumber();
    checkCardLength();
  };
  const checkSafeCode = function () {
    let x = document.getElementById('safeCode').value;
    if (x.length === 3) {
      document.getElementById('safeCodeMesg').innerHTML = 'OK';
      return true;
    } else if (!x) {
      document.getElementById('safeCodeMesg').innerHTML = '請輸入安全碼';
      return false;
    } else {
      document.getElementById('safeCodeMesg').innerHTML = '安全碼錯誤';
      return false;
    }
  };
  const checkName = function () {
    let x = document.getElementById('name').value;
    if (!x) {
      document.getElementById('nameMesg').innerHTML = '請輸入姓名';
      return false;
    } else {
      document.getElementById('nameMesg').innerHTML = 'OK';
      return true;
    }
  };

  const checkMonth = function () {
    if (document.getElementById('monthSelect').value == '到期月份') {
      document.getElementById('monthMesg').innerHTML = '請選擇到期月份';
      return false;
    } else {
      document.getElementById('monthMesg').innerHTML = 'OK';
      return true;
    }
  };
  const checkYear = function () {
    if (document.getElementById('yearSelect').value == '到期年份') {
      document.getElementById('yearMesg').innerHTML = '請選擇到期年份';
      return false;
    } else {
      document.getElementById('yearMesg').innerHTML = 'OK';
      return true;
    }
  };
  const createM = function () {
    if (!document.getElementById('month')) {
      for (let i = 1; i <= 12; i++) {
        let x = document.createElement('OPTION');
        x.setAttribute('id', 'month');
        let t = document.createTextNode(i + '月');
        x.appendChild(t);
        document.getElementById('monthSelect').appendChild(x);
      }
    }
  };

  const createY = function () {
    if (!document.getElementById('year')) {
      for (let i = 2020; i <= 2050; i++) {
        let x = document.createElement('OPTION');
        x.setAttribute('id', 'year');
        let t = document.createTextNode(i + '年');
        x.appendChild(t);
        document.getElementById('yearSelect').appendChild(x);
      }
    }
  };

  const refresh = () => {
    window.location.reload();
  };

  const checkData = () => {
    if (!checkCardLength()) {
      return false;
    }
    if (!checkSafeCode()) {
      return false;
    }
    if (!checkName()) {
      return false;
    }
    if (!checkMonth()) {
      return false;
    }
    if (!checkYear()) {
      return false;
    }
    return true;
  };

  const callTwoFuncs = () => {
    if (!checkData()) {
      return false;
    }
    setModalShow(true);
    setTimeout(() => {
      addCardToSever();
      refresh();
    }, 3500);
  };
  const showUserCard = () => {
    if (!userCard) {
      document.getElementById('userCard').style.display = 'none';
    } else {
      document.getElementById('userCard').style.display = 'block';
    }
  };

  async function getCardFromServer() {
    // 連接的伺服器資料網址
    const url = 'http://localhost:5000/creditcards';

    // 注意header資料格式要設定，伺服器才知道是json格式
    const request = new Request(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'appliaction/json',
      }),
    });

    const response = await fetch(request);
    const data = await response.json();
    if (!data.length == 0) {
      setUserCard(data[0].CreditCardNumber);
      console.log(userCard);
    } else {
      console.log('false');
    }
  }

  async function addCardToSever() {
    const newData = {
      creditCardNumber,
      creditCardSafeCode,
      creditCardName,
      creditCardMonth,
      creditCardYear,
      memberID,
    };

    // 連接的伺服器資料網址
    const url = 'http://localhost:5000/creditcards/add';

    // 注意資料格式要設定，伺服器才知道是json格式
    const request = new Request(url, {
      method: 'POST',
      body: JSON.stringify(newData),
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    });

    console.log(JSON.stringify(newData));

    const response = await fetch(request);
    const data = await response.json();

    console.log('伺服器回傳的json資料', data);
    // 要等驗証過，再設定資料(簡單的直接設定)
  }
  useEffect(() => {
    getCardFromServer();
    const member = JSON.parse(localStorage.getItem('Member')) || [];
    console.log(member.memberId);
    setMemberID(member.memberId);
    showUserCard();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      if (!userCard) {
        document.getElementById('userCard').style.display = 'none';
      } else {
        document.getElementById('userCard').style.display = 'block';
      }
    }, 1000);
  }, [userCard]);

  return (
    <>
      <div className="row bg-white">
        <SideBar />
        <div className="col mainCotent">
          <div>
            <img
              src={require('../images/creditCardtitle.svg')}
              alt="creditCardtitle"
            />
          </div>
          <div className="cardInfo" id="userCard">
            <div className="cardText text-center" id="userCardText">
              {userCard}
            </div>
          </div>
          <div className="row creditCardBlank2">
            <div className="col-lg-4"></div>
            <div className="col-lg-3" onClick={ShowMe}>
              <img
                className="nav-link"
                activeClassName="active"
                src={require('../images/addCard.svg')}
                alt="addCard"
                style={{ cursor: 'copy' }}
              />
            </div>
            <div>
              <button
                className="btn-main"
                onClick={() => {
                  const member =
                    JSON.parse(localStorage.getItem('Member')) || [];
                  const name = member.memberName;
                  document.getElementById('cardNumber').value =
                    '4321766289100023';
                  setCreditCardNumber('4321766289100023');
                  document.getElementById('safeCode').value = '649';
                  setCreditCardSafeCode('649');
                  document.getElementById('name').value = name;
                  setCreditCardName(name);
                  let x = document.createElement('OPTION');
                  x.setAttribute('selected', '1');
                  let y = document.createTextNode('5月');
                  x.appendChild(y);
                  document.getElementById('monthSelect').appendChild(x);
                  setCreditCardMonth('5');
                  let a = document.createElement('OPTION');
                  a.setAttribute('selected', '1');
                  let b = document.createTextNode('2024年');
                  a.appendChild(b);
                  document.getElementById('yearSelect').appendChild(a);
                  setCreditCardYear('24');
                  checkData();
                  checkCardNumber();
                }}
              >
                小幫手
              </button>
            </div>
          </div>

          <div className="col-1"></div>
          <div className="col-6 lastpage">
            <img
              onClick={() => {
                props.history.goBack();
              }}
              src={require('../images/lastpage.svg')}
              alt="lastpage"
              className="nav-link"
              activeClassName="active"
              style={{ cursor: 'pointer' }}
            />
          </div>
          <div className="col-3 lastpage">
            <button
              className="btn-main"
              onClick={() => {
                const member = JSON.parse(localStorage.getItem('Member')) || [];
                const name = member.memberName;
                document.getElementById('cardNumber').value =
                  '4321766289100023';
                setCreditCardNumber('4321766289100023');
                document.getElementById('safeCode').value = '649';
                setCreditCardSafeCode('649');
                document.getElementById('name').value = name;
                setCreditCardName(name);
                let x = document.createElement('OPTION');
                x.setAttribute('selected', '1');
                let y = document.createTextNode('5月');
                x.appendChild(y);
                document.getElementById('monthSelect').appendChild(x);
                setCreditCardMonth('5');
                let a = document.createElement('OPTION');
                a.setAttribute('selected', '1');
                let b = document.createTextNode('2024年');
                a.appendChild(b);
                document.getElementById('yearSelect').appendChild(a);
                setCreditCardYear('24');
                checkData();
                checkCardNumber();
              }}
            >
              小幫手
            </button>
          </div>
          <div className="row creditCardBlank" style={{ display: 'none' }}>
            <div className="col-4" onClick={ShowMe}>
              <img
                className="nav-link"
                activeClassName="active"
                src={require('../images/addCard.svg')}
                alt="addCard"
                style={{ cursor: 'copy' }}
              />
            </div>
          </div>
          <AnimatedVisibility
            visible={visible}
            animationIn="zoomIn"
            animationOut="zoomOut"
          >
            <div className="row">
              <div
                className="col-2 creditCardBlank"
                style={{ display: 'none' }}
              ></div>
              <div className="creditCardCotent col-lg-12 col-8 row container">
                <div className="col-12 creditCardBlank2"></div>
                <div className="col-5 logo"></div>
                <div className="col-lg-1 col-12"></div>
                <div
                  className="col-1 creditCardBlank"
                  style={{ display: 'none' }}
                ></div>
                <div
                  className="col-lg-5 col-4"
                  id="mastercard"
                  style={{ display: 'none' }}
                >
                  <img src={require('../images/mastercard.png')} alt="visa" />
                </div>
                <div
                  className="col-lg-5 col-4"
                  id="visa"
                  style={{ display: 'none' }}
                >
                  <img src={require('../images/visa.png')} alt="visa" />
                </div>
                <div className="creditCardBlank2">&nbsp;</div>
                <div className="creditCardBlank2">&nbsp;</div>
                <div className="col-lg-7 col-12 creditCardText">
                  <input
                    onChange={(event) => {
                      setCreditCardNumber(event.target.value);
                    }}
                    onBlur={() => {
                      callTwoFunction();
                    }}
                    id="cardNumber"
                    className="cardCotent"
                    type="text"
                    placeholder="卡號 ---- ---- ---- ----"
                  />
                </div>
                <div className="col-lg-3 col-12 creditCardText">
                  <input
                    className="cardCotent"
                    type="text"
                    placeholder="安全碼"
                    id="safeCode"
                    onBlur={checkSafeCode}
                    onChange={(event) => {
                      setCreditCardSafeCode(event.target.value);
                    }}
                  />
                </div>
                <div className="col-lg-12"></div>
                <div className="col-lg-7" id="cardMesg"></div>
                <div className="col-lg-4" id="safeCodeMesg"></div>
                <div className="col-lg-6 col-12 creditCardText">
                  <input
                    className="cardCotent"
                    type="text"
                    placeholder="姓名"
                    id="name"
                    onBlur={checkName}
                    onChange={(event) => {
                      setCreditCardName(event.target.value);
                    }}
                  />
                </div>
                <div className="col-lg-3 col-6 creditCardText">
                  <select
                    className="monthSelect"
                    id="monthSelect"
                    onClick={createM}
                    onBlur={checkMonth}
                    onChange={(event) => {
                      setCreditCardMonth(event.target.value.substr(0, 1));
                    }}
                  >
                    <option selected disabled>
                      到期月份
                    </option>
                  </select>
                </div>
                <div className="col-lg-3 col-6 creditCardText">
                  <select
                    className="monthSelect"
                    id="yearSelect"
                    onClick={createY}
                    onBlur={checkYear}
                    onChange={(event) => {
                      setCreditCardYear(event.target.value.substr(2, 2));
                    }}
                  >
                    <option selected disabled>
                      到期年份
                    </option>
                  </select>
                </div>
                <div className="col-lg-12"></div>
                <div className="col-lg-6" id="nameMesg"></div>
                <div className="col-lg-3" id="monthMesg"></div>
                <div className="col-lg-3" id="yearMesg"></div>
              </div>
            </div>
            <div className="row creditCardButton">
              <div className="col-6" onClick={hideMe}>
                <img
                  className="nav-link"
                  activeClassName="active"
                  src={require('../images/cancel.svg')}
                  alt="cancel"
                  style={{ cursor: 'pointer' }}
                />
              </div>
              <div className="col-6">
                <img
                  src={require('../images/savecard.svg')}
                  alt="savecard"
                  style={{ cursor: 'pointer' }}
                  onClick={() => {
                    callTwoFuncs();
                  }}
                />
                <MyVerticallyCenteredModal
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                />
              </div>
            </div>

            <div className="row buttonMobile">
              <div className="col-1"></div>
              <div className="col-5" onClick={hideMe}>
                <img
                  className="nav-link"
                  activeClassName="active"
                  src={require('../images/cancel2.svg')}
                  alt="cancel"
                  style={{ cursor: 'pointer' }}
                />
              </div>
              <div className="col-5">
                <img
                  className="nav-link"
                  activeClassName="active"
                  src={require('../images/savecard2.svg')}
                  alt="savecard"
                  style={{ cursor: 'pointer' }}
                  onClick={() => {
                    callTwoFuncs();
                  }}
                />
                <MyVerticallyCenteredModal
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                />
              </div>
            </div>
          </AnimatedVisibility>
        </div>
        <div className="col-3 sideBar"></div>
      </div>
    </>
  );
}

export default withRouter(CreditCard);
