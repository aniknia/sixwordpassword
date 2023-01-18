import { Stack, Flex, Box, Divider } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./colormodeswitcher";

export default function NavBar() {
  return (
    <>
      <Stack>
        <Flex
          align="center"
          justify="space-between"
          gap="2"
          pt="2"
          pl="2"
          pr="2"
        >
          <Box p="1" w="48px" h="48px"></Box>
          <Box p="1">
            <h1>Six Word Password</h1>
          </Box>
          <Box p="1">
            <ColorModeSwitcher />
          </Box>
        </Flex>
      </Stack>
    </>
  );
}
