import React, { useState, useEffect } from 'react';
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
function SideBar(props) {
  const [name, setName] = useState('');
  const [modalShow, setModalShow] = useState(false);
  // const [avatar, setAvatar] = useState('');

  useEffect(() => {
    const member = JSON.parse(localStorage.getItem('Member')) || [];
    setName(member.memberName);
    // setAvatar(member.MemberAvatar);
  }, []);
  return (
    <>
      <div className="col-3 sideBar ">
        <div className="col-8 sideBarContent">
          <div>
            <img
              // src={require({ avatar })}
              src={require('../images/avatar1.jpg')}
              style={{
                width: '70%',
                marginLeft: '2em',
                borderRadius: '50%',
                paddingBottom: '10px',
              }}
              alt="memberIconForSideBar"
            />
          </div>
          <div className="pinkRibbonSideBar">歡迎! {name.slice(1)}</div>
          {/* <img
            src={require('../images/pink-ribbon-for-sidebar.svg')}
            alt="pinkRibbon"
          /> */}

          <NavLink
            to="/Account"
            className="row sideBarText nav-link"
            activeClassName="active"
          >
            <img
              className="sideBarIcon"
              src={require('../images/account.svg')}
              alt="account"
            />
            <div>
              <div>My Account</div>
              <div className="sideItems">個人資料</div>
            </div>
          </NavLink>

          <hr className="sidehr" />
          <NavLink
            to="/CreditCard"
            className="row sideBarText nav-link"
            activeClassName="active"
          >
            <img
              className="sideBarIcon"
              src={require('../images/creditCard.svg')}
              alt="creditCard"
            />
            <div>
              <div>Credit Cart</div>
              <div className="sideItems">信用卡</div>
            </div>
          </NavLink>

          <hr className="sidehr" />
          <NavLink
            to="/myorders"
            className="row sideBarText nav-link"
            activeClassName="active"
          >
            <img
              className="sideBarIcon"
              src={require('../images/myorders.svg')}
              alt="myorders"
            />
            <div>
              <div>My Orders</div>
              <div className="sideItems">我的訂單</div>
            </div>
          </NavLink>

          <hr className="sidehr" />
          <NavLink
            to="/myfavorite"
            className="row sideBarText nav-link"
            activeClassName="active"
          >
            <img
              className="sideBarIcon"
              src={require('../images/myfavorite.svg')}
              alt="myfavorite"
            />
            <div>
              <div>My Favorite</div>
              <div className="sideItems">我的最愛</div>
            </div>
          </NavLink>

          <hr className="sidehr" />
          <div>
            <img
              style={{ cursor: 'pointer' }}
              className="nav-link"
              activeClassName="active"
              src={require('../images/logout.svg')}
              alt="logout"
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
      </div>
    </>
  );
}
export default withRouter(SideBar);
