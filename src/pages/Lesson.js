import React, { useEffect } from 'react';
import { useParams } from "react-router";
import AOS from 'aos';
import MakeUpStepList from '../components/lesson/MakeUpStepList';
import ProductList from '../components/lesson/ProductList';
import { MOCK_MAKEUP_STEP_LIST, MOCK_MAKEUP_PRODUCT_LIST } from '../mock_data/lesson';
import '../styles/lesson.scss';


const Lesson = () => {
  const { id } = useParams();
  const makeUpStepList = MOCK_MAKEUP_STEP_LIST[id] || [];
  const makeUpProductList = MOCK_MAKEUP_PRODUCT_LIST[id] || [];

  useEffect(() => {
    AOS.init({
      once: true,
      easing: 'ease-in-out',
      duration: 800,
    });
  }, []);

  return (
    <main className="lesson" data-aos="fade-in" data-aos-duration="400">
      <div className="bg-pink">
      <hr className="hr-white" />
        <section>
          <div className="container">
            <div className="context-full">
              <div className="context-full-before" />
              <div className="context-full-mid">
                <div className="heading text-center">
                  <div className="main-title-before"></div>
                    <div className="main-title">
                      <h2>MAKEUP LESSON</h2>
                      <h4>步驟教學</h4>
                    </div>
                  <div className="main-title-after"></div>
                </div>
                <MakeUpStepList list={makeUpStepList} />
              </div>
              <div className="context-full-after" />
            </div>
          </div>
        </section>
      </div>
      <div className="lesson-subsection" data-aos="fade-in" data-aos-duration="400">
        <div data-aos="fade-up">
          <div className="sub-title-deco">
            <div className="sub-title">
              <p className="sub-title-eng">USED ITEM</p>
              <p className="sub-title-chs">使用商品</p>
            </div>
          </div>
          <ProductList list={makeUpProductList} />
        </div>
      </div>
    </main>
  );
};

export default Lesson;
