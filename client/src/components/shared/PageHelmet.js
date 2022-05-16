import React from 'react';
import { Helmet } from "react-helmet";

const PageHelmet = ({ pageTitle }) => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{pageTitle} || Riwa A.C.</title>
                <meta name="robots" content="noindex, follow" />
                <meta name="description" content="Riwa – Athetic Club Rixensart Wavre" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            </Helmet>
        </>
    );
};

export default PageHelmet;