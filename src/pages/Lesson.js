import React from 'react';
import MakeUpStepList from '../components/lesson/MakeUpStepList';
import ProductList from '../components/lesson/ProductList';

const MOCK_MARKUP_STEP_LIST = [
  {
    id: 1,
    label: 'Step 1',
    image: 'assets/images/lesson/step-dummy.png',
    description: '滾滾長江東逝水滾滾長滾滾長江東逝水滾滾長江東滾滾長江東逝水滾滾長江東'  
  },
  {
    id: 2,
    label: 'Step 2',
    image: 'assets/images/lesson/step-dummy.png',
    description: '滾滾長江東逝水滾滾長滾滾長江東逝水滾滾長江東滾滾長江東逝水滾滾長江東'  
  },
  {
    id: 3,
    label: 'Step 3',
    image: 'assets/images/lesson/step-dummy.png',
    description: '滾滾長江東逝水滾滾長滾滾長江東逝水滾滾長江東滾滾長江東逝水滾滾長江東'  
  },
  {
    id: 4,
    label: 'Step 4',
    image: 'assets/images/lesson/step-dummy.png',
    description: '滾滾長江東逝水滾滾長滾滾長江東逝水滾滾長江東滾滾長江東逝水滾滾長江東'  
  },
  {
    id: 5,
    label: 'Step 5',
    image: 'assets/images/lesson/step-dummy.png',
    description: '滾滾長江東逝水滾滾長滾滾長江東逝水滾滾長江東滾滾長江東逝水滾滾長江東'  
  },
];

const MOCK_MARKUP_PRODUCT_LIST = [
  {
    id: 1,
    brand: 'YSL BEAUTY',
    image: 'assets/images/lesson/product-dummy.png',
    nameEn: 'ROUGE VOLUPTE',
    nameZh: '情挑誘吻星鑽蜜唇膏',
    button: '商品詳細',
  },
  {
    id: 2,
    brand: 'YSL BEAUTY',
    image: 'assets/images/lesson/product-dummy.png',
    nameEn: 'ROUGE VOLUPTE',
    nameZh: '情挑誘吻星鑽蜜唇膏',
    button: '商品詳細',
  },
  {
    id: 3,
    brand: 'YSL BEAUTY',
    image: 'assets/images/lesson/product-dummy.png',
    nameEn: 'ROUGE VOLUPTE',
    nameZh: '情挑誘吻星鑽蜜唇膏',
    button: '商品詳細',
  },
  {
    id: 4,
    brand: 'YSL BEAUTY',
    image: 'assets/images/lesson/product-dummy.png',
    nameEn: 'ROUGE VOLUPTE',
    nameZh: '情挑誘吻星鑽蜜唇膏',
    button: '商品詳細',
  },
];

const Lesson = () => (
  <main className="make-up" data-aos="fade-in" data-aos-duration="400">
    <div className="bg-pink">
      <section>
        <div className="container">
          <div className="container--rounded" data-aos="fade-up">
            <div className="heading text-center">
              <div className="main-title-before"></div>
                <div className="main-title">
                  <h2>MAKEUP LESSON</h2>
                  <h4>步驟教學</h4>
                </div>
              <div className="main-title-after"></div>
            </div>
            <MakeUpStepList list={MOCK_MARKUP_STEP_LIST} />
          </div>
        </div>
      </section>
    </div>
    <div className="make-up-subsection" data-aos="fade-in" data-aos-duration="400">
      <div data-aos="fade-up">
        <div className="sub-title-deco">
          <div className="sub-title">
            <p className="sub-title-eng">USED ITEM</p>
            <p className="sub-title-chs">使用商品</p>
          </div>
        </div>
        <ProductList list={MOCK_MARKUP_PRODUCT_LIST} />
      </div>
    </div>
  </main>
);

export default Lesson;
