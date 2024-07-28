import { animate, motion, useMotionValue, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

//TODO: have to add plus sign after roundedValue

const CounterAnimation = () => {
  const [hasCounted, setHasCounted] = useState(false);
  const count = useMotionValue(0);
  const roundedValue = useTransform(count, Math.round);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          if (!hasCounted) {
            setHasCounted(true);
          }
          const animation = animate(count, 100, { duration: 2 });
          return () => animation.stop();
        } else {
          count.set(0);
          setHasCounted(false);
        }
      },
      { threshold: 0.5 },
    );

    const currentElement = counterRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [count, counterRef, hasCounted]);
  return (
    <div className="animation__container" ref={counterRef}>
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
