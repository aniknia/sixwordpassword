import { VStack, HStack, Text } from "@chakra-ui/react";

export default function Footer() {
  return (
    <>
      <footer>
        <VStack>
          <HStack p="2">
            <Text color="#289cf5">
              <a href="https://github.com/aniknia/sixwordpassword">Github</a>
            </Text>
            <Text color="#6151ff">&middot;</Text>
            <Text color="#289cf5">
              <a href="https://xkcd.com/936/">Relevant xkcd</a>
            </Text>
          </HStack>
        </VStack>
      </footer>
    </>
  );
}
