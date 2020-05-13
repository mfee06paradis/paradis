import React, { useState, useEffect } from 'react';
import SideBar from '../components/SideBar';

import { withRouter } from 'react-router-dom';

import '../styles/member.scss';

function MyFavorite(props) {
  return (
    <>
      <div className="row bg-white">
        <SideBar />
        <div className="col mainCotent">
          <br />
          <br />
          <img src={require('../images/myfavorite3.svg')} alt="myorders" />
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
          <div className="context-full">
            <div className="context-full-before"></div>
            <div className="context-full-mid">
              <div className="main-title row">
                <div className="col-12">
                  <p className="favoriteText">奢華緞面漆光唇釉(402珊情混音)</p>
                </div>
                <div className="col-2"></div>
                <div className="col-8">
                  <img
                    style={{ width: '100%' }}
                    src={require('../images/奢華緞面漆光唇釉.png')}
                    alt="myorders"
                  />
                </div>
                <div className="col-6 deleteMobile" style={{ display: 'none' }}>
                  <button className="btn-green">刪除收藏</button>
                </div>
                <div className="col-lg-12 col-6">
                  <button style={{ float: 'right' }} className="btn-main">
                    去購買
                  </button>
                  <button
                    style={{ float: 'left' }}
                    className="btn-green delete"
                  >
                    刪除收藏
                  </button>
                </div>
                <div className="col-12">
                  <hr className="hr-gold"></hr>
                  <p className="favoriteText">名模肌密光燦水凝露</p>
                </div>
                <div className="col-2"></div>
                <div className="col-8">
                  <img
                    style={{ width: '100%' }}
                    src={require('../images/名模肌密光燦水凝露.png')}
                    alt="myorders"
                  />
                </div>
                <div className="col-6 deleteMobile" style={{ display: 'none' }}>
                  <button className="btn-green">刪除收藏</button>
                </div>
                <div className="col-lg-12 col-6">
                  <button style={{ float: 'right' }} className="btn-main">
                    去購買
                  </button>
                  <button
                    style={{ float: 'left' }}
                    className="btn-green delete"
                  >
                    刪除收藏
                  </button>
                </div>
                <div className="col-12">
                  <hr className="hr-gold"></hr>
                  <p className="favoriteText">情挑誘光水唇膏(45禮服誘惑)</p>
                </div>
                <div className="col-2"></div>
                <div className="col-8">
                  <img
                    style={{ width: '100%' }}
                    src={require('../images/情挑誘光水唇膏.png')}
                    alt="myorders"
                  />
                </div>
                <div className="col-6 deleteMobile" style={{ display: 'none' }}>
                  <button className="btn-green">刪除收藏</button>
                </div>
                <div className="col-lg-12 col-6">
                  <button style={{ float: 'right' }} className="btn-main">
                    去購買
                  </button>
                  <button
                    style={{ float: 'left' }}
                    className="btn-green delete"
                  >
                    刪除收藏
                  </button>
                </div>
              </div>
            </div>
            <div className="context-full-after"></div>
          </div>
        </div>
        <div className="col-3 sideBar"></div>
      </div>
    </>
  );
}

export default withRouter(MyFavorite);
