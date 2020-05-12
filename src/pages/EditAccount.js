import React, { useState, useEffect } from 'react';
import SideBar from '../components/SideBar';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import TWzipcode from 'react-twzipcode';
import '../styles/member.scss';
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
        </Modal.Header>
        <Modal.Body>
          <div className="sub-title">
            <h1 className="sub-title-eng">編輯成功!</h1>
          </div>
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

function EditAccount(props) {
  const [modalShow, setModalShow] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [birthday, setBirthday] = useState('');
  const [phone, setPhone] = useState('');
  let sex;
  switch (gender) {
    case 'F':
      sex = '女';
      break;
    case 'M':
      sex = '男';
      break;
    default:
      sex = '請選擇性別';
  }

  const [memberID, setMemberID] = useState('');
  const [address, setAddress] = useState('');
  const [county, setCounty] = useState('');
  const [district, setDistrict] = useState('');
  const [addressData, setAddressData] = useState('');
  const [avatar, setAvatar] = useState('');
  const [avatarTem, setAvatarTem] = useState('');
  const handleChange1 = (data) => {
    setCounty(data.county);
  };
  const handleChange2 = (data) => {
    setDistrict(data.district + data.zipcode);
  };

  async function updateMembertoServer() {
    const newData = {
      email,
      name,
      gender,
      birthday,
      phone,
      addressData,
      avatar,
      memberID,
    };

    // 連接的伺服器資料網址
    const url = 'http://localhost:5000/members/update';

    // 注意資料格式要設定，伺服器才知道是json格式
    const request = new Request(url, {
      method: 'put',
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

    async function getMemberFromServer() {
      // 連接的伺服器資料網址
      const url = 'http://localhost:5000/members';

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
      let x = memberID;
      let y = x - 1;
      // console.log(data[y]);
      let userdata = data[y];
      localStorage.setItem('Member', JSON.stringify(userdata));
    }
    getMemberFromServer();
  }

  const getMemberFromLocalStorage = function () {
    let member = JSON.parse(localStorage.getItem('Member')) || [];
    setName(member.memberName);
    setEmail(member.memberEmail);
    setGender(member.membersex);
    setBirthday(member.memberBirthday);
    setPhone(member.memberPhone);
    setMemberID(member.memberId);
    if (member.memberAddress) {
      setCounty(member.memberAddress.substr(0, 3));
      setAddress(member.memberAddress.slice(3));
    } else {
      setCounty('');
      setAddress('');
    }

    if (!member.avatar) {
      setAvatar('./images/member-icon.svg');
    } else {
      setAvatar(member.avatar);
    }
    const fileUploader = document.querySelector('#chooseAvatar');
    fileUploader.addEventListener('change', (e) => {
      setAvatarTem(e.target.files[0].name);
      let x = './images/' + e.target.files[0].name;
      setAvatar(x);
    });
    const fileUploaderMobile = document.querySelector('#chooseAvatarMobile');
    fileUploaderMobile.addEventListener('change', (e) => {
      setAvatarTem(e.target.files[0].name);
      let x = './images/' + e.target.files[0].name;
      setAvatar(x);
    });
  };

  useEffect(() => {
    getMemberFromLocalStorage();
  }, []);
  useEffect(() => {
    // window.location.reload();
  }, [avatarTem]);
  // let check = function () {
  // if (!checkPwd) {
  //   return false;
  // }
  // if (!checkNickName) {
  //   return false;
  // }
  // if (!checkPhone) {
  //   return false;
  // }
  // if (!checkAddress) {
  //   return false;
  // }
  // props.history.push('/account');
  // };
  // let checkAddress = function () {
  //   let Address = document.getElementById('address').value;
  //   if (Address) {
  //     document.getElementById('addressMesg').innerHTML = 'OK';
  //     return true;
  //   } else {
  //     document.getElementById('addressMesg').innerHTML = '暱稱不可為空白';
  //     return false;
  //   }
  // };
  // let checkAddressMobile = function () {
  //   let Address = document.getElementById('addressMobile').value;
  //   if (Address) {
  //     document.getElementById('addressMesgMobile').innerHTML = 'OK';
  //     return true;
  //   } else {
  //     document.getElementById('addressMesgMobile').innerHTML = '暱稱不可為空白';
  //     return false;
  //   }
  // };
  // let checkNickName = function () {
  //   let nickName = document.getElementById('nickName').value;
  //   if (nickName) {
  //     document.getElementById('nickNameMesg').innerHTML = 'OK';
  //     return true;
  //   } else {
  //     document.getElementById('nickNameMesg').innerHTML = '暱稱不可為空白';
  //     return false;
  //   }
  // };
  // let checkNickNameMobile = function () {
  //   let nickName = document.getElementById('nickNameMobile').value;
  //   if (nickName) {
  //     document.getElementById('nickNameMesgMobile').innerHTML = 'OK';
  //     return true;
  //   } else {
  //     document.getElementById('nickNameMesgMobile').innerHTML =
  //       '暱稱不可為空白';
  //     return false;
  //   }
  // };
  // let checkPwdMobile = function () {
  //   let passWord = document.getElementById('pwdMobile').value;
  //   let checkPwd = document.getElementById('checkPwdMobile').value;
  //   if (passWord === checkPwd) {
  //     document.getElementById('pwdMesgMobile').innerHTML = 'OK';
  //     return true;
  //   } else {
  //     document.getElementById('pwdMesgMobile').innerHTML = '密碼輸入不一致!!';
  //     return false;
  //   }
  // };

  // let checkPwd = function () {
  //   let passWord = document.getElementById('pwd').value;
  //   let checkPwd = document.getElementById('checkPwd').value;
  //   if (passWord === checkPwd) {
  //     document.getElementById('pwdMesg').innerHTML = 'OK';
  //     return true;
  //   } else {
  //     document.getElementById('pwdMesg').innerHTML = '密碼輸入不一致!!';
  //     return false;
  //   }
  // };
  function checkCellPhone(cellphone) {
    if (cellphone.match(/^09[0-9]{8}$/)) {
      return true;
    }
  }
  let checkPhoneMobile = function () {
    let cellPhone = document.getElementById('cellPhoneMobile').value;
    let result = checkCellPhone(cellPhone);
    if (result) {
      document.getElementById('phoneMesgMobile').innerHTML = 'OK';
      return true;
    } else if (!cellPhone) {
      document.getElementById('phoneMesgMobile').innerHTML = '請輸入手機號碼';
    } else {
      document.getElementById('phoneMesgMobile').innerHTML =
        '手機號碼格式錯誤!!';
      return false;
    }
  };
  let checkPhone = function () {
    let cellPhone = document.getElementById('cellPhone').value;
    let result = checkCellPhone(cellPhone);
    if (result) {
      document.getElementById('phoneMesg').innerHTML = 'OK';
      return true;
    } else if (!cellPhone) {
      document.getElementById('phoneMesg').innerHTML = '請輸入手機號碼';
    } else {
      document.getElementById('phoneMesg').innerHTML = '手機號碼格式錯誤!!';
      return false;
    }
  };
  return (
    <>
      <div className="row bg-white">
        <SideBar />

        <div className="col mainCotent">
          <br />
          <div>
            <img src={require('../images/account3.svg')} alt="account3" />
          </div>
          <div className="row">
            <div className="col-1"></div>
            <div className="col-6 lastpage">
              <img
                style={{ cursor: 'pointer' }}
                src={require('../images/lastpage.svg')}
                alt="lastpage"
                className="nav-link"
                activeClassName="active"
                onClick={() => {
                  props.history.goBack();
                }}
              />
            </div>
          </div>
          {/* -----------------------Mobile-------------------------- */}
          <form action="" className="row MobileEditcontent">
            <div className="col-8 container table-bg">
              <table className="editTable">
                <tbody>
                  <tr className="bBorder">
                    <div className="row">
                      <div className="col-6">
                        <img
                          src={avatar}
                          className="avatarIconMobileEdit"
                          alt="memberIcon"
                        />
                      </div>
                      <div className="col-12"></div>
                      <div className="col-3 "></div>
                      <div className="col-4">
                        <label
                          for="chooseAvatarMobile"
                          className="btn-primary"
                          style={{ borderRadius: '10px', width: '7em' }}
                        >
                          請選擇照片
                        </label>
                        <input
                          type="file"
                          name="file1"
                          id="chooseAvatarMobile"
                          style={{ display: 'none' }}
                        />
                      </div>
                    </div>
                  </tr>

                  <tr className="bBorder">
                    <div className="row accountRow">
                      <div className="col-1"></div>
                      <div className="col divLeft">
                        <td className="divLeft" style={{ display: 'block' }}>
                          E-mail帳號:
                        </td>
                        <label className="accountText">{email}</label>
                      </div>
                    </div>
                  </tr>

                  <tr className="bBorder">
                    <div className="row accountRow">
                      <div className="col-1"></div>
                      <div className="col-8 divLeft">
                        <td className="divLeft" style={{ display: 'block' }}>
                          密碼:
                        </td>
                        <label className="accountText2">********</label>
                      </div>
                    </div>
                  </tr>

                  <tr className="bBorder">
                    <div className="row accountRow">
                      <div className="col-1"></div>
                      <div className="col-10 divLeft">暱稱</div>
                      <div className="col-1"></div>
                      <div className="col-8 divLeft">
                        <input
                          className="nickName"
                          type="text"
                          id="nickNameMobile"
                          // onBlur={checkNickNameMobile}
                          placeholder={name}
                          onChange={(event) => {
                            setName(event.target.value);
                          }}
                        />
                        <span id="nickNameMesgMobile"></span>
                      </div>
                    </div>
                  </tr>

                  <tr className="bBorder">
                    <div className="row accountRow2">
                      <div className="col-1"></div>
                      <div className="col-10 divLeft">性別</div>
                      <div className="col-1"></div>
                      <div className="col-8 divLeft">
                        <select
                          style={{ color: '#656765' }}
                          onChange={(event) => {
                            if (event.target.value === '女') {
                              setGender('F');
                            } else {
                              setGender('M');
                            }
                          }}
                        >
                          <option selected disabled>
                            {sex}
                          </option>
                          <option>男</option>
                          <option>女</option>
                        </select>
                      </div>
                    </div>
                  </tr>
                  <tr className="bBorder">
                    <div className="row accountRow">
                      <div className="col-1"></div>
                      <div className="col-10 divLeft">生日</div>
                      <div className="col-1"></div>
                      <div className="col divLeft">
                        <input
                          style={{ color: '#656765' }}
                          type="date"
                          id="dateofbirth"
                          value={birthday}
                          onChange={(event) => {
                            setBirthday(event.target.value);
                          }}
                        />
                      </div>
                    </div>
                  </tr>

                  <tr className="bBorder">
                    <div className="row accountRow2">
                      <div className="col-1"></div>
                      <div className="col-10 divLeft">手機</div>
                      <div className="col-1"></div>
                      <div className="col-6">
                        <input
                          type="text"
                          className="cellphone divLeft"
                          id="cellPhoneMobile"
                          placeholder={phone}
                          onBlur={checkPhoneMobile}
                          onChange={(event) => {
                            setPhone(event.target.value);
                          }}
                        />
                        <span id="phoneMesgMobile"></span>
                      </div>
                    </div>
                  </tr>

                  <tr className="addressMobile">
                    <div className="row accountRow">
                      <div className="col-1"></div>
                      <div className="col-10 divLeft">地址</div>
                      <div className="row accountRow">
                        <div className="col-3"></div>
                        <div className="col">
                          <TWzipcode
                            countyValue={county}
                            css={[
                              'form-control county-sel',
                              'form-control district-sel',
                              'form-control zipcode',
                            ]}
                            handleChangeCounty={handleChange1}
                            handleChangeDistrict={handleChange2}
                            handleChangeZipcode={handleChange2}
                          />
                          <br />
                          <input type="text" value={county + district} />
                          <input
                            className="addressMobile"
                            style={{ display: 'none' }}
                            type="text"
                            placeholder={address}
                            onChange={(event) => {
                              setAddressData(
                                county + district + event.target.value
                              );
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </tr>
                  <tr className="lastRow"></tr>
                </tbody>
              </table>
            </div>
          </form>
          <div className="row buttonMobile">
            <div className="col-1"></div>
            <div className="col-5">
              <NavLink
                to="/Account"
                className="nav-link"
                activeClassName="active"
              >
                <button className="btn-green">取消</button>
              </NavLink>
            </div>
            <div className="col-5">
              <button
                className="nav-link btn-main"
                activeClassName="active"
                style={{ cursor: 'pointer', marginTop: '25px' }}
                onClick={() => {
                  setModalShow(true);
                  updateMembertoServer();
                  setTimeout(() => {
                    window.location.reload();
                  }, 3500);
                }}
              >
                <MyVerticallyCenteredModal
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                />
                保存
              </button>
            </div>
          </div>
          {/* -----------------------EndMobile-------------------------- */}

          <form
            method="post"
            enctype="multipart/form-data"
            action=""
            className="row content"
          >
            <div className="col-lg-12 container table-bg">
              <table className="editTable">
                <tbody>
                  <tr className="bBorder" style={{ marginBottom: '10px' }}>
                    <div className="row">
                      <div className="col-1 align-self-end">
                        <td style={{ paddingBottom: '30px' }}>頭像</td>
                      </div>
                      <div className="col-2"></div>
                      <div className="col-6">
                        <img
                          src={avatar}
                          className="avatarIcon"
                          alt="memberIcon"
                        />
                      </div>
                      <div className="col-12"></div>
                      <div className="col-4"></div>
                      <div className="col-4">
                        <label
                          for="chooseAvatar"
                          className="btn-primary"
                          style={{ borderRadius: '10px', width: '7em' }}
                        >
                          請選擇照片
                        </label>
                        <input
                          type="file"
                          name="file1"
                          id="chooseAvatar"
                          style={{ display: 'none' }}
                        />
                      </div>
                    </div>
                  </tr>

                  <tr className="bBorder">
                    <div className="row accountRow">
                      <div className="col-1"></div>
                      <div className="col-11 divLeft">
                        <td>E-mail帳號:</td>
                        <br />
                        <label className="accountText">{email}</label>
                      </div>
                    </div>
                  </tr>

                  <tr className="bBorder">
                    <div className="row accountRow2">
                      <div className="col-1"></div>
                      <div className="col-11 divLeft">
                        <td>密碼:</td>
                        <br />
                        <label className="accountText2">********</label>
                      </div>
                    </div>
                  </tr>

                  <tr className="bBorder">
                    <div className="row accountRow">
                      <div className="col-1"></div>
                      <div className="col-11 divLeft">暱稱</div>
                      <div className="col-1"></div>
                      <div className="col-4 ">
                        <input
                          className="nickName"
                          type="text"
                          id="nickName"
                          placeholder={name}
                          onChange={(event) => {
                            setName(event.target.value);
                          }}
                        />
                      </div>
                    </div>
                  </tr>

                  <tr className="bBorder">
                    <div className="row accountRow2">
                      <div className="col-1"></div>
                      <div className="col-11 divLeft">性別</div>
                      <div className="col-1"></div>
                      <div className="col-6 divLeft">
                        <select
                          style={{ color: '#656765' }}
                          onChange={(event) => {
                            if (event.target.value === '女') {
                              setGender('F');
                            } else {
                              setGender('M');
                            }
                          }}
                        >
                          <option selected disabled>
                            {sex}
                          </option>
                          <option>男</option>
                          <option>女</option>
                        </select>
                      </div>
                    </div>
                  </tr>
                  <tr className="bBorder">
                    <div className="row accountRow">
                      <div className="col-1"></div>
                      <div className="col-11 divLeft">生日</div>
                      <div className="col-1"></div>
                      <div className="col divLeft">
                        <input
                          style={{ color: '#656765' }}
                          value={birthday}
                          type="date"
                          name="dateofbirth"
                          id="dateofbirth"
                          onChange={(event) => {
                            setBirthday(event.target.value);
                          }}
                        />
                      </div>
                    </div>
                  </tr>

                  <tr className="bBorder">
                    <div className="row accountRow2">
                      <div className="col-1"></div>
                      <div className="col-11 divLeft">手機</div>
                      <div className="col-1"></div>
                      <div className="col-4 divLeft">
                        <input
                          type="text"
                          className="cellPhone"
                          id="cellPhone"
                          placeholder={phone}
                          onBlur={checkPhone}
                          onChange={(event) => {
                            setPhone(event.target.value);
                          }}
                        />
                        <span id="phoneMesg"></span>
                      </div>
                    </div>
                  </tr>

                  <tr className="address addressPC">
                    <div className="row accountRow">
                      <div className="row accountRow">
                        <div className="col-1"></div>
                        <div className="col-11 divLeft">地址</div>
                        <div className="col-1"></div>
                        <div className="col-3">
                          <p className="divLeft">縣市</p>
                          <p className="divLeft">區/鄉/鎮</p>
                          <p className="divLeft">郵遞區號</p>
                        </div>
                        <div>
                          <TWzipcode
                            countyValue={county}
                            css={[
                              'form-control county-sel',
                              'form-control district-sel',
                              'form-control zipcode',
                            ]}
                            handleChangeCounty={handleChange1}
                            handleChangeDistrict={handleChange2}
                            handleChangeZipcode={handleChange2}
                          />
                        </div>
                        <div className="col-12"></div>
                        <div className="col-1"></div>
                        <span className="col-lg-3">
                          <input type="text" value={county + district} />
                        </span>
                        <span>
                          <input
                            type="text"
                            id="address"
                            placeholder={address}
                            style={{ width: '108%' }}
                            onChange={(event) => {
                              setAddressData(
                                county + district + event.target.value
                              );
                            }}
                          />
                        </span>
                      </div>
                    </div>
                  </tr>
                  <tr className="lastRow"></tr>
                </tbody>
              </table>
            </div>
          </form>
          <div className="row button">
            <div className="col-4">
              <NavLink
                to="/Account"
                className="nav-link"
                activeClassName="active"
              >
                <button className="btn-green">取消</button>
              </NavLink>
            </div>
            <div className="col-4"></div>
            <div className="col">
              <button
                style={{ marginTop: '20px' }}
                className="btn-main"
                onClick={() => {
                  setModalShow(true);
                  updateMembertoServer();
                  setTimeout(() => {
                    window.location.reload();
                  }, 3500);
                }}
              >
                保存
              </button>
              <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
              />
            </div>
          </div>
        </div>
        <div className="col-3 sideBar"></div>
      </div>
    </>
  );
}

export default withRouter(EditAccount);
