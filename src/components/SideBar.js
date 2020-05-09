import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import '../styles/member.scss';

function SideBar(props) {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/members')
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        // console.log(myJson);
        setUserData(myJson);
      });
  }, []);

  const member = localStorage.getItem('Member') || [];
  const parseUserMember = JSON.parse(member);
  const nameParseUserMember = parseUserMember.MemberName;
  const sliceNameParseUserMember = nameParseUserMember.slice(1);
  // const avatarParseUserMember = parseUserMember.MemberAvatar;

  return (
    <>
      <div className="col-3 sideBar ">
        <div className="col-8 sideBarContent">
          <div>
            <img
              src={require('../images/avatar1.jpg')}
              style={{ width: '70%', marginLeft: '2em', borderRadius: '50%' }}
              alt="memberIconForSideBar"
            />
          </div>
          <div className="pinkRibbonSideBar">
            歡迎! {sliceNameParseUserMember}
          </div>
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
                alert('已成功登出');
                localStorage.clear();
                props.history.push('/home');
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
export default withRouter(SideBar);
