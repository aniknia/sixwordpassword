import { useState, useEffect } from "react";
import {
  Box,
  Flex,
  VStack,
  HStack,
  Text,
  useToast,
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
  const toast = useToast();

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
      <div style={{ width: "100%", margin: "auto", padding: "20px", display: "flex", flexDirection: "column" }}>
        <div style={{ margin: "auto", padding: "20px", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ minWidth: "300px", margin: "auto", padding: "10px", display: "flex", flexDirection: "column" }}>
            <div style={{ height: "50px", padding: "12px", display: "flex", justifyContent: "space-around", borderWidth: "1px", borderRadius: "0.5rem" }}
            >
              <p style={{ opacity: "0.6" }}>
                {wordArray.join("")}
              </p>{" "}
            </div>
            <Text p="2px" fontSize="sm" align="center" opacity="0.6">
              Entropy: {entropy} bits
            </Text>
          </div>
          <HStack ml="auto" mr="auto" mb="auto" pl="10px" pr="10px">
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
                toast({
                  position: "bottom-left",
                  description: "Password copied",
                  status: "success",
                  duration: 2500,
                  isClosable: true,
                });
              }}
            />
          </HStack>
        </div>
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
      </div>
    </>
  );
}
