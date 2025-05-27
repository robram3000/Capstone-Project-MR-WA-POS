import React, { useState } from 'react';

function Login({ onLogin, onGoogleLogin, onForgotPassword, onCreateAccount }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        // Replace with your authentication logic
        if (username === 'admin' && password === 'password') {
            onLogin && onLogin({ username });
        } else {
            setError('Invalid username or password');
        }
    };

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit}>
                <h2>Login</h2>
                {error && <div className="error">{error}</div>}
                <div>
                    <label>Username:</label>
                    <input
                        type="text"
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Login</button>
                <button
                    type="button"
                    className="google-login"
                    onClick={onGoogleLogin}
                    style={{ marginLeft: '10px' }}
                >
                    Login with Google
                </button>
                <div style={{ marginTop: '10px' }}>
                    <button
                        type="button"
                        className="forgot-password"
                        onClick={onForgotPassword}
                        style={{ marginRight: '10px' }}
                    >
                        Forgot Password?
                    </button>
                    <button
                        type="button"
                        className="create-account"
                        onClick={onCreateAccount}
                    >
                        Create Account
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Login;