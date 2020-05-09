import React, { useState, useEffect } from 'react';
import SideBar from '../components/SideBar';
import Address from '../components/Address';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import '../styles/member.scss';

function Account(props) {
  const member = localStorage.getItem('Member') || [];
  const parseUserMember = JSON.parse(member);
  const nameParseUserMember = parseUserMember.MemberName;
  const sliceNameParseUserMember = nameParseUserMember.slice(1);
  const email = parseUserMember.MemberEmail;
  // const password = parseUserMember.MemberPW;
  const gender = parseUserMember.MemberSex;
  let sex;
  switch (gender) {
    case 'F':
      sex = '女';
      break;
    default:
      sex = '男';
  }

  const birthday = parseUserMember.MemberBirthday;
  const phone = parseUserMember.MemberPhone;
  const address = parseUserMember.MemberAddress;

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
                      <div className="col-11">
                        <td>暱稱:</td>
                        <br />
                        <label className="accountText">
                          {sliceNameParseUserMember}
                        </label>
                      </div>
                      <div className="col-1"></div>
                      <div className="col-8 "></div>
                    </div>
                  </tr>

                  <tr className="bBorder">
                    <div className="row accountRow2">
                      <div className="col-1"></div>
                      <div className="col-11">
                        <td>性別:</td>
                        <br />
                        <label className="accountText2">{sex}</label>
                      </div>

                      <div className="col-1"></div>
                    </div>
                  </tr>
                  <tr className="bBorder">
                    <div className="row accountRow">
                      <div className="col-1"></div>
                      <div className="col-11">
                        <td>生日:</td>
                        <br />
                        <label className="accountText">{birthday}</label>
                      </div>

                      <div className="col-1"></div>
                    </div>
                  </tr>

                  <tr className="bBorder">
                    <div className="row accountRow2">
                      <div className="col-1"></div>
                      <div className="col-11">
                        <td>手機:</td>
                        <br />
                        <label className="accountText2">{phone}</label>
                      </div>

                      <div className="col-1"></div>
                      <div className="col-8"></div>
                    </div>
                  </tr>

                  <tr className="address">
                    <div className="row accountRow">
                      <div className="col-1"></div>
                      <div className="col-11">
                        <td>地址:</td>
                        <br />
                        <label className="accountText">{address}</label>
                      </div>

                      <div className="col-1"></div>
                      <div className="col-3" style={{ visibility: 'hidden' }}>
                        <p>縣市</p>
                      </div>
                      <div className="col-6" style={{ visibility: 'hidden' }}>
                        <Address style={{ textAlign: 'left', textIndent: 0 }} />
                      </div>
                      <div className="col-12"></div>
                      <div className="col-1"></div>
                      <input
                        type="text"
                        style={{
                          height: '6em',
                          width: '80%',
                          visibility: 'hidden',
                        }}
                      />
                    </div>
                  </tr>
                  <tr className="lastRow"></tr>
                </tbody>
              </table>
            </div>
          </form>
          <div class="row">
            <div className="col-6 editButtonMobile">
              <img
                className="nav-link"
                activeClassName="active"
                src={require('../images/logout.svg')}
                alt="logout"
                style={{ cursor: 'pointer' }}
                onClick={() => {
                  alert('已成功登出');
                  localStorage.clear();
                  props.history.push('/home');
                }}
              />
            </div>
            <div className="col-6 editButtonMobile">
              <NavLink
                to="/EditAccount"
                className="nav-link"
                activeClassName="active"
              >
                <img
                  src={require('../images/editButton.svg')}
                  alt="editButton"
                />
              </NavLink>
            </div>
          </div>
          {/* -----------------------Mobile-------------------------- */}

          <form action="" className="row content">
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
                    <div className="row accountRow2">
                      <div className="col-1"></div>
                      <div className="col-11">
                        <td>密碼:</td>
                        <br />
                        <label className="accountText2">********</label>
                      </div>
                      <br />
                    </div>
                  </tr>

                  <tr className="bBorder">
                    <div className="row accountRow">
                      <div className="col-1"></div>
                      <div className="col-11">
                        <td>暱稱:</td>
                        <br />
                        <label className="accountText">
                          {sliceNameParseUserMember}
                        </label>
                      </div>

                      <div className="col-1"></div>
                      <div className="col-8 "></div>
                    </div>
                  </tr>

                  <tr className="bBorder">
                    <div className="row accountRow2">
                      <div className="col-1"></div>
                      <div className="col-11">
                        <td>性別:</td>
                        <br />
                        <label className="accountText2">{sex}</label>
                      </div>

                      <div className="col-1"></div>
                    </div>
                  </tr>
                  <tr className="bBorder">
                    <div className="row accountRow">
                      <div className="col-1"></div>
                      <div className="col-11">
                        <td>生日:</td>
                        <br />
                        <label className="accountText">{birthday}</label>
                      </div>
                      <div className="col-1"></div>
                    </div>
                  </tr>

                  <tr className="bBorder">
                    <div className="row accountRow2">
                      <div className="col-1"></div>
                      <div className="col-11">
                        <td>手機:</td>
                        <br />
                        <label className="accountText2">{phone}</label>
                      </div>

                      <div className="col-1"></div>
                      <div className="col-8"></div>
                    </div>
                  </tr>

                  <tr>
                    <div className="row accountRow">
                      <div className="col-1"></div>
                      <div className="col-11">
                        <td>地址:</td>
                        <br />
                        <label className="accountText">{address}</label>
                      </div>
                      <div className="col-3" style={{ visibility: 'hidden' }}>
                        <p>縣市</p>
                      </div>
                      <div className="col-4" style={{ visibility: 'hidden' }}>
                        <Address />
                      </div>
                      <div className="col-12"></div>
                      <div className="col-1"></div>
                      <div className="col-10" style={{ visibility: 'hidden' }}>
                        <input type="text" />
                      </div>
                    </div>
                  </tr>
                  <tr className="lastRow"></tr>
                </tbody>
              </table>
            </div>
          </form>
        </div>
        <div className="col-3 sideBar">
          <NavLink
            to="/EditAccount"
            className="nav-link"
            activeClassName="active"
          >
            <div className="editButton" style={{ marginTop: '80%' }}>
              <img src={require('../images/editButton.svg')} alt="editButton" />
            </div>
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default withRouter(Account);
