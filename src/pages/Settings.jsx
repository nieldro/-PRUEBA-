import React, { useState, useEffect } from 'react';
import './Settings.css';

const Settings = () => {
    // Recuperar el usuario actual desde localStorage
    const [formData, setFormData] = useState(() => {
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        return currentUser || {
            name: '',
            email: '',
            dateOfBirth: '',
            permanentAddress: '',
            presentAddress: '',
            city: '',
            country: '',
            postalCode: '',
            password: '',
            surname: '',
            profileImage: 'https://randomuser.me/api/portraits/women/44.jpg'
        };
    });

    // Guardar datos en localStorage cada vez que el formulario cambie
    useEffect(() => {
        localStorage.setItem('currentUser', JSON.stringify(formData));
    }, [formData]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setFormData({
                    ...formData,
                    profileImage: reader.result
                });
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Mostrar mensaje de éxito
        alert('Los datos han sido actualizados correctamente');
    };

    return (
        <div className="settings-container">
            <h1>Settings</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-section">
                    <h2>Edit Profile</h2>
                    <div className="profile-image">
                        <img
                            src={formData.profileImage}
                            alt="Profile"
                        />
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            id="profileImageInput"
                            style={{ display: 'none' }}
                        />
                        <label htmlFor="profileImageInput" className="change-image-btn">
                            Change Photo
                        </label>
                    </div>
                    <div className="grid">
                        <div className="form-group col1">
                            <label>Your Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group col2">
                            <label>Your Last Name</label>
                            <input
                                type="text"
                                name="surname"
                                value={formData.surname}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group col3">
                            <label>Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group col4">
                            <label>Date of Birth</label>
                            <input
                                type="date"
                                name="dateOfBirth"
                                value={formData.dateOfBirth}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group col5">
                            <label>Permanent Address</label>
                            <input
                                type="text"
                                name="permanentAddress"
                                value={formData.permanentAddress}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group col6">
                            <label>Present Address</label>
                            <input
                                type="text"
                                name="presentAddress"
                                value={formData.presentAddress}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group col7">
                            <label>City</label>
                            <input
                                type="text"
                                name="city"
                                value={formData.city}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group col8">
                            <label>Country</label>
                            <input
                                type="text"
                                name="country"
                                value={formData.country}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group col9">
                            <label>Postal Code</label>
                            <input
                                type="text"
                                name="postalCode"
                                value={formData.postalCode}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group col10">
                            <label>Password</label>
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <button type="submit" className="save-btn">Save</button>
                </div>
            </form>
        </div>
    );
};

export default Settings;
