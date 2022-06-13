import React from 'react';
import { FaCheck } from 'react-icons/fa';
import SingleTeamInfo from '../../../../components/SingleTeam/SingleTeamInfo';

const JTEntraineur = () => {
    return (
        <>
            <div className='container'>
                <div className='row p-relative'>
                    <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="statut__team">
                            <SingleTeamInfo
                                image="entraineur_tc/daniel"
                                name="Daniel"
                                mail="daniel.leloup@outlook.fr"
                                titre="Coordinateur Jogging"
                            />
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6">
                        <p>
                            Avec un groupe <b>sympathique</b> et <b>mixte</b> constitué de coureurs
                            de <b>tous niveaux</b>, nous développons :
                        </p>
                        <div className="services__content-3">
                            <ul>
                                <li ><span><i > <FaCheck /> </i><b>Mardi</b>, sur la piste de Rixensart, la
                                    vitesse maximale aérobie <b>(VMA)</b> au moyen d’intervalles et d’intermittents.
                                    Une séance de gainage clôture l’entraînement.</span></li>
                                <li ><span><i > <FaCheck /> </i><b>Jeudi</b>, sur la piste de Rixensart, nous travaillons
                                    les différentes formes de résistance. Cette séance sert également de
                                    rattrapage aux absents du mardi</span></li>
                                <li ><span><i > <FaCheck /> </i><b>Samedi</b>, le seuil anaérobie au bois au
                                    moyen de fartlek et/ou d’intermittents. Selon la période, nous
                                    utilisons le travail en côtes.</span></li>
                            </ul>
                        </div>
                        <p>
                            Les coureurs <b>les plus assidus</b> bénéficient, s’ils en font la demande, <b>de plans
                                personnalisés</b> à l’année ou en fonction d’un objectif spécifique.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default JTEntraineur;