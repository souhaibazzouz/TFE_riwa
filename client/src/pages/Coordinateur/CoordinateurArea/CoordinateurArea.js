import React from 'react';
import SingleTeam from '../../../components/SingleTeam/SingleTeam';

const CoordinateurArea = () => {
    return (
        <>
            <section className="contact__area pt-115 pb-110">
                <div className="container">
                    <div className='contact__team'>
                        <div className='row'>
                            <SingleTeam
                                image="coordinateur/marc_ryckeboer"
                                name="Marc Ryckeboer"
                                mail="ryckeboer_marc@hotmail.com"
                                titre="Coordinateur Cadets/Scolaires"
                            />
                            <SingleTeam
                                image="coordinateur/christophe_lejeune"
                                name="Christophe Lejeune"
                                mail="christophelejeun@hotmail.com"
                                titre="Coordinateur Cadets/Scolaires"
                            />
                            <SingleTeam
                                image="coordinateur/olivier_mairesse"
                                name="Olivier Mairesse"
                                mail="mairesseolivier498@gmail.com"
                                titre="Coordinateur Juniors-Seniors"
                            />
                            <SingleTeam
                                image="coordinateur/nadia_vandercuylen"
                                name="Nadia Vander Cuylen"
                                mail="nadiavdc@icloud.com"
                                titre="Coordinatrice Masters"
                            />
                            <SingleTeam
                                image="coordinateur/daniel_leloup"
                                name="Daniel Leloup"
                                mail="daniel.leloup@outlook.fr"
                                titre="Coordinateur Jogging-Trail"
                            />
                        </div>
                    </div>
                </div >
            </section >
        </>
    );
};

export default CoordinateurArea;