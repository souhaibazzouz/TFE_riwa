import React from 'react';
import Axios from 'axios'
import { useState } from 'react';


const LoginForm = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    /*const register = () => {
        Axios.post('http://localhost:3001/register', {
            username: usernameReg,
            password: passwordReg,
        }).then((response) => {
            console.log(response)
        })
    }*/

    const login = () => {
        Axios.post('http://localhost:3001/login', {
            username: username,
            password: password,
        }).then((response) => {

            if (response.data.message) {
                setloginStatut(response.data.message)
            } else {
                setloginStatut(response.data[0].username);
                console.log(response.data)
            }
        })
    }

    const [loginStatut, setloginStatut] = useState('');

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
                                        <h4>{loginStatut}</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LoginForm;