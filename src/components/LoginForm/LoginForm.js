import React from 'react';


const LoginForm = () => {
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
                                                <input type="email" placeholder="Email" />
                                                <input type="password" placeholder="Mot de Passe" />
                                                <button className="z-btn z-btn-3 w-100">Connexion</button>
                                            </form>
                                        </div>
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