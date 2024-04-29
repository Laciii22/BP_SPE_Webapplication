import React, { useState } from 'react';

const AddNewQuestion = ({ showModal, handleModalClose, handleNewQuestionSubmit, newQuestion, setNewQuestion, correctAnswerIndex, setCorrectAnswerIndex, answers, setAnswers, areAtLeastTwoAnswersFilled, addNewAnswer }) => {
    return (
        showModal && (
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
        )
    );
};

export default AddNewQuestion;
