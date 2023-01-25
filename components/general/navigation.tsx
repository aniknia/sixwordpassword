import { Stack, Flex, Box, Text } from "@chakra-ui/react";
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
            <Text>Six Word Password</Text>
          </Box>
          <Box p="1">
            <ColorModeSwitcher />
          </Box>
        </Flex>
      </Stack>
    </>
  );
}
