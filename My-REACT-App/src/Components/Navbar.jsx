import { Link } from "react-router-dom";
import { Box, Flex, Button } from "@chakra-ui/react";

function Navbar() {
  return (
    <Box bg="teal.500" p={4}>
      <Flex justify="center" gap="15px">
        <Button as={Link} to="/" colorScheme="teal" variant="solid">
          Setup Quiz
        </Button>
        <Button as={Link} to="/quiz" colorScheme="teal" variant="solid">
          Quiz
        </Button>
        <Button as={Link} to="/leaderboard" colorScheme="teal" variant="solid">
          Leaderboard
        </Button>
      </Flex>
    </Box>
  );
}

export default Navbar;
