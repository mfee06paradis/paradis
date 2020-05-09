import React, { useState, useEffect } from 'react';
import SideBar from '../components/SideBar';
import Address from '../components/Address';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import '../styles/member.scss';

function EditAccount(props) {
  let member = JSON.parse(localStorage.getItem('Member')) || [];
  let nameParseUserMember = member.MemberName;
  let sliceNameParseUserMember = nameParseUserMember.slice(1);
  let email = member.MemberEmail;
  // let password = parseUserMember.MemberPW;
  let gender = member.MemberSex;
  let sex;
  switch (gender) {
    case 'F':
      sex = '女';
      break;
    default:
      sex = '男';
  }
  let birthday = member.MemberBirthday;
  let phone = member.MemberPhone;
  let address = member.MemberAddress;

  async function updateMembertoLocalStorage(value) {
    let newMemberdata = value;
    localStorage.setItem('Member', JSON.stringify(newMemberdata));
  }

  useEffect(() => {
    console.log('ok');
  }, [member]);

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
  // function checkCellPhone(cellphone) {
  //   if (cellphone.match(/^09[0-9]{8}$/)) {
  //     return true;
  //   }
  // }
  // let checkPhoneMobile = function () {
  //   let cellPhone = document.getElementById('cellPhoneMobile').value;
  //   let result = checkCellPhone(cellPhone);
  //   if (result) {
  //     document.getElementById('phoneMesgMobile').innerHTML = 'OK';
  //     return true;
  //   } else {
  //     document.getElementById('phoneMesgMobile').innerHTML =
  //       '手機號碼格式錯誤!!';
  //     return false;
  //   }
  // };
  // let checkPhone = function () {
  //   let cellPhone = document.getElementById('cellPhone').value;
  //   let result = checkCellPhone(cellPhone);
  //   if (result) {
  //     document.getElementById('phoneMesg').innerHTML = 'OK';
  //     return true;
  //   } else {
  //     document.getElementById('phoneMesg').innerHTML = '手機號碼格式錯誤!!';
  //     return false;
  //   }
  // };
  return (
    <>
      <div className="row bg-white">
        <SideBar />

        <div className="col mainCotent">
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
                    <div className="row ">
                      <span className="col-6">
                        <img
                          src={require('../images/member-icon-for-sidebar.svg')}
                          alt="memberIconForSideBar"
                        />
                      </span>
                      <button className="chooseAvatar text-center">
                        選擇圖像
                      </button>
                    </div>
                  </tr>

                  <tr className="bBorder">
                    <div className="row accountRow">
                      <div className="col-1"></div>
                      <div className="col-10">
                        <td>E-mail帳號:</td>
                        <br />
                        <label className="accountText">{email}</label>
                      </div>
                    </div>
                  </tr>

                  <tr className="bBorder">
                    <div className="row accountRow">
                      <div className="col-1"></div>
                      <div className="col-11">
                        <td>密碼:</td>
                        <br />
                        <label className="accountText2">********</label>
                      </div>
                    </div>
                  </tr>

                  <tr className="bBorder">
                    <div className="row accountRow">
                      <div className="col-1"></div>
                      <div className="col-11">暱稱</div>
                      <div className="col-1"></div>
                      <div className="col-8 ">
                        <input
                          className="nickName"
                          type="text"
                          id="nickNameMobile"
                          // onBlur={checkNickNameMobile}
                          placeholder={sliceNameParseUserMember}
                        />
                        <span id="nickNameMesgMobile"></span>
                      </div>
                    </div>
                  </tr>

                  <tr className="bBorder">
                    <div className="row accountRow2">
                      <div className="col-1"></div>
                      <div className="col-11">性別</div>
                      <div className="col-1"></div>
                      <div className="col">
                        <select
                          style={{ color: '#656765' }}
                          onChange={(event) => {
                            if (event.target.value === '女') {
                              updateMembertoLocalStorage({
                                MemberID: '003',
                                MemberName: '杜子晴',
                                MemberPW: '1234abcd',
                                MemberSex: 'F',
                                MemberBirthday: '1991-03-24',
                                MemberPhone: '0994060776',
                                MemberEmail: 'Olivia54685@hotmail.com',
                                MemberAddress: '連江縣天津路305號',
                                MemberLevel: 'Member',
                                MemberCreatedAt: '2020-01-11',
                                MemberAvatar: '../images/avatar1.jpg',
                              });
                            } else {
                              updateMembertoLocalStorage({
                                MemberID: '003',
                                MemberName: '杜子晴',
                                MemberPW: '1234abcd',
                                MemberSex: 'M',
                                MemberBirthday: '1991-03-24',
                                MemberPhone: '0994060776',
                                MemberEmail: 'Olivia54685@hotmail.com',
                                MemberAddress: '連江縣天津路305號',
                                MemberLevel: 'Member',
                                MemberCreatedAt: '2020-01-11',
                                MemberAvatar: '../images/avatar1.jpg',
                              });
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
                      <div className="col-11">生日</div>
                      <div className="col-1"></div>
                      <div className="col">
                        <input
                          style={{ color: '#656765' }}
                          type="date"
                          id="dateofbirth"
                          value={birthday}
                        />
                      </div>
                    </div>
                  </tr>

                  <tr className="bBorder">
                    <div className="row accountRow2">
                      <div className="col-1"></div>
                      <div className="col-11">手機</div>
                      <div className="col-1"></div>
                      <div className="col-6">
                        <input
                          type="text"
                          className="cellphone"
                          id="cellPhoneMobile"
                          placeholder={phone}
                          // onBlur={checkPhoneMobile}
                        />
                        <span id="phoneMesgMobile"></span>
                      </div>
                    </div>
                  </tr>

                  <tr className="address">
                    <div className="row accountRow">
                      <div className="col-1"></div>
                      <div className="col-11">地址</div>
                      <div className="col-1"></div>
                      <div className="col-3">
                        <p>縣市</p>
                        <p>區/鄉/鎮</p>
                        <p>郵遞區號</p>
                      </div>
                      <div className="col-6">
                        <Address style={{ textAlign: 'left', textIndent: 0 }} />
                      </div>
                      <div className="col-12"></div>
                      <div className="col-1"></div>
                      <input
                        id="addressMobile"
                        type="text"
                        style={{ height: '6em', width: '80%' }}
                        placeholder={address}
                        // onBlur={checkAddressMobile}
                      />
                      <div className="col-12"></div>
                      <div className="col-1"></div>
                      <div id="addressMesgMobile"></div>
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
                <img src={require('../images/cancel2.svg')} alt="cancel2" />
              </NavLink>
            </div>
            <div className="col-5">
              <NavLink
                to="/Account"
                className="nav-link"
                activeClassName="active"
              >
                <img
                  src={require('../images/save2.svg')}
                  alt="save2"
                  // onClick={check}
                />
              </NavLink>
            </div>
          </div>
          {/* -----------------------EndMobile-------------------------- */}

          <form action="/account" className="row content">
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
                          src={require('../images/member-icon-for-sidebar.svg')}
                          alt="memberIconForSideBar"
                        />
                      </div>
                      <button className="text-center avatar">選擇圖像</button>
                    </div>
                  </tr>

                  <tr className="bBorder">
                    <div className="row accountRow">
                      <div className="col-1"></div>
                      <div className="col-11">
                        <td>E-mail帳號:</td>
                        <br />
                        <label className="accountText">{email}</label>
                      </div>
                    </div>
                  </tr>

                  <tr className="bBorder">
                    <div className="row accountRow2">
                      <div className="col-1"></div>
                      <div className="col-11">
                        <td>密碼:</td>
                        <br />
                        <label className="accountText2">********</label>
                      </div>
                    </div>
                  </tr>

                  <tr className="bBorder">
                    <div className="row accountRow">
                      <div className="col-1"></div>
                      <div className="col-11">暱稱</div>
                      <div className="col-1"></div>
                      <div className="col-8 ">
                        <input
                          className="nickName"
                          type="text"
                          id="nickName"
                          // onBlur={checkNickName}
                          placeholder={sliceNameParseUserMember}
                        />
                        <span id="nickNameMesg"></span>
                      </div>
                    </div>
                  </tr>

                  <tr className="bBorder">
                    <div className="row accountRow2">
                      <div className="col-1"></div>
                      <div className="col-11">性別</div>
                      <div className="col-1"></div>
                      <div className="col-6">
                        <select style={{ color: '#656765' }}>
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
                      <div className="col-11">生日</div>
                      <div className="col-1"></div>
                      <div className="col">
                        <input
                          style={{ color: '#656765' }}
                          value={birthday}
                          type="date"
                          name="dateofbirth"
                          id="dateofbirth"
                        />
                      </div>
                    </div>
                  </tr>

                  <tr className="bBorder">
                    <div className="row accountRow2">
                      <div className="col-1"></div>
                      <div className="col-11">手機</div>
                      <div className="col-1"></div>
                      <div className="col-8">
                        <input
                          type="text"
                          className="cellPhone"
                          id="cellPhone"
                          // onBlur={checkPhone}
                          placeholder={phone}
                        />
                        <span id="phoneMesg"></span>
                      </div>
                    </div>
                  </tr>

                  <tr className="address">
                    <div className="row accountRow">
                      <div className="col-1"></div>
                      <div className="col-11">地址</div>
                      <div className="col-1"></div>
                      <div className="col">
                        <div className="col-4">縣市</div>
                        <div className="col-12">
                          <select>
                            <option>1</option>
                            <option>2</option>
                          </select>
                        </div>
                        <div className="col-4">區/鄉/鎮</div>
                        <div className="col-12">
                          <select>
                            <option>1</option>
                            <option>2</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-12"></div>
                      <div className="col-1"></div>
                      <div className="col-10">
                        <input
                          type="text"
                          style={{ height: '6em' }}
                          id="address"
                          // onBlur={checkAddress}
                          placeholder={address}
                        />
                        <span id="addressMesg"></span>
                      </div>
                    </div>
                  </tr>
                  <tr className="lastRow"></tr>
                </tbody>
              </table>
            </div>
          </form>
          <div className="row button">
            <div className="col-8">
              <NavLink
                to="/Account"
                className="nav-link"
                activeClassName="active"
              >
                <button className="btn-green">取消</button>
                {/* <img src={require('../images/cancel.svg')} alt="cancel" /> */}
              </NavLink>
            </div>
            <div className="col">
              {/* <img
                className="nav-link"
                activeClassName="active"
                src={require('../images/save.svg')}
                alt="save"
                onClick={check}
                style={{ cursor: 'pointer' }}
              /> */}
              <button
                style={{ marginTop: '20px' }}
                className="btn-main"
                type="submit"
              >
                保存
              </button>
            </div>
          </div>
        </div>
        <div className="col-3 sideBar"></div>
      </div>
    </>
  );
}

export default withRouter(EditAccount);
