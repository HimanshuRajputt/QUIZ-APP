# 🎉 Quiz Application

A **fun and interactive Quiz Application** built with the power of **React**, **Chakra UI**, and **Axios**. Dive into the world of trivia and test your knowledge with this user-friendly app! 🚀

---

## 🌟 Features

- **🛠️ Setup Your Quiz**:
  - Enter your name.
  - Choose a category from a dropdown with multiple options.
  - Select difficulty level: Easy, Medium, or Hard.
  - Decide the number of questions to challenge yourself.

- **🎮 Quiz Page**:
  - One question at a time, presented with clear multiple-choice options.
  - Real-time progress indicator (e.g., "Question 2 of 10").
  - Instant feedback for your answers via stylish toasters.
  - Navigate easily with "Next" and "Previous" buttons.

- **🏆 Leaderboard**:
  - View performance metrics of all quiz participants.
  - Scores are ranked from highest to lowest.
  - Leaderboard data is stored in **localStorage** for persistence.

---

## 🔧 Technologies Used

- **React**: To build dynamic and interactive components.
- **Chakra UI**: For a clean and modern UI design.
- **Axios**: To fetch data seamlessly from the Open Trivia Database.
- **OpenTDB API**: Trivia API providing endless quiz questions.
- **localStorage**: Ensures leaderboard data persists across sessions.

---

## 🚀 How to Get Started

1. **Clone the repository**:
   ```bash
   git clone <repository_url>
   ```

2. **Navigate to the project directory**:
   ```bash
   cd quiz-application
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Run the development server**:
   ```bash
   npm start
   ```

---

## 📂 File Structure

```
quiz-application/
├── public/
├── src/
│   ├── components/
│   │   ├── Api.jsx
│   │   ├── Navbar.jsx
│   │   ├── QuizSetup.jsx
│   │   ├── QuizPage.jsx
│   │   ├── Leaderboard.jsx
│   └── utils/
│       ├── fetchQuizData.js
│   ├── App.js
│   ├── index.js
│
├── package.json
└── README.md
```

---

## 🌐 API Integration

This application uses the [OpenTDB API](https://opentdb.com/api_config.php) to fetch trivia questions. Below is an example API request:

```
https://opentdb.com/api.php?amount=10&category=21&difficulty=hard&type=multiple
```

### Example API Response

```json
{
  "response_code": 0,
  "results": [
    {
      "type": "multiple",
      "difficulty": "hard",
      "category": "Sports",
      "question": "Which of these Russian cities did NOT contain a stadium that was used in the 2018 FIFA World Cup?",
      "correct_answer": "Vladivostok",
      "incorrect_answers": [
        "Rostov-on-Don",
        "Yekaterinburg",
        "Kaliningrad"
      ]
    }
  ]
}
```

---

## 🗺️ Routes

1. **Home (Setup Quiz)**: `/`
   - Set up the quiz parameters.

2. **Quiz Route**: `/quiz`
   - Play the quiz and answer the questions.

3. **Leaderboard**: `/leaderboard`
   - View sorted leaderboard data based on scores.

---

## 🌐 Live Demo

Check out the live application here: [Quiz Application Live Link](https://sparkling-salamander-471869.netlify.app/)

---

## 🖼️ Screenshots

### 🛠️ Setup Quiz Page
![Setup Quiz Page](https://ik.imagekit.io/m9qnay09g/EV-1.png)

### 🎮 Quiz Page
![Quiz Page](./screenshots/quiz_page.png)

### 🏆 Leaderboard Page
![Leaderboard Page](./screenshots/leaderboard_page.png)

---

## 📝 Commit Guidelines

- Commit your code **every 30 minutes** to ensure consistent progress.
- Use meaningful commit messages, such as:
  - "✨ Add leaderboard functionality"
  - "🐛 Fix API response handling"
  - "💄 Improve UI for Quiz Setup"

---

## 🔮 Future Enhancements

- ⏱️ Add a timer for each quiz question.
- 🔀 Support more question types, like true/false questions.
- 🔐 Implement user authentication for saving progress across devices.

---

## 📜 License

This project is licensed under the **MIT License**. See the LICENSE file for details.

---

## 🙌 Acknowledgments

- [Open Trivia Database](https://opentdb.com/) for providing the trivia questions.
- **Chakra UI** for the beautiful design components.

---

🎉 Thank you for checking out the Quiz Application! Have fun testing your knowledge! 🧠
