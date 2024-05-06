import { useState, useEffect } from 'react';
import { Alert } from 'react-bootstrap';

const CustomNotification = ({ show, onClose, variant, message }) => {
    const [isVisible, setIsVisible] = useState(show);

    useEffect(() => {
        setIsVisible(show);

        if (show) {
            const timer = setTimeout(() => {
                setIsVisible(false);
                onClose();
            }, 2000);

            return () => clearTimeout(timer);
        }
    }, [show, onClose]);

    return (
        <Alert
            show={isVisible}
            variant={variant}
            onClose={onClose}
            dismissible
            style={{
                width: '80%',
                position: 'fixed', 
                top: '50%', 
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: '999',
            }}
        >
            {message}
        </Alert>
    );
};

export default CustomNotification;
