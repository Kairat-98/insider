
import React, { useState } from 'react';
    import axios from 'axios';
    import './LoginForm.css'; 

    const LoginForm = ({ onLogin }) => {
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const [emailError, setEmailError] = useState('');
        const [passwordError, setPasswordError] = useState('');
        const [error, setError] = useState('');

        const handleSubmit = async (e) => {
            e.preventDefault();
            setEmailError('');
            setPasswordError('');
            setError('');

            try {
                const response = await axios.post('http://example.com/login', { email, password });

                if (response.data && response.data.token) {
                    localStorage.setItem('token', response.data.token);
                    
                    onLogin();
                } else {
                    setError('Authentication failed');
                }
            } catch (error) {
                setError('Authentication failed');
            }
        };

        return (
            <form onSubmit={handleSubmit} className="login-form" noValidate>
                <h2>Login</h2>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        className={`form-control ${emailError ? 'is-invalid' : ''}`}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    {emailError && <div className="invalid-feedback">{emailError}</div>}
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        className={`form-control ${passwordError && 'is-invalid'}`}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    {passwordError && <div className="invalid-feedback">{passwordError}</div>}
                </div>
                {error && <div className="alert alert-danger">{error}</div>}
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
        );
    };

    export default LoginForm;