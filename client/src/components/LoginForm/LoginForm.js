import React from 'react';
import Axios from 'axios'
import { useState } from 'react';
import { useEffect } from 'react';
import { API_URL } from '../../url';

const LoginForm = () => {

    /*const [usernameReg, setUsernameReg] = useState('');
    const [passwordReg, setPasswordReg] = useState('');*/

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [loginStatut, setloginStatut] = useState(false);
    const [loginError, setloginError] = useState('');

    Axios.defaults.withCredentials = true;

    /*const register = () => {
        Axios.post(`${API_URL}/api/register`, {
            username: usernameReg,
            password: passwordReg,
        }).then((response) => {
        })
    }*/

    const login = () => {
        Axios.post(`${API_URL}/api/login`, {
            username: username,
            password: password,
        }).then((response) => {

            if (!response.data.auth) {
                setloginError(response.data.message)
            } else {
                localStorage.setItem("token", response.data.token)
                document.location.href = "/";
            }
        })
    };

    useEffect(() => {
        Axios.get(`${API_URL}/api/login`).then((response) => {
            if (response.data.loggedIn === true) {
                setloginStatut(response.data.user[0].username);
            }
        });
    }, []);


    return (
        <>
            <div className="container">
                <div className="col-md-8 offset-md-2">
                    <div className="row p-relative">
                        <div className="contact__help-item white-bg text-center mb-30 wow fadeInLeft" data-wow-delay=".3s">
                            <div className="contact__text">
                                <div className="services__widget grey-bg-18 mb-40">
                                    <div className="services__widget-title">
                                        <h4>Connexion</h4>
                                    </div>
                                    <div className="services__widget-content">
                                        <div className="services__form">
                                            <form>
                                                <input
                                                    type="text"
                                                    onChange={(e) => {
                                                        setUsername(e.target.value);
                                                    }}
                                                    placeholder="Username" />
                                                <input
                                                    type="password"
                                                    onChange={(e) => {
                                                        setPassword(e.target.value);
                                                    }}
                                                    placeholder="Mot de Passe" />
                                                <button
                                                    type='button'
                                                    className="z-btn z-btn-3 w-100"
                                                    onClick={login}>Connexion</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <h4>{loginError}</h4>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LoginForm;