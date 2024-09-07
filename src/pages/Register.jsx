import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

const Register = ({ history }) => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const handleRegister = () => {
        if (!validateEmail(email)) {
            setEmailError('Por favor, introduce un correo electrónico válido.');
            return;
        }
        if (password !== confirmPassword) {
            setPasswordError('Las contraseñas no coinciden.');
            return;
        }

        // Obtener usuarios almacenados
        const users = JSON.parse(localStorage.getItem('users')) || [];

        // Verificar si el correo electrónico ya está registrado
        if (users.some(user => user.email === email)) {
            setEmailError('El correo electrónico ya está registrado.');
            return;
        }

        // Guardar el nuevo usuario
        users.push({ email, name, surname, password });
        localStorage.setItem('users', JSON.stringify(users));

        alert('Registro exitoso.');
        history.push('/'); // Redireccionar a la página de inicio de sesión después del registro.
    };

    return (
        <div className="register-container">
            <form className="form-register">
                <ul className="register-nav">
                    <li className="register-nav__item">
                        <a href="/">Sign In</a>
                    </li>
                    <li className="register-nav__item active">
                        <a href="#">Sign Up</a>
                    </li>
                </ul>
                <label htmlFor="email" className="register__label">Email</label>
                <input
                    type="email"
                    id="email"
                    className="register__input"
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                        setEmailError('');
                    }}
                />
                {emailError && <p className="error-message">{emailError}</p>}
                <label htmlFor="name" className="register__label">Name</label>
                <input
                    type="text"
                    id="name"
                    className="register__input"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <label htmlFor="surname" className="register__label">Surname</label>
                <input
                    type="text"
                    id="surname"
                    className="register__input"
                    value={surname}
                    onChange={(e) => setSurname(e.target.value)}
                />
                <label htmlFor="password" className="register__label">Password</label>
                <input
                    type="password"
                    id="password"
                    className="register__input"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <label htmlFor="confirmPassword" className="register__label">Confirm Password</label>
                <input
                    type="password"
                    id="confirmPassword"
                    className="register__input"
                    value={confirmPassword}
                    onChange={(e) => {
                        setConfirmPassword(e.target.value);
                        setPasswordError('');
                    }}
                />
                {passwordError && <p className="error-message">{passwordError}</p>}
                <button type="button" onClick={handleRegister} className="register__submit">Register</button>
            </form>
        </div>
    );
};

export default withRouter(Register);
