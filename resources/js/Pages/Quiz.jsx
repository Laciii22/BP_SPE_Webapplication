import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Question from '@/Components/Question';
import Navigation from '@/Components/Navigation';

const Quiz = () => {
    const [questions, setQuestions] = useState([]);
    const [answers, setAnswers] = useState(new Array(questions.length).fill(null));
    const [score, setScore] = useState(null);
    const [wrongAnswerIndices, setWrongAnswerIndices] = useState([]);

    useEffect(() => {
        const fetchQuestions = async () => {
            try {
                const response = await fetch('/api/quiz');
                if (!response.ok) {
                    throw new Error('Failed to fetch questions');
                }
                const data = await response.json();
                const shuffledQuestions = shuffleArray(data).map((question, index) => ({ ...question, number: index + 1 }));
                setQuestions(shuffledQuestions);
            } catch (error) {
                console.error(error);
            }
        };

        fetchQuestions();
    }, []);

    const shuffleArray = (array) => {
        const shuffledArray = [...array];
        for (let i = shuffledArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
        }
        return shuffledArray;
    };

    const handleAnswerChange = (questionIndex, answerId) => {
        setAnswers(prevAnswers => {
            const newAnswers = [...prevAnswers];
            newAnswers[questionIndex] = answerId;
            return newAnswers;
        });
    };

    const calculateScore = () => {
        const newWrongAnswerIndices = answers.reduce((accumulator, answer, index) => {
            if (answer !== questions[index].answers.find(answer => answer.correct_answer).id) {
                accumulator.push(index + 1);
            }
            return accumulator;
        }, []);

        setWrongAnswerIndices(newWrongAnswerIndices);
        setScore(questions.filter((question, index) => question.answers.find(answer => answer.id === answers[index]).correct_answer).length);
    };

    return (
        <div>
            <Navigation />
            <div className="container" style={{ marginTop: '5rem' }}>
                {questions.map((question, index) => (
                    <Question
                        key={question.id}
                        question={question}
                        number={question.number}
                        onAnswerChange={answerId => handleAnswerChange(index, answerId)}
                    />
                ))}
                <button
                    className="btn btn-primary"
                    onClick={calculateScore}
                    disabled={answers.some(answer => answer === null)}
                >
                    Vyhodnotiť
                </button>
                {score !== null && (
                    <p className="mt-3">
                        Skóre: {score} / {questions.length}
                        {score !== questions.length && `(Otázka číslo ${wrongAnswerIndices.join(', ')} je nesprávne)`}
                    </p>
                )}
            </div>
        </div>
    );
};

export default Quiz;
