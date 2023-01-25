import { useState, useEffect } from "react";
import {
  Box,
  Flex,
  VStack,
  HStack,
  Text,
  Button,
  IconButton,
} from "@chakra-ui/react";
import WordOutput from "../dice/wordoutput";
import { FiRefreshCw, FiCopy } from "react-icons/fi";

export default function SixWordPassword() {
  const wordList = require("../../public/effwordlist.json");
  const [rollState, setRollState] = useState(true);
  const [entropy, setEntropy] = useState(0);
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
    let length = 0;
    for (let i = 0; i < 6; i++) {
      tempNum = Math.floor(Math.random() * Object.keys(wordList).length);
      tempNumArray[i] = wordList[tempNum].number;
      tempWordArray[i] = wordList[tempNum].word;
      length += parseInt(wordList[tempNum].word.length);
    }
    setNumArray(tempNumArray);
    setWordArray(tempWordArray);
    const tempEntropy = ((length * Math.log(26)) / Math.log(2)).toFixed(4);
    setEntropy(parseInt(tempEntropy));
  }, [rollState]);

  return (
    <>
      <VStack m="auto" p="20px">
        <Flex m="auto" wrap="wrap" align="center" justify="space-between">
          <Box>
            <Box
              h={["74px", "50px"]}
              w={["325px", "600px"]}
              m="auto"
              p="12px"
              borderWidth="1px"
              borderRadius="lg"
            >
              <Text m="auto" align="center" opacity="0.6">
                {wordArray.join("")}
              </Text>{" "}
            </Box>
            <Text p="2px" fontSize="sm" align="center" opacity="0.6">
              Entropy: {entropy} bits
            </Text>
          </Box>
          <HStack m="auto" p="10px">
            <IconButton
              h="50px"
              w="50px"
              aria-label="Roll"
              icon={<FiRefreshCw size="25px" />}
              variant="outline"
              onClick={() => setRollState(!rollState)}
            />

            <IconButton
              h="50px"
              w="50px"
              aria-label="Copy"
              icon={<FiCopy size="25px" />}
              variant="outline"
              onClick={() => {
                navigator.clipboard.writeText(wordArray.join(""));
              }}
            />
          </HStack>
        </Flex>
        <VStack m="auto" p="auto">
          <Flex wrap="wrap" align="center" justify="space-around">
            <WordOutput number={numArray[0]} word={wordArray[0]} />
            <WordOutput number={numArray[1]} word={wordArray[1]} />
            <WordOutput number={numArray[2]} word={wordArray[2]} />
          </Flex>
          <Flex wrap="wrap" align="center" justify="space-around">
            <WordOutput number={numArray[3]} word={wordArray[3]} />
            <WordOutput number={numArray[4]} word={wordArray[4]} />
            <WordOutput number={numArray[5]} word={wordArray[5]} />
          </Flex>
        </VStack>
      </VStack>
    </>
  );
}
