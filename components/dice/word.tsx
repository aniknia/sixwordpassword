import { useState, useEffect } from "react";

// TODO: design several ways of revealing the word (fade, slot machine, )

function create_array(wordList: Object, duration: number) {
  let randomNumber = Math.floor(
    Math.random() *
    (Object.keys(wordList).length - Math.floor((duration * 1000) / 50))
  );

  let wordArray = Array.from(
    { length: Math.floor((duration * 1000) / 50) },
    (_, i) =>
      wordList[((i + randomNumber) * i) % Object.keys(wordList).length].word
  );
  return wordArray;
}

export default function Word({ word = "blank", duration = 1 }) {
  const wordList = require("../../public/effwordlist.json");
  const [currentWord, setCurrentWord] = useState(word);

  useEffect(() => {
    let i = 0;
    const wordArray = create_array(wordList, duration);
    const timer = setInterval(() => {
      if (i == wordArray.length) {
        setCurrentWord(word);
        clearInterval(timer);
      } else {
        setCurrentWord(wordArray[i]);
        i++;
      }
    }, (duration * 1000) / wordArray.length);
  }, [word]);

  return (
    <>
      <p style={{ fontSize: '1.875rem', marginTop: '3px important' }}>
        {currentWord}
      </p>
    </>
  );
}
