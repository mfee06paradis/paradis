import React from 'react';
import Banner from '../components/home/Banner';
import TutorialList from '../components/home/TutorialList';

const MOCK_TUTORIAL_LIST = [
  {
    id: 1,
    label: '唇妝教學',
    image: 'assets/images/index/tutorial-dummy.png',
    content: '文案文案文案文案文案文案',
    url: '/lesson',
  },
  {
    id: 2,
    label: '唇妝教學',
    image: 'assets/images/index/tutorial-dummy.png',
    content: '文案文案文案文案文案文案',
    url: '/lesson',
  },
  {
    id: 3,
    label: '唇妝教學',
    image: 'assets/images/index/tutorial-dummy.png',
    content: '文案文案文案文案文案文案',
    url: '/lesson',
  }
];

const Home = () => (
  <main className="index" data-aos="fade-in" data-aos-duration="400">
    <div className="bg-pink">
      <section>
        <div className="container">
          <Banner />
          <TutorialList list={MOCK_TUTORIAL_LIST} />
        </div>
      </section>
    </div>
    <div className="scroll-top" data-aos="fade-in" onClick={() => window.scrollTo(0,0)}>
      <img className="w-100" src="assets/images/index/scroll-top.png" alt="scroll-top" />
    </div>
  </main>
);

export default Home;
