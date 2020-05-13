import React, { useState, useEffect } from 'react';
import SideBar from '../components/SideBar';

import { withRouter } from 'react-router-dom';

import '../styles/member.scss';

function MyOrders(props) {
  return (
    <>
      <div className="row bg-white">
        <SideBar />
        <div className="col mainCotent">
          <br />
          <br />
          <img src={require('../images/myorders3.svg')} alt="myorders" />
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
          <div className="container">
            <div className="context-full">
              <div className="context-full-before"></div>
              <div className="context-full-mid">
                <div className="main-title divLeft">
                  <tr className="divLeft">
                    <td style={{ display: 'block' }} className="divLeft">
                      訂單編號：
                    </td>
                    <td style={{ display: 'block' }} lassName="divLeft">
                      Paradis-2020041201
                    </td>
                  </tr>
                  <hr className="hr-gold"></hr>
                  <tr>
                    <td style={{ display: 'block' }} className="divLeft">
                      訂購時間：
                    </td>
                    <td style={{ display: 'block' }} className="divLeft">
                      2020/04/13/13:02
                    </td>
                  </tr>
                  <hr className="hr-gold"></hr>
                  <p>訂單細節：</p>
                  <p>性感嘟唇蜜(嫩粉)</p>
                  <p>數量：2</p>
                  <p>單價：NT$ 650</p>
                  <hr className="hr-gold"></hr>
                  <p>總價：NT$1300</p>
                  <hr className="hr-gold"></hr>
                  <p style={{ textAlign: 'right' }}>處理狀態：</p>
                  <p style={{ textAlign: 'right' }}>2020/04/16/18:38--已取貨</p>
                  <br></br>
                </div>
              </div>
              <div className="context-full-after"></div>
            </div>
          </div>
        </div>
        <div className="col-3 sideBar"></div>
      </div>
    </>
  );
}

export default withRouter(MyOrders);
