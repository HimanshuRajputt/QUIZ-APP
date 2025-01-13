import { useEffect, useState } from "react";
import { Box, Text, Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";

const categoryMap = {
  21: "Sports",
  23: "History",
  27: "Animals",
  17: "Science",
  9: "General Knowledge",
};

const Leaderboard = () => {
  const [leaderboardData, setLeaderboardData] = useState([]);

  useEffect(() => {
    const fetchLeaderboardData = () => {
      const storedData = localStorage.getItem("quizSetup");
      if (storedData) {
        try {
          const parsedData = JSON.parse(storedData);
          if (Array.isArray(parsedData)) {
            setLeaderboardData(parsedData);
          } else {
            console.log("quizSetu is not an array:", parsedData);
          }
        } catch (error) {
          console.log(
            "Error parsing data from localStorage:",
            error
          );
        }
      }
    };

    fetchLeaderboardData();
  }, []);

  return (
    <Box p={4}>
      <Text fontSize="2xl" mb={4}>
        Leaderboard
      </Text>
      {leaderboardData.length > 0 ? (
        <Table variant="striped" colorScheme="teal">
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Category</Th>
              <Th>Difficulty</Th>
              <Th>Questions</Th>
              <Th>Score</Th>
            </Tr>
          </Thead>
          <Tbody>
            {leaderboardData.map((entry, index) => (
              <Tr key={index}>
                <Td>{entry.name}</Td>
                <Td>{categoryMap[entry.category] || "Unknown"}</Td>
                <Td>{entry.difficulty}</Td>
                <Td>{entry.questions}</Td>
                <Td>{entry.score || 0}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      ) : (
        <Text>No data available on the leaderboard yet.</Text>
      )}
    </Box>
  );
};

export default Leaderboard;
