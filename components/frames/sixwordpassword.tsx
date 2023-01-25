import { useState, useEffect } from "react";
import { Box, Flex, VStack, HStack, Text, Button } from "@chakra-ui/react";
import WordOutput from "../dice/wordoutput";

export default function SixWordPassword() {
  const wordList = require("../../public/effwordlist.json");
  const [rollState, setRollState] = useState(true);
  const [wordArray, setWordArray] = useState([
    "unkown",
    "unkown",
    "unkown",
    "unkown",
    "unkown",
    "unkown",
  ]);
  const [numArray, setNumArray] = useState([
    "11111",
    "11111",
    "11111",
    "11111",
    "11111",
    "11111",
  ]);

  useEffect(() => {
    let tempNumArray = [];
    let tempWordArray = [];
    let tempNum = 0;
    for (let i = 0; i < 6; i++) {
      tempNum = Math.floor(Math.random() * Object.keys(wordList).length);
      tempNumArray[i] = wordList[tempNum].number;
      tempWordArray[i] = wordList[tempNum].word;
    }
    setNumArray(tempNumArray);
    setWordArray(tempWordArray);
  }, [rollState]);

  return (
    <>
      <Box m="auto">
        <HStack
          h="58px"
          w="54em"
          m="auto"
          p="12px"
          borderWidth="1px"
          borderRadius="lg"
          justify="space-between"
        >
          <Text>{wordArray.join("")}</Text>{" "}
          <Box>
            <Button variant="outline" onClick={() => setRollState(!rollState)}>
              Roll
            </Button>
            <Button
              variant="outline"
              onClick={() => {
                navigator.clipboard.writeText(wordArray.join(""));
              }}
            >
              Copy
            </Button>
          </Box>
        </HStack>
        <VStack m="20px">
          <HStack spacing="50px">
            <WordOutput number={numArray[0]} word={wordArray[0]} />
            <WordOutput number={numArray[1]} word={wordArray[1]} />
            <WordOutput number={numArray[2]} word={wordArray[2]} />
          </HStack>
          <HStack spacing="50px">
            <WordOutput number={numArray[3]} word={wordArray[3]} />
            <WordOutput number={numArray[4]} word={wordArray[4]} />
            <WordOutput number={numArray[5]} word={wordArray[5]} />
          </HStack>
        </VStack>
      </Box>
    </>
  );
}
