import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

const Question = ({ question, onAnswerChange, number }) => {
    const [selectedAnswerId, setSelectedAnswerId] = useState(null);
    const [shuffledAnswers, setShuffledAnswers] = useState([]);

    useEffect(() => {
        const shuffledAnswers = shuffleArray(question.answers);
        setShuffledAnswers(shuffledAnswers);
    }, [question.answers]);

    const handleAnswerClick = (answerId) => {
        setSelectedAnswerId(answerId);
        onAnswerChange(answerId);
    };

    const shuffleArray = (array) => {
        const shuffledArray = [...array];
        for (let i = shuffledArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
        }
        return shuffledArray;
    };

    return (
        <Card className='mt-5 mb-2'>
            <Card.Header className='bg-dark text-white'>{number}. {question.question}</Card.Header>
            <ListGroup variant="flush">
                {shuffledAnswers.map(answer => (
                    <ListGroup.Item key={answer.id}>
                        <Button
                            variant={selectedAnswerId === answer.id ? "success" : "light"}
                            onClick={() => handleAnswerClick(answer.id)}
                            className="w-100" 
                        >
                            {answer.answer_text}
                        </Button>
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </Card>
    );
}

export default Question;
