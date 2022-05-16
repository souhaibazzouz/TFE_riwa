import React from 'react';
import Footer from '../../components/shared/Footer';
import PageHelmet from '../../components/shared/PageHelmet';
import Header from '../Home/Header/Header';
import LoginForm from '../../components/LoginForm/LoginForm';


const Login = () => {
    return (
        <>
            <PageHelmet pageTitle="Login" />
            <Header />
            <LoginForm />
            <Footer />
        </>
    );
};

export default Login;