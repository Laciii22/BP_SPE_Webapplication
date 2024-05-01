import { useState, useEffect } from 'react';
import { Alert } from 'react-bootstrap';

const CustomNotification = ({ show, onClose, variant, message }) => {
    const [isVisible, setIsVisible] = useState(show);

    useEffect(() => {
        setIsVisible(show);

        if (show) {
            const timer = setTimeout(() => {
                setIsVisible(false);
                onClose(); // Zavrie upozornenie po skončení časovača
            }, 5000); 

            return () => clearTimeout(timer); // Zrušíme časovač pri odmontovaní komponentu
        }
    }, [show, onClose]);

    return (
        <Alert show={isVisible} variant={variant} onClose={onClose} dismissible style={{
            width: '100%',
            position: 'absolute',
            top: '10%',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: '999',
        }}>
            {message}
        </Alert>
    );
};

export default CustomNotification;
