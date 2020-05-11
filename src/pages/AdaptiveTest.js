import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import TestBoard from '../components/adaptive-test/TestBoard';
import ProductList from '../components/adaptive-test/ProductList';
import { MOCK_QUESTIONS } from '../mock_data/adaptiveTest';
import '../styles/adaptive-test.scss';


const AdaptiveTest = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    AOS.init({
      once: true,
      easing: 'ease-in-out',
      duration: 800,
    });
  }, []);

  return (
    <>
      <main className="adaptive-test" data-aos="fade-in" data-aos-duration="400">
        <div className="bg-pink">
          <hr className="hr-white" />
          <section>
            <div className="container">
              <div className="context-full" data-aos="fade-up">
                <div className="context-full-before" />
                <div className="context-full-mid">
                  <div className="heading text-center">
                    <div className="main-title-before"></div>
                    <div className="main-title">
                      <h2>Adaptive Test</h2>
                      <h4>步驟教學</h4>
                    </div>
                    <div className="main-title-after"></div>
                  </div>
                  <div className="adaptive-test__description text-center">
                    <p>透過簡單的小測驗，了解自己是暖色性或冷色系皮膚，再挑選適合自己的彩妝品色號，讓你妝容完美不出錯!</p>
                  </div>
                  <TestBoard questions={MOCK_QUESTIONS} onSubmit={setProductList} />
                </div>
                <div className="context-full-after" />
              </div>
            </div>
          </section>
        </div>
      </main>
      {
        productList.length
          ? (
            <div className="adaptive-test-subsection" data-aos="fade-in" data-aos-duration="400">
              <div data-aos="fade-up">
                <ProductList list={productList} />
              </div>
            </div>
          )
          : null
      }
    </>
  );
};

export default AdaptiveTest;