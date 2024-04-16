import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Question from '@/Components/Question';
import Navigation from '@/Components/Navigation';
import { usePage } from '@inertiajs/react';
import Footer from '@/Components/Footer';

const Quiz = () => {
    const [questions, setQuestions] = useState([]);
    const [answers, setAnswers] = useState(["", ""]);
    const [score, setScore] = useState(null);
    const [wrongAnswerIndices, setWrongAnswerIndices] = useState([]);
    const [allQuestionsAnswered, setAllQuestionsAnswered] = useState(false);
    const { auth } = usePage().props;
    const [showModal, setShowModal] = useState(false);
    const [newQuestion, setNewQuestion] = useState('');
    const [correctAnswerIndex, setCorrectAnswerIndex] = useState(null);

    const fetchQuestions = async () => {
        try {
            const response = await fetch('/api/quiz');
            if (!response.ok) {
                throw new Error('Failed to fetch questions');
            }
            const data = await response.json();
            const shuffledQuestions = shuffleArray(data).map((question, index) => ({ ...question, number: index + 1 }));
            setQuestions(shuffledQuestions);
            setAnswers(new Array(shuffledQuestions.length).fill(null)); // Initialize answers with the correct length
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchQuestions();
    }, []);

    useEffect(() => {
        const allAnswered = answers.every(answer => answer !== null);
        setAllQuestionsAnswered(allAnswered);
    }, [answers]);

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

            const allAnswered = newAnswers.every(answer => answer !== null);
            setAllQuestionsAnswered(allAnswered);

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

    const handleDeleteQuestion = async (questionId) => {
        await fetch(`api/quiz/${questionId}`, {
            method: 'DELETE',
        });
        fetchQuestions();
    };

    const handleModalClose = () => {
        setShowModal(false);
    };

    const handleNewQuestionSubmit = async () => {
        if (correctAnswerIndex === null || !answers.some((answer) => answer.trim() !== '')) {
            console.error('At least one answer and the correct answer must be provided.');
            return;
        }

        try {
            const response = await fetch('/api/quiz', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    question: newQuestion,
                    answers: answers.map((answer, index) => ({
                        text: answer,
                        correct: index === correctAnswerIndex
                    })),
                }),
            });

            if (!response.ok) {
                throw new Error('Failed to add new question');
            }

            setShowModal(false);
            fetchQuestions();
        } catch (error) {
            console.error(error);
        }
    };


    const addNewAnswer = () => {
        setAnswers(prevAnswers => [...prevAnswers, '']);
    };

    const handleModalOpen = () => {
        setNewQuestion('');
        setCorrectAnswerIndex(null);
        setAnswers(['', '']);
        setShowModal(true);
    };
    

    const areAtLeastTwoAnswersFilled = () => {
        const filledAnswersCount = answers.filter(answer => typeof answer === 'string' && answer.trim() !== '').length;
        return filledAnswersCount >= 2;
    };

    return (
        <div>
            <Navigation />
            <div className="container mb-3 min-vh-100" style={{ marginTop: '5rem' }}>
                {auth.user && auth.user.admin === 1 && (
                    <button className="btn btn-primary mt-3" onClick={handleModalOpen}>
                        Pridať otázku.
                    </button>
                )}
                {questions.map((question, index) => (
                    <div key={question.id}>
                        <Question
                            question={question}
                            number={question.number}
                            onAnswerChange={answerId => handleAnswerChange(index, answerId)}
                        />
                        {auth.user && auth.user.admin === 1 && (
                            <div className='d-flex'>
                                <button className="btn btn-dark ms-1 w-100" onClick={() => handleDeleteQuestion(question.id)}>
                                    Vymazať
                                </button>
                            </div>
                        )}
                    </div>
                ))}

                <div className='d-flex align-items-center'>
                    <button
                        className="btn btn-primary mt-3 me-3"
                        onClick={calculateScore}
                        disabled={!allQuestionsAnswered}
                    >
                        Vyhodnotiť
                    </button>
                    {score !== null && (
                        <p className="m-3 pt-3">
                            Skóre: {score} / {questions.length}
                            {score !== questions.length && `(Otázka číslo ${wrongAnswerIndices.join(', ')} je nesprávne)`}
                        </p>
                    )}
                </div>

                {showModal && (
                    <div className="modal" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">Pridať otázku (zaškrtni správnu odpoveď)</h5>
                                    <button type="button" className="btn-close" onClick={handleModalClose}></button>
                                </div>
                                <div className="modal-body">
                                    <input type="text" className="form-control mb-3" placeholder="Zadaj otázku" value={newQuestion} onChange={(e) => setNewQuestion(e.target.value)} />

                                    {answers.map((answer, index) => (
                                        <div key={index} className="form-check">
                                            <input
                                                type="radio"
                                                className="form-check-input"
                                                name="correctAnswer"
                                                checked={index === correctAnswerIndex}
                                                onChange={() => setCorrectAnswerIndex(index)}
                                            />
                                            <input
                                                type="text"
                                                className="form-control mb-3"
                                                placeholder={`Zadaj odpoveď ${index + 1}`}
                                                value={answer || ''}
                                                onChange={(e) => setAnswers(prevAnswers => [...prevAnswers.slice(0, index), e.target.value, ...prevAnswers.slice(index + 1)])}
                                            />
                                        </div>
                                    ))}

                                    <button className="btn btn-secondary me-1" onClick={addNewAnswer}>Pridať ďaľšiu odpoveď</button>

                                    <button className="btn btn-primary" onClick={handleNewQuestionSubmit} disabled={!areAtLeastTwoAnswersFilled() || correctAnswerIndex === null}>Potvrdiť</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

            </div>
            <Footer></Footer>
        </div>
    );
};

export default Quiz;
