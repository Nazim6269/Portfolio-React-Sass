import { motion, useSpring, useTransform } from 'framer-motion';
import { useEffect } from 'react';

const Digit = ({ place, value }) => {
  let valueRoundedToPlace = Math.floor(value / place);
  let animatedValue = useSpring(valueRoundedToPlace);

  useEffect(() => {
    animatedValue.set(valueRoundedToPlace);
  }, [animatedValue, valueRoundedToPlace]);

  return (
    <div style={{ height }}>
      {[...Array(10).keys()].map((i) => (
        <Number key={i} mv={animatedValue} number={i} />
      ))}
    </div>
  );
};

const Number = ({ mv, number }) => {
  let y = useTransform(mv, (latest) => {
    let placeValue = latest % 10;
    let offset = (10 + number - placeValue) % 10;

    let memo = offset * height;

    if (offset > 5) {
      memo -= 10 * height;
    }

    return memo;
  });

  return <motion.span style={{ y }}>{number}</motion.span>;
};

const fontSize = 30;
const padding = 15;
const height = fontSize + padding;

const CounterAnimation = ({ value }) => {
  return (
    <div style={{ fontSize }}>
      <Digit place={100} value={value} />
      <Digit place={10} value={value} />
      <Digit place={1} value={value} />
    </div>
  );
};

export default CounterAnimation;
