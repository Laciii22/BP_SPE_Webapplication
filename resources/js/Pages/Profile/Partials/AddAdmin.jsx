import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

export default function AddAdmin({ className = '', auth }) {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchUsers(auth);
    }, [auth]); 

    const fetchUsers = async (auth) => {
        try {
            const response = await fetch('api/users');
            if (!response.ok) {
                throw new Error('Failed to fetch users');
            }
            const data = await response.json();
            const currentUser = auth.user;
            const otherUsers = data.filter(user => user.id !== currentUser.id);
            setUsers(otherUsers);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };


    const setAdmin = async (userId) => {
        try {
            const response = await fetch(`api/users/${userId}/admin`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (!response.ok) {
                throw new Error('Failed to set user as admin');
            }
            fetchUsers(auth);
        } catch (error) {
            console.error('Error setting user as admin:', error);
        }
    };
    
    const removeAdmin = async (userId) => {
        try {
            const response = await fetch(`api/users/${userId}/remove-admin`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (!response.ok) {
                throw new Error('Failed to remove user as admin');
            }
            fetchUsers(auth);
        } catch (error) {
            console.error('Error removing user as admin:', error);
        }
    };
    


    return (
        <section className={`space-y-6 ${className}`}>
            <header>
                <h2 className="text-lg font-medium text-gray-900">Používatelia</h2>

                <p className="mt-1 text-sm text-gray-600">
                    Tu môžte zmeniť oprávnenia používateľov.
                </p>
            </header>
            <div className="user-list" style={{ maxHeight: '300px', overflowY: 'auto' }}>
                <ul className="list-group">
                    {users.map(user => (
                        <li key={user.id} className="list-group-item d-flex justify-content-between align-items-center">
                            <div>
                                {user.name} - {user.email} - {user.admin ? 'Administrátor' : 'Používateľ'}
                            </div>
                            {!user.admin ? (
                                <Button variant="dark" onClick={() => setAdmin(user.id)}>Nastaviť administrátora</Button>
                            ) : (
                                <Button variant="danger" onClick={() => removeAdmin(user.id)}>Zrušiť administrátora</Button>
                            )}

                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
