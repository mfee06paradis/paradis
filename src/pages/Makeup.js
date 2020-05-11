import React, { useEffect } from 'react';
import AOS from 'aos';

import Banner from '../components/makeup/Banner';
import TutorialList from '../components/makeup/TutorialList';
import scrollTopImage from '../images/makeup/scroll-top.png';
import { MOCK_TUTORIAL_LIST } from '../mock_data/makeup';
import '../styles/makeup.scss';


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
      {/* <div className="scroll-top" data-aos="fade-in" onClick={() => window.scrollTo(0,0)}>
        <img className="w-100" src={scrollTopImage} alt="scroll-top" />
      </div> */}
    </main>
  );
};

export default Makeup;
