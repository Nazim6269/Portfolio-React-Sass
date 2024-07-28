import { animate, motion, useMotionValue, useTransform } from 'framer-motion';
import { useEffect } from 'react';

const CounterAnimation = () => {
  const count = useMotionValue(0);
  const roundedValue = useTransform(count, Math.round);

  useEffect(() => {
    const animation = animate(count, 100, { duration: 2 });

    return animation.stop;
  }, [count]);
  return (
    <div className="animation__container">
      <div className="animation__wrapper">
        <h1>Acknowledgements</h1>
        <div className="animation__items">
          <motion.div className="animation__item">{roundedValue}</motion.div>
          <motion.div className="animation__item">{roundedValue}</motion.div>
          <motion.div className="animation__item">{roundedValue}</motion.div>
        </div>
      </div>
    </div>
  );
};

export default CounterAnimation;
