import { Stack, Flex, Box, Text } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./colormodeswitcher";

export default function NavBar() {
  return (
    <>
      <Stack>
        <Flex align="center" justify="space-around" gap="2" pt="10">
          <Box p="1">
            <Text
              bgGradient="linear(to-l, #279df5, #6250ff)"
              bgClip="text"
              fontSize="6xl"
              fontWeight="extrabold"
              align="center"
            >
              Six Word Password
            </Text>
          </Box>
        </Flex>
      </Stack>
    </>
  );
}
