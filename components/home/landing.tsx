import { Flex } from "@chakra-ui/react";
import SixWordPassword from "../frames/sixwordpassword";

export default function Landing() {
  return (
    <Flex minH="calc(100vh - 200px)">
      <SixWordPassword />
    </Flex>
  );
}
