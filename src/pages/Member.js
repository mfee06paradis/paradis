import React, { useState, useEffect } from 'react';
import SideBar from '../components/SideBar';
import { NavLink } from 'react-router-dom';
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
            <h1 className="sub-title-eng">已成功登出!</h1>
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
function Member(props) {
  const member = localStorage.getItem('Member') || [];
  const parseUserMember = JSON.parse(member);
  const nameParseUserMember = parseUserMember.memberName;
  const sliceNameParseUserMember = nameParseUserMember.slice(1);
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
      <div className="row bg-white">
        <SideBar />

        <div className="col mainCotent">
          <div className="col-12 memberdec">
            <img src={require('../images/memberdec.svg')} alt="memberdec" />
          </div>
          <NavLink to="/Account">
            <img
              className="registerBox2"
              src={require('../images/registerbox2.svg')}
              alt="registerBox2"
            />
          </NavLink>
          <div className="row">
            <div className="col-3"></div>
            <div className="col-6">
              <img
                src={require('../images/avatar1.jpg')}
                alt="membericon"
                style={{
                  width: '70%',
                  marginLeft: '3em',
                  borderRadius: '50%',
                  paddingBottom: '10px',
                }}
              />
            </div>
          </div>
          <div className="col-12" style={{ height: '6em' }}>
            <div className="pinkRibbon">歡迎! {sliceNameParseUserMember}</div>
          </div>
          <NavLink to="/Account" className="nav-link" activeClassName="active">
            <div className="col-12">
              <img
                className="registerBox"
                src={require('../images/registerbox.svg')}
                alt="registerbox"
              />
            </div>
          </NavLink>

          {/* -------------------Mobile-------------------- */}
          <div className="row">
            <div className="col-6">
              <NavLink
                to="/Account"
                className="nav-link"
                activeClassName="active"
              >
                <img
                  src={require('../images/account2.svg')}
                  alt="account2"
                  className="mobileIcon"
                />
              </NavLink>
            </div>
            <div className="col-6">
              <NavLink
                to="/CreditCard"
                className="nav-link"
                activeClassName="active"
              >
                <img
                  src={require('../images/creditCard2.svg')}
                  alt="creditCard2"
                  className="mobileIcon"
                />
              </NavLink>
            </div>
            <div className="col-6">
              <NavLink
                to="/myorders"
                className="nav-link"
                activeClassName="active"
              >
                <img
                  src={require('../images/myorder2.svg')}
                  alt="myorder2"
                  className="mobileIcon"
                />
              </NavLink>
            </div>
            <div className="col-6">
              <NavLink
                to="/myfavorite"
                className="nav-link"
                activeClassName="active"
              >
                <img
                  src={require('../images/myfavorite2.svg')}
                  alt="myfavorite2"
                  className="mobileIcon"
                />
              </NavLink>
            </div>
            <div className="col-2"></div>
            <div className="col-8">
              <img
                src={require('../images/logout.svg')}
                alt="logout"
                className="mobileIcon"
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
          </div>
          {/* -------------------EndMobile-------------------- */}
        </div>
        <div className="col-3 sideBar"></div>
      </div>
    </>
  );
}

export default withRouter(Member);
