import React, { useState } from "react";
import data from "./data";
import SingleQuestion from "./Question";
function App() {
  // Use a state to read imported questions (from data)
  const [questions, setQuestions] = useState(data);

  return (
    <main>
      <div className="container">
        <h3>questions and answers about login</h3>
        <section className="info">
          {questions.map((question) => {
            return <SingleQuestion key={question.id} {...question} />;  // Pass {title, info} to Question.js as props
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
