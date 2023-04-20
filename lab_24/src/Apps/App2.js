import React, { useState } from "react";

const questions = [
    {
        question: "1+1=",
        answer: "2",
    },
    {
        question: "1+2=",
        answer: "3",
    },
    {
        question: "2+3=",
        answer: "5",
    },
];

const App2 = () => {
    const [userAnswers, setUserAnswers] = useState([]);
    const [showResults, setShowResults] = useState(false);

    const handleAnswerChange = (index, e) => {
        const newUserAnswers = [...userAnswers];
        newUserAnswers[index] = e.target.value;
        setUserAnswers(newUserAnswers);
    };

    const handleSubmit = () => {
        setShowResults(true);
    };

    const renderResults = () => {
        return questions.map((question, index) => {
            const isCorrect = userAnswers[index] === question.answer;
            const resultClass = isCorrect ? "correct" : "incorrect";
            const resultText = isCorrect
                ? <p style={{ color: 'green' }} > ваша відповідь: {userAnswers[index]} - правильно</p>
                : <p style={{ color: 'red' }} > ваша відповідь: {userAnswers[index]} - не правильно <br /> правильна відповідь: {question.answer}</p>;
            return (
                <div className={`question ${resultClass}`} key={index}>
                    <h3>{question.question}</h3>
                    <p>{resultText}</p>
                </div>
            );
        });
    };

    const renderQuestions = () => {
        return questions.map((question, index) => {
            return (
                <div className="question" key={index}>
                    <h3>{question.question}</h3>
                    <input
                        type="text"
                        value={userAnswers[index] || ""}
                        onChange={(e) => handleAnswerChange(index, e)}
                    />
                </div>
            );
        });
    };

    return (
        <div>
            {showResults ? renderResults() : renderQuestions()}
            {!showResults && (
                <button onClick={handleSubmit}>скласти тест</button>
            )}
        </div>
    );
};

export default App2;
