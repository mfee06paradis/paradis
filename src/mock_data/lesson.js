import ID1Step1Image from '../images/lesson/1/STEP1.jpg';
import ID1Step2Image from '../images/lesson/1/STEP2.jpg';
import ID1Step3Image from '../images/lesson/1/STEP3.jpg';
import ID1Step4Image from '../images/lesson/1/STEP4.jpg';
import ID2Step1Image from '../images/lesson/2/STEP1.jpg';
import ID2Step2Image from '../images/lesson/2/STEP2.jpg';
import ID2Step3Image from '../images/lesson/2/STEP3.jpg';
import ID2Step4Image from '../images/lesson/2/STEP4.jpg';
import ID3Step1Image from '../images/lesson/3/STEP1.jpg';
import ID3Step2Image from '../images/lesson/3/STEP2.jpg';
import ID3Step3Image from '../images/lesson/3/STEP3.jpg';
import ID3Step4Image from '../images/lesson/3/STEP4.jpg';
import ID3Step5Image from '../images/lesson/3/STEP5.jpg';

import ID1Product1Image from '../images/lesson/1/PRODUCT1.jpg';
import ID1Product2Image from '../images/lesson/1/PRODUCT2.jpg';
import ID1Product3Image from '../images/lesson/1/PRODUCT3.jpg';
import ID1Product4Image from '../images/lesson/1/PRODUCT4.jpg';
import ID2Product1Image from '../images/lesson/2/PRODUCT1.jpg';
import ID2Product2Image from '../images/lesson/2/PRODUCT2.jpg';
import ID2Product3Image from '../images/lesson/2/PRODUCT3.jpg';
import ID2Product4Image from '../images/lesson/2/PRODUCT4.jpg';
import ID3Product1Image from '../images/lesson/3/PRODUCT1.jpg';
import ID3Product2Image from '../images/lesson/3/PRODUCT2.jpg';
import ID3Product3Image from '../images/lesson/3/PRODUCT3.jpg';
import ID3Product4Image from '../images/lesson/3/PRODUCT4.jpg';
import ID3Product5Image from '../images/lesson/3/PRODUCT5.jpg';

const MOCK_MAKEUP_STEP_LIST = {
  1: [
    {
      id: 1,
      label: 'Step 1',
      image: ID1Step1Image,
      description: '在基礎粉地液上再輕輕壓上蜜粉，抗光澤的粉末可以減少出油及增加持妝能力!', 
    },
    {
      id: 2,
      label: 'Step 2',
      image: ID1Step2Image,
      description: '選用粉嫩色或大地色眼影，用手指輕輕壓在眼摺上，即可打造深邃效果。',
    },
    {
      id: 3,
      label: 'Step 3',
      image: ID1Step3Image,
      description: '使用粉色系腮紅，輕輕鋪在雙頰笑肌的位置，打造白裡透紅的自然感!',
    },
    {
      id: 4,
      label: 'Step 4',
      image: ID1Step4Image,
      description: '建議選用偏粉嫩透明系的光澤唇膏，營造自然粉嫩感。',
    },
  ],
  2: [
    {
      id: 1,
      label: 'Step 1',
      image: ID2Step1Image,
      description: '在基礎粉地液上再輕輕壓上蜜粉，抗光澤的粉末可以減少出油及增加持妝能力!',
    },
    {
      id: 2,
      label: 'Step 2',
      image: ID2Step2Image,
      description: '選用粉嫩色或大地色眼影，用手指輕輕壓在眼摺上，即可打造深邃效果。',
    },
    {
      id: 3,
      label: 'Step 3',
      image: ID2Step3Image,
      description: '使用粉色系腮紅，輕輕鋪在雙頰笑肌的位置，打造白裡透紅的自然感!',  
    },
    {
      id: 4,
      label: 'Step 4',
      image: ID2Step4Image,
      description: '建議選用偏粉嫩透明系的光澤唇膏，營造自然粉嫩感。',  
    },
  ],
  3: [
    {
      id: 1,
      label: 'Step 1',
      image: ID3Step1Image,
      description: '選用遮瑕度較高的粉地夜，建議可以用海綿或是美妝刷上妝，營造無暇底妝。',
    },
    {
      id: 2,
      label: 'Step 2',
      image: ID3Step2Image,
      description: '使用光澤感較重以及較搶眼顏色的眼影盤，先用淡底色系上滿眼皮，在眼摺處使用較深色系強調渲染感。',  
    },
    {
      id: 3,
      label: 'Step 3',
      image: ID3Step3Image,
      description: '性感電眼不可或缺的就是眼線，畫到眼尾處稍微往上勾，魅惑視覺!',
    },
    {
      id: 4,
      label: 'Step 4',
      image: ID3Step4Image,
      description: '使用睫毛底膏+濃翹纖長型睫毛膏，打造強烈妝感。',  
    },
    {
      id: 5,
      label: 'Step 5',
      image: ID3Step5Image,
      description: '配合眼影色系選擇唇膏，使整體妝容更加完美。',  
    },
  ],
};

const MOCK_MAKEUP_PRODUCT_LIST = {
  1: [
    {
      id: 1,
      image: ID1Product1Image,
      nameEn: 'Marshmallow Finish Powder',
      nameZh: '棉花糖蜜粉餅',
      button: '商品詳細',
    },
    {
      id: 2,
      image: ID1Product2Image,
      nameEn: 'Perfect Stylist Eyes',
      nameZh: '完美色計眼影',
      button: '商品詳細',
    },
    {
      id: 3,
      image: ID1Product3Image,
      nameEn: 'Powder Cheeks',
      nameZh: '巧麗腮紅組',
      button: '商品詳細',
    },
    {
      id: 4,
      image: ID1Product4Image,
      nameEn: 'Stay-On Balm Rouge',
      nameZh: '絲滑豐潤唇膏',
      button: '商品詳細',
    },
  ],
  2: [
    {
      id: 1,
      image: ID2Product1Image,
      nameEn: 'Essence in Foundation',
      nameZh: '精華素粉底液',
      button: '商品詳細',
    },
    {
      id: 2,
      image: ID2Product2Image,
      nameEn: 'UV White Clear So t Touth Foundation',
      nameZh: '透明白肌防曬粉餅',
      button: '商品詳細',
    },
    {
      id: 3,
      image: ID2Product3Image,
      nameEn: 'GOKUNOBI MASCARA',
      nameZh: '魔法極纖長睫毛膏',
      button: '商品詳細',
    },
    {
      id: 4,
      image: ID2Product4Image,
      nameEn: 'Cream cheek',
      nameZh: '腮紅霜',
      button: '商品詳細',
    },
  ],
  3: [
    {
      id: 1,
      image: ID3Product1Image,
      nameEn: 'Essence in Foundation',
      nameZh: '精華素粉底液',
      button: '商品詳細',
    },
    {
      id: 2,
      image: ID3Product2Image,
      nameEn: 'Jewelstar Eyes',
      nameZh: '炫光朝露眼影',
      button: '商品詳細',
    },
    {
      id: 3,
      image: ID3Product3Image,
      nameEn: 'Strong Eyes Liner',
      nameZh: '極細專業眼線液',
      button: '商品詳細',
    },
    {
      id: 4,
      image: ID3Product4Image,
      nameEn: 'Curing Jet Mascara',
      nameZh: '魔翹亮眼睫毛膏',
      button: '商品詳細',
    },
    {
      id: 4,
      image: ID3Product5Image,
      nameEn: 'Stay-On Balm Rouge',
      nameZh: '唇彩水蠟筆',
      button: '商品詳細',
    },
  ],
};

export {
  MOCK_MAKEUP_STEP_LIST,
  MOCK_MAKEUP_PRODUCT_LIST,
};
