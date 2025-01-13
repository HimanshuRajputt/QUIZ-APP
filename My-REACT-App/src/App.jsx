// import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import QuizSetup from "./components/QuizSetup";
import Quiz from "./components/Quiz";
import Leaderboard from "./components/Leaderboard";

export function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<QuizSetup />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
      </Routes>
    </>
  );
}

export default App;
