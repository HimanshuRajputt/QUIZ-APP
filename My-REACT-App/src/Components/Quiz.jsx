import { useState, useEffect } from "react";
import {
  useToast,
  Box,
  Button,
  Heading,
  Text,
  VStack,
  Spinner,
} from "@chakra-ui/react";
import { fetchQuizData } from "./Api";

function Quiz() {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const toast = useToast();

  useEffect(() => {
    const storedSetup = localStorage.getItem("quizSetup");
    if (storedSetup) {
      try {
        const setups = JSON.parse(storedSetup);
        if (Array.isArray(setups) && setups.length > 0) {
          const latestSetup = setups[setups.length - 1];
          fetchQuizData(latestSetup).then((data) => setQuestions(data));
        } else {
          console.log("No localStorage.");
        }
      } catch (error) {
        console.log("Error parsing localStorage:", error);
      }
    }
  }, []);

  const handleAnswer = (isCorrect) => {
    const updatedScore = isCorrect ? score + 1 : score;

    if (isCorrect) {
      setScore(updatedScore);
      toast({
        title: "Correct!",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
    } else {
      toast({
        title: "Wrong!",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    }

    if (currentIndex + 1 === questions.length) {
      setIsFinished(true);
      updateLocalStorageWithScore(updatedScore); 
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const updateLocalStorageWithScore = (finalScore) => {
    const storedSetup = localStorage.getItem("quizSetup");
    if (storedSetup) {
      try {
        const setups = JSON.parse(storedSetup);
        if (Array.isArray(setups) && setups.length > 0) {
          const latestSetup = setups[setups.length - 1];
          const updatedSetup = { ...latestSetup, score: finalScore };
          setups[setups.length - 1] = updatedSetup;
          localStorage.setItem("quizSetup", JSON.stringify(setups));
        }
      } catch (error) {
        console.error("Error updating quizSetup with score:", error);
      }
    }
  };

  if (questions.length === 0) {
    return (
      <Box textAlign="center" mt="20">
        <Text fontSize="lg" color="gray.600">
          <Spinner color="teal.500" size="lg" />
        </Text>
      </Box>
    );
  }

  return (
    <Box
      maxW="600px"
      mx="auto"
      mt="10"
      p="6"
      borderRadius="lg"
      boxShadow="lg"
      bg="gray.50"
    >
      {isFinished ? (
        <Box textAlign="center">
          <Heading size="lg" color="teal.600" mb="4">
            Quiz Finished!
          </Heading>
          <Text fontSize="xl" fontWeight="bold">
            Your Score: {score} / {questions.length}
          </Text>
          <Button
            mt="6"
            colorScheme="teal"
            onClick={() => window.location.reload()}
          >
            Try Again
          </Button>
        </Box>
      ) : (
        <Box>
          <Heading size="md" color="teal.600" mb="4">
            Question {currentIndex + 1} of {questions.length}
          </Heading>
          <Text fontSize="lg" mb="6" color="gray.700">
            {questions[currentIndex].question}
          </Text>
          <VStack spacing="4">
            {questions[currentIndex].options.map((option, index) => (
              <Button
                key={index}
                width="full"
                size="lg"
                colorScheme="teal"
                variant="outline"
                onClick={() =>
                  handleAnswer(
                    option === questions[currentIndex].correct_answer
                  )
                }
              >
                {option}
              </Button>
            ))}
          </VStack>
        </Box>
      )}
    </Box>
  );
}

export default Quiz;
