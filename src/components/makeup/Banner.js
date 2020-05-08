import React from 'react';
import { NavLink } from 'react-router-dom';

import bannerDesktopImage from '../../images/makeup/banner.png'
import bannerMobileImage from '../../images/makeup/banner-mobile.png'

const renderDesktopBanner = () => (
  <div className="banner-wrapper--desktop d-none d-lg-block" data-aos="fade-in">
    <div className="banner__image">
      <img className="mw-100" src={bannerDesktopImage} alt="banner" />
      <div className="banner__triangle"></div>
      <NavLink
        to="/adaptive-test"
      >
        <div className="banner__cloud d-flex flex-column justify-content-center">
          <div>點我做<br />適性問卷</div>
          <div>贈優惠碼禮</div>
        </div>
      </NavLink>
      <div className="banner__content">
        <p>化妝品千百種<br />不知道該如何選擇嗎？</p>
      </div>
    </div>
  </div>
);

const renderMobileBanner = () => (
  <div className="banner-wrapper--mobile d-block d-lg-none">
    <div className="banner__image">
      <img className="w-100" src={bannerMobileImage} alt="banner" />
    </div>
    <div className="banner__content">
      <NavLink
        to="/adaptive-test"
      >
        <div className="banner__cloud d-flex flex-column justify-content-center">
          <div>點我做<br />適性問卷</div>
          <div>贈優惠碼禮</div>
        </div>
      </NavLink>
      <p>化妝品千百種<br />不知道該如何選擇嗎？</p>
    </div>
  </div>
);

const Banner = () => (
  <>
    {renderDesktopBanner()}
    {renderMobileBanner()}
  </>
);

export default Banner;
