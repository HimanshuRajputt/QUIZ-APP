import axios from "axios";

export const fetchQuizData = async ({ category, difficulty, questions }) => {
  const url = `https://opentdb.com/api.php?amount=${questions}&category=${category}&difficulty=${difficulty}&type=multiple`;
  const { data } = await axios.get(url);

  return data.results.map((item) => ({
    question: item.question,
    correct_answer: item.correct_answer,
    options: shuffleOptions([...item.incorrect_answers, item.correct_answer]),
  }));
};
const shuffleOptions = (options) => options.sort(() => Math.random() - 0.5);
