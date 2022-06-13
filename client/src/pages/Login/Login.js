import React from 'react';
import Footer from '../../components/shared/Footer';
import PageHelmet from '../../components/shared/PageHelmet';
import Header from '../Home/Header/Header';
import LoginForm from '../../components/LoginForm/LoginForm';
import { useState } from 'react';
import { useEffect } from 'react';
import Axios from 'axios';


const Login = () => {
    const [authState, setAuthState] = useState(false);

    useEffect(() => {
        Axios.get("http://localhost:3001/isUserAuth", {
            headers: {
                "x-access-token": localStorage.getItem("token"),
            },
        }).then((response) => {
            if (response.data.auth === true) {
                setAuthState(true);
            }
        })
    }, []);
    return (
        <>
            <PageHelmet pageTitle="Login" />
            <Header />
            {authState === false &&
                <LoginForm />
            }
            {authState === true &&
                <h1>Vous etes connecté</h1>
            }
            <Footer />
        </>
    );
};

export default Login;