import React, { useState } from "react";

const questions = [
    {
        id: 1,
        question: "1+1 =",
        answer: "2"
    },
    {
        id: 2,
        question: "1+2 = ",
        answer: "3"
    },
    {
        id: 3,
        question: "2+3 = ",
        answer: "5"
    },
];

const App3 = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [userAnswers, setUserAnswers] = useState(Array(questions.length).fill(null));
    const [showResults, setShowResults] = useState(false);

    const handleAnswer = (answer) => {
        setUserAnswers((prevAnswers) => {
            const newAnswers = [...prevAnswers];
            newAnswers[currentQuestion] = answer;
            return newAnswers;
        });
    };

    const handleNext = () => {
        setCurrentQuestion((prevQuestion) => prevQuestion + 1);
    };

    const handlePrev = () => {
        setCurrentQuestion((prevQuestion) => prevQuestion - 1);
    };

    const handleCheckAnswers = () => {
        setShowResults(true);
    };

    const getResultColor = (isCorrect) => {
        return isCorrect ? "green" : "red";
    };

    const renderResults = () => {
        return questions.map((question, index) => {
            const isCorrect = userAnswers[index] === question.answer;
            const resultColor = getResultColor(isCorrect);
            return (
                <div key={question.id}>
                    <p>{question.question}</p>
                    <p style={{ color: resultColor }}>
                        Ваша відповідь: {userAnswers[index]}.{" "}
                        {isCorrect ? ", правильно!" : `Не правильно, правильна відповідь: ${question.answer}.`}
                    </p>
                </div>
            );
        });
    };

    if (showResults) {
        return (
            <div>
                {renderResults()}
            </div>
        );
    }

    const currentQuestionData = questions[currentQuestion];

    return (
        <div>
            <p>{currentQuestionData.question}</p>
            <input
                type="text"
                value={userAnswers[currentQuestion] || ""}
                onChange={(event) => handleAnswer(event.target.value)}
            />
            <button disabled={currentQuestion === 0} onClick={handlePrev}>
                Назад
            </button>
            <button disabled={currentQuestion === questions.length - 1} onClick={handleNext}>
                Вперед
            </button>
            {currentQuestion === questions.length - 1 && (
                <button onClick={handleCheckAnswers}>Перевірити відповіді</button>
            )}
        </div>
    );
};

export default App3;
