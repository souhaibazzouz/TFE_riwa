import React from 'react';
import SingleTeam from '../../../../components/SingleTeam/SingleTeam';

const TCEntraineur = () => {
    return (
        <>
            <section className="contact__area pt-115 pb-110">
                <h3>Les Entraineurs</h3>
                <hr />
                <div className="container">
                    <div className='contact__team'>
                        <div className='row'>
                            <SingleTeam
                                image="entraineur_tc/olivier"
                                name="Olivier"
                                mail="mairesseolivier498@gmail.com"
                                titre="Sprint et Coordinateur"
                            />
                            <SingleTeam
                                image="entraineur_tc/silhouette-homme"
                                name="Marc"
                                titre="Sprint"
                            />
                            <SingleTeam
                                image="entraineur_tc/laurent"
                                name="Laurent"
                                titre="Sprint & Sprint Long"
                            />
                            <SingleTeam
                                image="entraineur_tc/louis"
                                name="Louis"
                                titre="Polyvalent"
                            />
                            <SingleTeam
                                image="entraineur_tc/silhouette-homme"
                                name="Guillermo"
                                titre="Polyvalent"
                            />
                            <SingleTeam
                                image="entraineur_tc/nicolas"
                                name="Nicolas"
                                titre="Saut en hauteur"
                            />
                            <SingleTeam
                                image="entraineur_tc/faycal"
                                name="Faycal"
                                titre="Haies"
                            />
                            <SingleTeam
                                image="entraineur_tc/bernard"
                                name="Bernard"
                                titre="Lancers"
                            />
                            <SingleTeam
                                image="entraineur_tc/martine"
                                name="Martine"
                                titre="Perche"
                            />
                            <SingleTeam
                                image="entraineur_tc/daniel"
                                name="Daniel"
                                titre="Demi-fond & fond"
                            />
                        </div>
                    </div>
                </div >
            </section >
        </>
    );
};

export default TCEntraineur;