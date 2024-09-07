import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import './Login.css';

const Login = ({ history }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');

    useEffect(() => {
        // Inicializar usuarios predeterminados si no existen
        const users = JSON.parse(localStorage.getItem('users'));
        if (!users || users.length === 0) {
            // Crear un usuario predeterminado
            const defaultUser = { email: 'admin@gmail.com', password: 'admin123' };
            localStorage.setItem('users', JSON.stringify([defaultUser]));
        }
    }, []);

    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const handleLogin = () => {
        if (!validateEmail(email)) {
            setEmailError('Por favor, introduce un correo electrónico válido.');
            return;
        }

        // Obtener usuarios almacenados
        const users = JSON.parse(localStorage.getItem('users'));

        // Verificar las credenciales
        const user = users.find(user => user.email === email && user.password === password);

        if (user) {
            // Guardar el usuario actual
            localStorage.setItem('currentUser', JSON.stringify(user));
            history.push('/home');
        } else {
            alert('Credenciales incorrectas. Por favor, inténtalo de nuevo.');
        }
    };

    return (
        <div className="login-container">
            <form className="form-login">
                <ul className="login-nav">
                    <li className="login-nav__item active">
                        <a href="#">Sign In</a>
                    </li>
                    <li className="login-nav__item">
                        <a href="/register">Sign Up</a>
                    </li>
                </ul>
                <label htmlFor="email" className="login__label">Username</label>
                <input
                    type="email"
                    id="email"
                    className="login__input"
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                        setEmailError('');
                    }}
                />
                {emailError && <p className="error-message" style={{ color: 'rgba(255, 255, 255, 0.5)' }}>{emailError}</p>}
                <label htmlFor="password" className="login__label">Password</label>
                <input
                    type="password"
                    id="password"
                    className="login__input"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                
                <button type="button" onClick={handleLogin} className="login__submit">Sign in</button>
            </form>
        </div>
    );
};

export default withRouter(Login);
