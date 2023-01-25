import { useState, useEffect } from "react";
import { HStack, VStack } from "@chakra-ui/react";
import Die from "./die";
import Word from "./word";

// TODO: check if rolling one random number (1 - 7776) or 5 random numbers (1 - 6) is mor secure
// TODO: check if the default Math.random() function is random enough for a good six word passphrase

export default function WordOutput({ number = "11111", word = "unkown" }) {
  const [state, setState] = useState(0);
  useEffect(() => {
    setState(state + 1);
  }, [number, word]);
  return (
    <>
      <VStack w="272px" h="96px" justify="center">
        <HStack w="272px" h="48px">
          <Die number={parseInt(number[0])} duration={1} state={state} />
          <Die number={parseInt(number[1])} duration={1.5} state={state} />
          <Die number={parseInt(number[2])} duration={2} state={state} />
          <Die number={parseInt(number[3])} duration={2.5} state={state} />
          <Die number={parseInt(number[4])} duration={3} state={state} />
        </HStack>
        <Word word={word} duration={3} />
      </VStack>
    </>
  );
}
