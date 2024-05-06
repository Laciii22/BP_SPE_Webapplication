import React from 'react';

const ConfirmationModal = ({ show, handleClose, handleConfirm, message }) => {
    return (
        <div className="modal" style={{ display: show ? 'block' : 'none' }}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Potvrdenie</h5>
                        <button type="button" className="btn-close" onClick={handleClose}></button>
                    </div>
                    <div className="modal-body">
                        {message}
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={handleClose}>Zavrieť</button>
                        <button type="button" className="btn btn-danger" onClick={() => { handleConfirm(); handleClose(); }}>Potvrdiť</button>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default ConfirmationModal;
