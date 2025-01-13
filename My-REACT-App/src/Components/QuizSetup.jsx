import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Input,
  Select,
  Button,
  VStack,
  Heading,
  useToast,
} from "@chakra-ui/react";

function QuizSetup() {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [questions, setQuestions] = useState(10);
  const navigate = useNavigate();
  const toast = useToast();

  const handleStartQuiz = () => {
    if (!name || !category || !difficulty) {
      toast({
        title: "All fields are required!",
        status: "error",
        duration: 2500,
        isClosable: true,
      });
      return;
    }

    const existingData = localStorage.getItem("quizSetup");
    let quizDataArray = [];
    if (existingData) {
      try {
        quizDataArray = JSON.parse(existingData);
        if (!Array.isArray(quizDataArray)) {
          console.log("reset storage issue Found");
          quizDataArray = [];
        }
      } catch (error) {
        console.log("Error in parsing quizSetup data:", error);
        quizDataArray = [];
      }
    }

    const newEntry = { name, category, difficulty, questions };
    quizDataArray.push(newEntry);
    localStorage.setItem("quizSetup", JSON.stringify(quizDataArray));

    navigate("/quiz");
  };

  return (
    <Box
      maxW="400px"
      mx="auto"
      mt="12"
      p="6"
      borderRadius="lg"
      boxShadow="lg"
      bg="gray.50"
    >
      <Heading size="lg" mb="6" textAlign="center" color="teal.600">
        Setup Quiz
      </Heading>
      <VStack spacing="5">
        <Input
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          bg="white"
          borderColor="teal.300"
          focusBorderColor="teal.500"
        />
        <Select
          placeholder="Select Category"
          onChange={(e) => setCategory(e.target.value)}
          bg="white"
          borderColor="teal.300"
          focusBorderColor="teal.500"
        >
          <option value="21">Sports</option>
          <option value="23">History</option>
          <option value="27">Animals</option>
          <option value="17">Science</option>
          <option value="9">General Knowledge</option>
        </Select>
        <Select
          placeholder="Select Difficulty"
          onChange={(e) => setDifficulty(e.target.value)}
          bg="white"
          borderColor="teal.300"
          focusBorderColor="teal.500"
        >
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </Select>
        <Input
          type="number"
          placeholder="Number of Questions"
          value={questions}
          onChange={(e) => setQuestions(e.target.value)}
          bg="white"
          borderColor="teal.300"
          focusBorderColor="teal.500"
        />
        <Button
          colorScheme="teal"
          width="full"
          size="lg"
          onClick={handleStartQuiz}
        >
          Start Quiz
        </Button>
      </VStack>
    </Box>
  );
}

export default QuizSetup;
