import React from 'react';
import SingleTeam from '../../../components/SingleTeam/SingleTeam';

const OfficielArea = () => {
    return (
        <>
            <section className="contact__area pt-115 pb-110">
                <div className="container">
                    <div className='contact__team'>
                        <div className='row'>
                            <SingleTeam
                                image="officiel/christel_baudrie"
                                name="Christel Baudrie"
                            />
                            <SingleTeam
                                image="officiel/anne_belfroid"
                                name="Anne Belfroid"
                            />
                            <SingleTeam
                                image="officiel/barbara_birnbaum"
                                name="Barbara Birnbaum"
                            />
                            <SingleTeam
                                image="officiel/francis_bossier"
                                name="Francis Bossier"
                            />
                            <SingleTeam
                                image="officiel/tim_bossier"
                                name="Tim Bossier"
                            />
                            <SingleTeam
                                image="officiel/fabienne_dominique"
                                name="Fabienne Dominique"
                            />
                            <SingleTeam
                                image="officiel/allan_gnonsian"
                                name="Allan Gnonsian"
                            />
                            <SingleTeam
                                image="officiel/frederic_swierkowski"
                                name="Frederic Swierkowski"
                            />
                            <SingleTeam
                                image="officiel/martine_vandenbroeck"
                                name="Martine Vandenbroeck"
                            />
                            <SingleTeam
                                image="officiel/cedric_verheyen"
                                name="Cédric Verheyen"
                            />
                        </div>
                    </div>
                </div >
            </section >
        </>
    );
};

export default OfficielArea;