import React, { useEffect } from 'react';
import AOS from 'aos';
import Banner from '../components/makeup/Banner';
import TutorialList from '../components/makeup/TutorialList';
import '../styles/makeup.scss';

const MOCK_TUTORIAL_LIST = [
  {
    id: 1,
    label: '唇妝教學',
    image: 'assets/images/makeup/tutorial-dummy.png',
    content: '文案文案文案文案文案文案',
    url: '/lesson',
  },
  {
    id: 2,
    label: '唇妝教學',
    image: 'assets/images/makeup/tutorial-dummy.png',
    content: '文案文案文案文案文案文案',
    url: '/lesson',
  },
  {
    id: 3,
    label: '唇妝教學',
    image: 'assets/images/makeup/tutorial-dummy.png',
    content: '文案文案文案文案文案文案',
    url: '/lesson',
  }
];

const Makeup = () => {
  useEffect(() => {
    AOS.init({
      once: true,
      easing: 'ease-in-out',
      duration: 800,
    });
  }, []);

  return (
    <main className="makeup" data-aos="fade-in" data-aos-duration="400">
      <div className="bg-pink">
        <hr className="hr-white" />
        <section>
          <div className="container">
            <Banner />
            <TutorialList list={MOCK_TUTORIAL_LIST} />
          </div>
        </section>
      </div>
      <div className="scroll-top" data-aos="fade-in" onClick={() => window.scrollTo(0,0)}>
        <img className="w-100" src="assets/images/makeup/scroll-top.png" alt="scroll-top" />
      </div>
    </main>
  );
};

export default Makeup;
