import React from 'react';
import { Form } from 'react-bootstrap';

export default function Checkbox({ className = '', ...props }) {
    return (
            <Form.Check
                type="switch"
                id="custom-switch"
                label="Zapamätať si"
                {...props}
            />
    );
}
