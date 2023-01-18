import { VStack, HStack } from "@chakra-ui/react";

export default function Footer() {
  return (
    <>
      <footer>
        <VStack>
          <HStack p="2">
            <a href="https://github.com/aniknia/sixwordpassword">Github</a>
          </HStack>
        </VStack>
      </footer>
    </>
  );
}
