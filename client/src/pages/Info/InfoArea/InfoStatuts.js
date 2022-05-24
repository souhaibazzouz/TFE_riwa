import React from 'react';
import { AiOutlineFilePdf } from 'react-icons/ai';
import { FaCheck } from 'react-icons/fa';
import SingleTeamInfo from '../../../components/SingleTeam/SingleTeamInfo';




const InfoStatuts = () => {
    return (
        <>
            <section className="statut__area pb-200 pt-75">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4 col-lg-5 col-md-5">
                            <div className="statut__content">
                                <div className="section-title mb-45">
                                    <h2>Le Président</h2>
                                </div>
                                <div className="statut__team">
                                    <SingleTeamInfo
                                        image="comite/president"
                                        name="Laurent Broze"
                                        mail="presidence@riwa.be"
                                        titre="Président du RIWA"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-7 offset-xl-2 offset-lg-1">
                            <div className="section-title mb-45">
                                <h2>Statuts et Historique</h2>
                            </div>
                            <div className="statut__accordion p-relative">

                                <div className="accordion" id="accordionExample" >
                                    <div className="card accordion-item">
                                        <div className="card-header accordion-header" id="acc_1" >
                                            <h5 className="mb-0">
                                                <button className="btn btn-link" data-bs-toggle="collapse" data-bs-target="#collapse_1" aria-expanded="true" aria-controls="collapse_1">
                                                    Statuts
                                                </button>
                                            </h5>
                                        </div>

                                        <div id="collapse_1" className="collapse show" aria-labelledby="acc_1" data-bs-parent="#accordionExample">
                                            <div className="card-body accordion-body">
                                                <a
                                                    href='assets/pdf/Statuts.pdf'
                                                    target="_blank"
                                                    rel="noreferrer">
                                                    <i > <AiOutlineFilePdf /> </i>
                                                    Version du 08/01/2018</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="acc_2">
                                            <h5 className="mb-0">
                                                <button className="btn btn-link collapsed" data-bs-toggle="collapse" data-bs-target="#collapse_2" aria-expanded="true" aria-controls="collapse_2">
                                                    Historique
                                                </button>
                                            </h5>
                                        </div>

                                        <div id="collapse_2" className="collapse" aria-labelledby="acc_2" data-bs-parent="#accordionExample">
                                            <div className="card-body accordion-body">
                                                <p>La création du club du <span>RIXENSART WAVRE ATHLETIC CLUB – RIWA A.C.</span> est le résultat, le
                                                    19 octobre 1989, de la fusion des clubs d’athlétisme de l’<b>ACRI</b>
                                                    (Athletic Club Rixensart) et du <b>RACW</b> (Royal Athlétic Club Wavre).
                                                    Cette fusion fait suite à la mauvaise qualité de la piste d’athlétisme (cendrée)
                                                    et aux modifications aux infrastructures du complexe sportif de Wavre (suppression de la
                                                    piste pour l’élargissement du terrain de football du Racing Jet de Wavre) au stade Justin Peeters.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="acc_3">
                                            <h5 className="mb-0">
                                                <button className="btn btn-link collapsed" data-bs-toggle="collapse" data-bs-target="#collapse_3" aria-expanded="true" aria-controls="collapse_3">
                                                    Les Présidences
                                                </button>
                                            </h5>
                                        </div>

                                        <div id="collapse_3" className="collapse" aria-labelledby="acc_3" data-bs-parent="#accordionExample">
                                            <div className="card-body accordion-body">
                                                <ul>
                                                    <li ><span><i > <FaCheck /> </i>2021 – Aujourd’hui : <b>Laurent Broze</b></span></li>
                                                    <li ><span><i > <FaCheck /> </i>2019 – 2021 : <b>Nicolas Vandiest</b></span></li>
                                                    <li ><span><i > <FaCheck /> </i>2018 – 2019 : <b>Guy Meurisse (FF)</b></span></li>
                                                    <li ><span><i > <FaCheck /> </i>2017 – 2018 : <b>Frédéric Swierkowski (FF)</b></span></li>
                                                    <li ><span><i > <FaCheck /> </i>2013 – 2017 : <b>Nicolas Vandiest</b></span></li>
                                                    <li ><span><i > <FaCheck /> </i>2012 – 2013 : <b>Claude Speltiens (FF)</b></span></li>
                                                    <li ><span><i > <FaCheck /> </i>2008 – 2012 : <b>Martine Vandenbroeck</b></span></li>
                                                    <li ><span><i > <FaCheck /> </i>2002 – 2008 : <b>Daniel Leloup</b></span></li>
                                                    <li ><span><i > <FaCheck /> </i>1995 – 2002 : <b>Claude Speltiens</b></span></li>
                                                    <li ><span><i > <FaCheck /> </i>1994 – 1995 : <b>Claude Speltiens (FF)</b></span></li>
                                                    <li ><span><i > <FaCheck /> </i>1993 – 1994 : <b>Philippe Bailly</b></span></li>
                                                    <li ><span><i > <FaCheck /> </i>1990 – 1993 : <b>Robert Folie</b></span></li>
                                                    <li ><span><i > <FaCheck /> </i>1989 – 1990 : <b>Philippe Bailly</b></span></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="acc_4">
                                            <h5 className="mb-0">
                                                <button className="btn btn-link collapsed" data-bs-toggle="collapse" data-bs-target="#collapse_4" aria-expanded="true" aria-controls="collapse_4">
                                                    Procès Verbaux
                                                </button>
                                            </h5>
                                        </div>

                                        <div id="collapse_4" className="collapse" aria-labelledby="acc_4" data-bs-parent="#accordionExample">
                                            <div className="card-body accordion-body">
                                                <p>
                                                    Disponible sur simple demande par mail à <b><a href="mailto:presidence@riwa.be">presidence@riwa.be</a></b>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </section >
        </>
    );
};

export default InfoStatuts;