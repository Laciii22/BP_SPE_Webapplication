import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

function Question({ question, onAnswerChange, number }) {
    const [selectedAnswerId, setSelectedAnswerId] = useState(null);

    const handleAnswerClick = (answerId) => {
        setSelectedAnswerId(answerId);
        onAnswerChange(answerId);
    };

    return (
        <Card className='my-5'>
            <Card.Header className='bg-dark text-white'>{number}. {question.question}</Card.Header>
            <ListGroup variant="flush">
                {question.answers.map(answer => (
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
