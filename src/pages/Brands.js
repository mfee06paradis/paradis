import React, { useState, useEffect } from 'react';
import '../styles/member.scss';
import Footer from '../components/Footer';
function Brands(props) {
  return (
    <>
      <div className="col-4 brandBlank" style={{ display: 'none' }}></div>
      <div className="bg-pink">
        <hr className="hr-white"></hr>
        <div className="container">
          <div className="context-full">
            <div className="context-full-before"></div>
            <div className="context-full-mid">
              <div className="col-12 ">
                <img
                  className="brandText"
                  src={require('../images/brands.svg')}
                  alt="brands"
                />{' '}
                <img
                  src={require('../images/brandsMobile.svg')}
                  alt="brands"
                  className="brandBlank"
                  style={{ display: 'none' }}
                />
              </div>
              <div className="row">
                <div className="col-lg-5 col-12">
                  <img
                    src={require('../images/mac.svg')}
                    alt="mac"
                    className="brandText"
                  />
                  <img
                    src={require('../images/macMobile.svg')}
                    alt="mac"
                    className="brandBlank"
                    style={{ display: 'none' }}
                  />
                </div>
                <div className="col-7 brandText">
                  M·A·C擁抱獨特性：我們尊重每個人獨特的美，提供不分年齡，不分種族和性別的服務。
                  <br />
                  <br />
                  M·A·C是活躍的社群共同體，由熱愛彩妝，追求技巧與創意的專業彩妝師一起努力為每一個人打造獨特的美。
                  <br />
                  <br />
                  M·A·C身為趨勢影響者，我們與時尚、藝術和流行文化等不同領域的佼佼者合作，攜手創造無數的趨勢和經典。
                  <br />
                </div>
              </div>
              <hr className="hr-gold"></hr>
              <div className="row">
                <div className="col-lg-5 col-12">
                  <img
                    src={require('../images/bobbiBrown.svg')}
                    alt="bobbiBrown"
                    className="brandText"
                  />
                  <img
                    src={require('../images/bobbiBrownMobile.svg')}
                    alt="bobbiBrown"
                    className="brandBlank"
                    style={{ display: 'none' }}
                  />
                </div>
                <div className="col-7 brandText">
                  色選多元性 —— 所有膚色都能找到屬於妳的完美色選
                  <br />
                  <br />
                  原生膚色 —— 找到妳的原生膚色，底妝更加明亮，有光澤
                  <br />
                  <br />
                  美麗，妳有絕對的掌握權
                  <br />
                </div>
              </div>
              <hr className="hr-gold"></hr>
              <div className="row">
                <div className="col-5">
                  <img
                    src={require('../images/nars.png')}
                    alt="nars"
                    className="brandText"
                  />
                  <img
                    src={require('../images/narsMobile.png')}
                    alt="nars"
                    className="brandBlank"
                    style={{ display: 'none' }}
                  />
                </div>
                <div className="col-7 brandText">
                  我的目標是讓人們看起來美麗，內在帶出了什麼。從我真的相信美在我們的品格之中。
                  <br />
                  <br />
                  形象建造師，煽動者，反傳統。
                  <br />
                  <br />
                  我喜歡驚喜，我盡量不要無聊。無聊。NARS系列是系列是永恆的，帶有時尚氣息。但是，我仍然喜歡挑釁。
                  <br />
                </div>
              </div>
              <hr className="hr-gold"></hr>
              <div className="row">
                <div className="col-5">
                  <img src={require('../images/yls.jpg')} alt="yls" />
                </div>
                <div className="col-7 brandText">
                  「追求愛情、快樂和不平凡的生命。」Yves Saint Laurent
                  Beauty定必實現這個承諾。
                  <br />
                  <br />
                  無畏，自由奔放，時代感，不拘謹的巴黎式典雅。
                  <br />
                  <br />
                  La Maison Saint Laurent傳遞在典雅和自由之間的氣息。
                  <br />
                </div>
              </div>
              <hr className="hr-gold"></hr>
              <div className="row">
                <div className="col-lg-5 col-12">
                  <img
                    src={require('../images/giorgio.svg')}
                    alt="giorgio"
                    className="brandText"
                  />
                  <img
                    src={require('../images/giorgioMobile.svg')}
                    alt="giorgio"
                    className="brandBlank"
                    style={{ display: 'none' }}
                  />
                </div>
                <div className="col-7 brandText">
                  由高級訂製時裝到時尚設計，Giorgio
                  Armani就是一個代表性的名字，代表着嚴選非凡用料的重要產品，一個相信美麗和實用性相輔相成的品牌。
                  <br />
                  <br />
                  充滿神祕感的Acqua di Gio，便是深受愛戴的男士香薰，
                  其女性版為Acqua di
                  Gioia；而同時適用於男、女士的Code則散發着迷人的誘惑。
                  <br />
                  <br />
                  一個極具個人化的彩妝願景，在製作嚴謹、使用方便、藝術感強，以及獨特豐厚柔順質感的基礎下，使其成為個人美容品的典範。.
                  <br />
                </div>
              </div>
              <br></br>
              <br></br>
              <br></br>
            </div>
            <div className="context-full-after"></div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Brands;
