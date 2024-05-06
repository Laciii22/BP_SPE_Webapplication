import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Question from '@/Components/Question';
import Navigation from '@/Components/Navigation';
import { usePage } from '@inertiajs/react';
import Footer from '@/Components/Footer';
import AddNewQuestion from '@/Components/AddNewQuestion';
import ConfirmationModal from '@/Components/ConfirmationModal';
import Notification from '@/Components/CustomNotification';

const Quiz = () => {
    const [questions, setQuestions] = useState([]);
    const [answers, setAnswers] = useState(["", ""]);
    const [score, setScore] = useState(null);
    const [wrongAnswerIndices, setWrongAnswerIndices] = useState([]);
    const [allQuestionsAnswered, setAllQuestionsAnswered] = useState(false);
    const { auth } = usePage().props;
    const [newQuestion, setNewQuestion] = useState('');
    const [correctAnswerIndex, setCorrectAnswerIndex] = useState(null);
    const [selectedQuestionId, setSelectedQuestionId] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [showConfirmationModal, setShowConfirmationModal] = useState(false);
    const [deleteSuccess, setDeleteSuccess] = useState(false); 




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


    const confirmDeleteQuestion = async () => {
        await fetch(`api/quiz/${selectedQuestionId}`, {
            method: 'DELETE',
        });
        fetchQuestions();
        setShowModal(false); 
        setSelectedQuestionId(null); 
        setDeleteSuccess(true);

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
                                <button className="btn btn-danger ms-1 w-100" onClick={() => { setShowConfirmationModal(true); setSelectedQuestionId(question.id); }}>
                                    Vymazať otázku
                                </button>



                            </div>
                        )}
                    </div>
                ))}

                <Notification show={deleteSuccess} onClose={() => setDeleteSuccess(false)} variant="success" message="Otázka bola úspešne vymazaná" />


                {/* Confirmation Modal */}
                <ConfirmationModal
                    show={showConfirmationModal}
                    handleClose={() => setShowConfirmationModal(false)} // Close modal when user cancels
                    handleConfirm={confirmDeleteQuestion} // Call delete function when user confirms
                    message="Ste si istý že chcete vymazať túto otázku?"
                />


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

                <AddNewQuestion
                    showModal={showModal}
                    handleModalClose={handleModalClose}
                    handleNewQuestionSubmit={handleNewQuestionSubmit}
                    newQuestion={newQuestion}
                    setNewQuestion={setNewQuestion}
                    correctAnswerIndex={correctAnswerIndex}
                    setCorrectAnswerIndex={setCorrectAnswerIndex}
                    answers={answers}
                    setAnswers={setAnswers}
                    areAtLeastTwoAnswersFilled={areAtLeastTwoAnswersFilled}
                    addNewAnswer={addNewAnswer}
                />
            </div>
            <Footer></Footer>
        </div>
    );
};


export default Quiz;
