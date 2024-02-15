import React from 'react';

export default function PrimaryButton({ className = '', disabled, children, ...props }) {
    return (
        <button
            {...props}
            className={`btn btn-dark mx-1 ${className}`}
            disabled={disabled}
        >
            {children}
        </button>
    );
}
