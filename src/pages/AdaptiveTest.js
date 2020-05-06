import React, { useEffect } from 'react';
import AOS from 'aos';
import TestBoard from '../components/adaptive-test/TestBoard';
import ProductList from '../components/adaptive-test/ProductList';
import '../styles/adaptive-test.scss';

const MOCK_QUESTIONS = [
  {
    id: 1,
    label: 'QUES1',
    title: '動物森友會買得到嗎？',
  },
  {
    id: 2,
    label: 'QUES1',
    title: '動物森友會買得到嗎？',
  },
  {
    id: 3,
    label: 'QUES1',
    title: '動物森友會買得到嗎？',
  },
  {
    id: 4,
    label: 'QUES1',
    title: '動物森友會買得到嗎？',
  },
  {
    id: 5,
    label: 'QUES1',
    title: '動物森友會買得到嗎？',
  },
];

const MOCK_PRODUCT_LIST = [
  {
    id: 1,
    image: 'assets/images/adaptive-test/product-dummy.png',
    brand: 'YSL BEAUTY',
    nameEn: 'ROUGE VOLUPTE',
    nameZh: '情挑誘吻星鑽蜜唇膏',
    price: 'NT.500',
  },
  {
    id: 2,
    image: 'assets/images/adaptive-test/product-dummy.png',
    brand: 'YSL BEAUTY',
    nameEn: 'ROUGE VOLUPTE',
    nameZh: '情挑誘吻星鑽蜜唇膏',
    price: 'NT.500',
  },
  {
    id: 3,
    image: 'assets/images/adaptive-test/product-dummy.png',
    brand: 'YSL BEAUTY',
    nameEn: 'ROUGE VOLUPTE',
    nameZh: '情挑誘吻星鑽蜜唇膏',
    price: 'NT.500',
  },
  {
    id: 4,
    image: 'assets/images/adaptive-test/product-dummy.png',
    brand: 'YSL BEAUTY',
    nameEn: 'ROUGE VOLUPTE',
    nameZh: '情挑誘吻星鑽蜜唇膏',
    price: 'NT.500',
  },
  {
    id: 5,
    image: 'assets/images/adaptive-test/product-dummy.png',
    brand: 'YSL BEAUTY',
    nameEn: 'ROUGE VOLUPTE',
    nameZh: '情挑誘吻星鑽蜜唇膏',
    price: 'NT.500',
  },
  {
    id: 6,
    image: 'assets/images/adaptive-test/product-dummy.png',
    brand: 'YSL BEAUTY',
    nameEn: 'ROUGE VOLUPTE',
    nameZh: '情挑誘吻星鑽蜜唇膏',
    price: 'NT.500',
  },
];

const AdaptiveTest = () => {
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
                    <p>文案文案文案文案文案文案文案文案<br />文案文案文案文案<br />文案文案文案文案文案文案<br />文案文案文案</p>
                  </div>
                  <TestBoard questions={MOCK_QUESTIONS} />
                </div>
                <div className="context-full-after" />
              </div>
            </div>
          </section>
        </div>
      </main>
      <div className="adaptive-test-subsection" data-aos="fade-in" data-aos-duration="400">
        <div data-aos="fade-up">
          <ProductList list={MOCK_PRODUCT_LIST} />
        </div>
      </div>
    </>
  );
};

export default AdaptiveTest;
