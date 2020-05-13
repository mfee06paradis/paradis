import React, { useState, useEffect } from 'react';
import SideBar from '../components/SideBar';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { Modal } from 'react-bootstrap';
import '../styles/member.scss';
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
            <h1 className="sub-title-eng">已成功登出!</h1>
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
function Account(props) {
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
      sex = '';
  }

  const [address, setAddress] = useState('');
  const [avatar, setAvatar] = useState('');

  const getMemberFromLocalStorage = () => {
    const member = JSON.parse(localStorage.getItem('Member')) || [];
    setEmail(member.memberEmail);
    setName(member.memberName);
    setGender(member.membersex);
    setBirthday(member.memberBirthday);
    setPhone(member.memberPhone);
    setAddress(member.memberAddress);
    if (!member.avatar) {
      setAvatar('./images/member-icon.svg');
    } else {
      setAvatar(member.avatar);
    }
  };
  useEffect(() => {
    getMemberFromLocalStorage();
  }, []);

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
                  props.history.push('/member');
                }}
              />
            </div>
          </div>

          {/* -----------------------Mobile-------------------------- */}
          <div className="row MobileEditcontent">
            <div className="col-10 container table-bg">
              <table className="editTable">
                <tbody>
                  <tr className="bBorder">
                    <div className="row ">
                      <div className="col-1"></div>
                      <div className="col-6">
                        <img
                          src={avatar}
                          className="avatarIconMobileEdit"
                          alt="memberIcon"
                          style={{
                            marginLeft: '3.5em',
                          }}
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
                        <br />
                        <label className="accountText">{email}</label>
                      </div>
                    </div>
                  </tr>

                  <tr className="bBorder">
                    <div className="row accountRow2">
                      <div className="col-1"></div>
                      <div className="col divLeft">
                        <td className="divLeft" style={{ display: 'block' }}>
                          密碼:
                        </td>
                        <br />
                        <label className="accountText2">********</label>
                      </div>
                    </div>
                  </tr>

                  <tr className="bBorder">
                    <div className="row accountRow">
                      <div className="col-1"></div>
                      <div className="col-11 divLeft">
                        <td className="divLeft" style={{ display: 'block' }}>
                          暱稱:
                        </td>
                        <br />
                        <label className="accountText">{name}</label>
                      </div>
                    </div>
                  </tr>

                  <tr className="bBorder">
                    <div className="row accountRow2">
                      <div className="col-1"></div>
                      <div className="col-11 divLeft">
                        <td className="divLeft" style={{ display: 'block' }}>
                          性別:
                        </td>
                        <br />
                        <label className="accountText2">{sex}</label>
                      </div>
                    </div>
                  </tr>
                  <tr className="bBorder">
                    <div className="row accountRow">
                      <div className="col-1"></div>
                      <div className="col-11 divLeft">
                        <td className="divLeft" style={{ display: 'block' }}>
                          生日:
                        </td>
                        <br />
                        <label className="accountText">{birthday}</label>
                      </div>
                    </div>
                  </tr>

                  <tr className="bBorder">
                    <div className="row accountRow2">
                      <div className="col-1"></div>
                      <div className="col-11 divLeft">
                        <td className="divLeft" style={{ display: 'block' }}>
                          手機:
                        </td>
                        <br />
                        <label className="accountText2">{phone}</label>
                      </div>
                    </div>
                  </tr>

                  <tr className="address">
                    <div className="row accountRow">
                      <div className="col-1"></div>
                      <div className="col-11 divLeft">
                        <td className="divLeft" style={{ display: 'block' }}>
                          地址:
                        </td>
                        <br />
                        <label className="accountText">{address}</label>
                      </div>
                      <div className="col-1"></div>
                      <input type="text" style={{ visibility: 'hidden' }} />
                      <input type="text" style={{ visibility: 'hidden' }} />
                      <input type="text" style={{ visibility: 'hidden' }} />
                    </div>
                  </tr>
                  <tr className="lastRow"></tr>
                </tbody>
              </table>
            </div>
          </div>

          <div class="row">
            <div className="col-6 editButtonMobile">
              <img
                className="nav-link"
                activeClassName="active"
                src={require('../images/logout.svg')}
                alt="logout"
                style={{ cursor: 'pointer' }}
                onClick={() => {
                  setModalShow(true);
                  setTimeout(() => {
                    props.history.push('/home');
                    localStorage.clear();
                    window.location.reload();
                  }, 2000);
                }}
              />
              <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
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
          {/* -----------------------EndMobile-------------------------- */}

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
                          src={avatar}
                          className="avatarIcon"
                          alt="memberIconForSideBar"
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
                      <br />
                    </div>
                  </tr>

                  <tr className="bBorder">
                    <div className="row accountRow">
                      <div className="col-1"></div>
                      <div className="col-11 divLeft">
                        <td>暱稱:</td>
                        <br />
                        <label className="accountText">{name}</label>
                      </div>
                    </div>
                  </tr>

                  <tr className="bBorder">
                    <div className="row accountRow2">
                      <div className="col-1"></div>
                      <div className="col-11 divLeft">
                        <td>性別:</td>
                        <br />
                        <label className="accountText2">{sex}</label>
                      </div>
                    </div>
                  </tr>
                  <tr className="bBorder">
                    <div className="row accountRow">
                      <div className="col-1"></div>
                      <div className="col-11 divLeft">
                        <td>生日:</td>
                        <br />
                        <label className="accountText">{birthday}</label>
                      </div>
                    </div>
                  </tr>

                  <tr className="bBorder">
                    <div className="row accountRow2">
                      <div className="col-1"></div>
                      <div className="col-11 divLeft">
                        <td>手機:</td>
                        <br />
                        <label className="accountText2">{phone}</label>
                      </div>
                    </div>
                  </tr>

                  <tr>
                    <div className="row accountRow">
                      <div className="col-1"></div>
                      <div className="col-11 divLeft">
                        <td>地址:</td>
                        <br />
                        <label className="accountText">{address}</label>
                      </div>
                      <div className="col-3" style={{ visibility: 'hidden' }}>
                        <p>縣市</p>
                      </div>
                      <div className="col-3" style={{ visibility: 'hidden' }}>
                        <p>縣市</p>
                      </div>
                      <input type="text" style={{ visibility: 'hidden' }} />
                      <input type="text" style={{ visibility: 'hidden' }} />
                      <input type="text" style={{ visibility: 'hidden' }} />
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
