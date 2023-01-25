import { useState, useEffect } from "react";
import {
  BsDice1,
  BsDice2,
  BsDice3,
  BsDice4,
  BsDice5,
  BsDice6,
  BsDice1Fill,
  BsDice2Fill,
  BsDice3Fill,
  BsDice4Fill,
  BsDice5Fill,
  BsDice6Fill,
} from "react-icons/bs";

function create_array(duration: number) {
  let array = [1, 2, 3, 4, 5, 6];
  let diearray = Array.from(
    { length: Math.floor((duration * 1000) / 50) },
    (_, i) => array[i % array.length]
  );
  return diearray;
}

export default function Die({
  number = 1,
  duration = 1,
  size = 48,
  state = 0,
}) {
  // generate random number
  // display randiom numbers in order for 2 seconds
  // end on final number

  const die: { die: JSX.Element }[] = [
    { die: <BsDice1 size={size} /> },
    { die: <BsDice2 size={size} /> },
    { die: <BsDice3 size={size} /> },
    { die: <BsDice4 size={size} /> },
    { die: <BsDice5 size={size} /> },
    { die: <BsDice6 size={size} /> },
  ];
  const [currentDie, SetCurrentDie] = useState(die[0]);

  useEffect(() => {
    let i = 0;
    const dieArray = create_array(duration);
    const timer = setInterval(() => {
      if (i == dieArray.length) {
        SetCurrentDie(die[number - 1]);
        clearInterval(timer);
      } else {
        SetCurrentDie(die[dieArray[i] - 1]);
        i++;
      }
    }, (duration * 1000) / dieArray.length);
  }, [state]);

  return <>{currentDie.die}</>;
}
