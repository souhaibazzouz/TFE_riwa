import React from 'react';
import SingleTeam from '../../../components/SingleTeam/SingleTeam';

const ComiteArea = () => {
    return (
        <>
            <section className="contact__area pt-115 pb-110">
                <div className="container">
                    <div className='contact__team'>
                        <div className='row'>
                            <SingleTeam
                                image="comite/president"
                                name="Laurent Broze"
                                mail="presidence@riwa.be"
                                titre="Président du RIWA"
                            />
                            <SingleTeam
                                image="comite/olivier_mairesse"
                                name="Olivier Mairesse"
                                mail="vice-presidence@riwa.be"
                                titre="Vice-Président du RIWA"
                            />
                            <SingleTeam
                                image="comite/secretaire"
                                name="Roseline Bero"
                                mail="secretariat@riwa.be"
                                titre="Secrétaire du RIWA"
                            />
                            <SingleTeam
                                image="comite/francoise_desagher"
                                name="Francoise Desagher"
                                mail="francoise.desagher@gmail.com"
                                titre="Secrétaire Adjointe"
                            />
                            <SingleTeam
                                image="comite/francis_bossier"
                                name="Francis Bossier"
                                mail="tresorerie@riwa.be"
                                titre="Trésorier du RIWA"
                            />
                            <SingleTeam
                                image="comite/antoine_amgoune"
                                name="Antoine Amgoune"
                                mail="materiel@riwa.be"
                                titre="Responsable Matériel"
                            />
                            <SingleTeam
                                image="comite/christel_baudrie"
                                name="Christel Baudrie"
                                mail="chris_baudrie@hotmail.com"
                                titre="Membre CA - Compétitions & Communication"
                            />
                            <SingleTeam
                                image="comite/fabrice_ledecq"
                                name="Fabrice Ledecq"
                                mail="fabrice.ledecq@skynet.be"
                                titre="Membre CA - Fiesta"
                            />
                            <SingleTeam
                                image="comite/allan_gnonsian"
                                name="Allan Gnonsian"
                                mail="allan_gnonsian@yahoo.fr"
                                titre="Membre CA"
                            />
                            <SingleTeam
                                image="comite/nicolas_vandiest"
                                name="Nicolas Vandiest"
                                mail="nicolas.vandiest@hotmail.com"
                                titre="Membre CA"
                            />
                        </div>
                    </div>
                </div >
            </section >
        </>
    );
};

export default ComiteArea;