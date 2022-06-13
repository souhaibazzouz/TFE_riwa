import React from 'react';
import { FaCheck } from 'react-icons/fa';
import InfoCatCoti from '../../../Info/InfoArea/InfoCatCoti';



const SectionInfo = ({ bpm, tc, jt }) => {
    return (
        <>
            <div className="col-xl-12 col-lg-12">
                {bpm === "true" &&
                    <h3>L’École d’Athlétisme en quelques mots</h3>
                }
                {tc === "true" &&
                    <h3>Les Toutes Catégories en quelques mots</h3>
                }
                {jt === "true" &&
                    <h3>Le Jogging au RIWA en quelques mots</h3>
                }
                <hr />
                <div className="services__content-3">
                    {bpm === "true" &&
                        <p>
                            <b>A partir de 6 ans,</b> venez courir, sauter, lancer ! <br />
                            Retrouvez l’ambiance <b>familiale</b> d’un club sympa :</p>
                    }
                    {tc === "true" &&
                        <p>
                            L’Athlétisme à partir <b>de 13 ans</b> ! <br />
                            Retrouvez l’ambiance <b>familiale</b> d’un club sympa :</p>
                    }
                    {jt === "true" &&
                        <p>
                            Le <b>Jogging</b> pour tous !<br />
                            Retrouvez l’ambiance <b>familiale</b> d’un club sympa :</p>
                    }
                    <ul>
                        {bpm === "true" &&
                            <li ><span><i > <FaCheck /> </i>Un encadrement de <b>qualité</b></span></li>
                        }
                        {tc === "true" &&
                            <li ><span><i > <FaCheck /> </i>Un encadrement <b>spécifique</b> de <b>qualité</b></span></li>
                        }
                        {jt === "true" &&
                            <li ><span><i > <FaCheck /> </i>Un encadrement <b>adapté</b> pour <b>chacun</b></span></li>
                        }
                        <li ><span><i > <FaCheck /> </i><b>Deux séances</b> d’essai gratuites</span></li>
                        {((bpm === "true") || (jt === "true")) &&
                            <li ><span><i > <FaCheck /> </i>Plus de <b>120 heures</b> d’entrainement</span></li>
                        }
                        {tc === "true" &&
                            <li ><span><i > <FaCheck /> </i>Plus de <b>230 heures</b> d’entrainement</span></li>
                        }
                        {((bpm === "true") || (tc === "true")) &&
                            <li ><span><i > <FaCheck /> </i>Des déplacements en compétition <b>organisés</b> et <b>encadrés</b></span></li>
                        }
                        {jt === "true" &&
                            <li ><span><i > <FaCheck /> </i>Des déplacements tout au long de <b>l'année</b></span></li>
                        }
                        {bpm === "true" &&
                            <li ><span><i > <FaCheck /> </i>Des stages de <b>Pâques</b> et <b>d’été</b></span></li>
                        }
                        {((tc === "true") || (jt === "true")) &&
                            <li ><span><i > <FaCheck /> </i>Un stage à <b>Pâques</b> à <b>l’étranger</b></span></li>
                        }
                    </ul>
                </div>
                {bpm === "true" &&
                    <InfoCatCoti
                        bpm="true"
                    />
                }
                {tc === "true" &&
                    <InfoCatCoti
                        tc="true"
                    />
                }
                {jt === "true" &&
                    <InfoCatCoti
                        jt="true"
                    />
                }
            </div>
        </>
    );
};

export default SectionInfo;