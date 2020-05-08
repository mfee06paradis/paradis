import Result1Product1Image from '../images/lesson/1/PRODUCT1.jpg';
import Result1Product2Image from '../images/lesson/1/PRODUCT2.jpg';
import Result1Product3Image from '../images/lesson/1/PRODUCT3.jpg';
import Result1Product4Image from '../images/lesson/1/PRODUCT4.jpg';
import Result1Product5Image from '../images/lesson/2/PRODUCT1.jpg';
import Result1Product6Image from '../images/lesson/2/PRODUCT2.jpg';
import Result2Product1Image from '../images/lesson/2/PRODUCT4.jpg';
import Result2Product2Image from '../images/lesson/3/PRODUCT2.jpg';
import Result2Product3Image from '../images/lesson/3/PRODUCT3.jpg';
import Result2Product4Image from '../images/lesson/3/PRODUCT4.jpg';
import Result2Product5Image from '../images/lesson/3/PRODUCT5.jpg';
import Result2Product6Image from '../images/lesson/2/PRODUCT3.jpg';

const MOCK_QUESTIONS = [
  {
    id: 1,
    label: 'QUES1',
    title: '在日光或是足夠明亮的地方，觀察手部血管的呈色?',
    option1: '藍色',
    option2: '綠色',
  },
  {
    id: 2,
    label: 'QUES2',
    title: '適合金色飾品？還是銀色飾品？',
    option1: '金色',
    option2: '銀色',
  },
  {
    id: 3,
    label: 'QUES3',
    title: '檢視自己在日曬後是否有以下情狀?',
    option1: '曬紅',
    option2: '曬黑',
  },
  {
    id: 4,
    label: 'QUES4',
    title: '你的眼睛瞳孔顏色屬於?',
    option1: '偏黑',
    option2: '淡棕色',
  },
  {
    id: 5,
    label: 'QUES5',
    title: '你的唇色和臉頰的顏色?',
    option1: '粉橘或紅棕',
    option2: '偏紫或粉紅色',
  },
];

const MOCK_RESULTS = [
  {
    id: 1,
    response: '屬於 ”冷色調肌膚”， 建議選擇灰、粉紅調多一點的粉底，飾品推薦：銀飾。',
    products: [
      {
        id: 1,
        image: Result1Product1Image,
        nameEn: 'Marshmallow Finish Powder',
        nameZh: '棉花糖蜜粉餅',
        button: '商品詳細',
        price: 'NT.1000',
      },
      {
        id: 2,
        image: Result1Product2Image,
        nameEn: 'Perfect Stylist Eyes',
        nameZh: '完美色計眼影',
        price: 'NT.1300',
      },
      {
        id: 3,
        image: Result1Product3Image,
        nameEn: 'Powder Cheeks',
        nameZh: '巧麗腮紅組',
        price: 'NT.1400',
      },
      {
        id: 4,
        image: Result1Product4Image,
        nameEn: 'Stay-On Balm Rouge',
        nameZh: '絲滑豐潤唇膏',
        price: 'NT.1500',
      },
      {
        id: 5,
        image: Result1Product5Image,
        nameEn: 'Essence in Foundation',
        nameZh: '精華素粉底液',
        price: 'NT.1800',
      },
      {
        id: 6,
        image: Result1Product6Image,
        nameEn: 'UV White Clear So t Touth Foundation',
        nameZh: '透明白肌防曬粉餅',
        price: 'NT.1000',
      },
    ],
  },
  {
    id: 2,
    response: '屬於 ”暖色調肌膚”，暖色調膚色的人，象牙色系粉底能幫襯出較具光澤感的健康氣色。飾品推薦：金飾、玫瑰金。',
    products: [
      {
        id: 1,
        image: Result2Product1Image,
        nameEn: 'Cream cheek',
        nameZh: '腮紅霜',
        price: 'NT.1500',
      },
      {
        id: 2,
        image: Result2Product2Image,
        nameEn: 'Jewelstar Eyes',
        nameZh: '炫光朝露眼影',
        price: 'NT.1300',
      },
      {
        id: 3,
        image: Result2Product3Image,
        nameEn: 'Strong Eyes Liner',
        nameZh: '極細專業眼線液',
        price: 'NT.1500',
      },
      {
        id: 4,
        image: Result2Product4Image,
        nameEn: 'Curing Jet Mascara',
        nameZh: '魔翹亮眼睫毛膏',
        price: 'NT.1500',
      },
      {
        id: 5,
        image: Result2Product5Image,
        nameEn: 'Stay-On Balm Rouge',
        nameZh: '唇彩水蠟筆',
        price: 'NT.1300',
      },
      {
        id: 6,
        image: Result2Product6Image,
        nameEn: 'GOKUNOBI MASCARA',
        nameZh: '魔法極纖長睫毛膏',
        price: 'NT.1600',
      },
    ],
  },
];

export {
  MOCK_QUESTIONS,
  MOCK_RESULTS,
};
