import React from 'react';
import CounterAnimation from '../../Components/counterAnimation/CounterAnimation';
import '../../Components/counterAnimation/_counterAnimation.scss';
import Intro from '../../Components/intro/Intro';

const Home = () => {
  return (
    <div>
      <Intro />
      <CounterAnimation />
    </div>
  );
};

export default Home;
