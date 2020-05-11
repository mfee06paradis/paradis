import tutorialDummy1Image from '../images/makeup/tutorial-dummy-1.jpg';
import tutorialDummy2Image from '../images/makeup/tutorial-dummy-2.png';
import tutorialDummy3Image from '../images/makeup/tutorial-dummy-3.jpg';

const MOCK_TUTORIAL_LIST = [
  {
    id: 1,
    label: '氣質妝容',
    image: tutorialDummy1Image,
    contentTop: '婉約氣質!',
    contentBottom: '鄰家系夢幻OL妝♥',
    url: '/lesson/1',
  },
  {
    id: 2,
    label: '透明妝容',
    image: tutorialDummy2Image,
    contentTop: '無辜迷人!',
    contentBottom: '清新裸透x 透明系女孩♥',
    url: '/lesson/2',
  },
  {
    id: 3,
    label: '性感妝容',
    image: tutorialDummy3Image,
    contentTop: '魅惑電眼!',
    contentBottom: '派對x性感歐美妝♥',
    url: '/lesson/3',
  }
];

export {
  MOCK_TUTORIAL_LIST,
};
