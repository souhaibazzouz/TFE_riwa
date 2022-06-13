import React from 'react';
import { AiOutlineFilePdf } from 'react-icons/ai';

const SingleOrga = ({ date, competition, heure, lien_a1, nom_a1, lien_a2, nom_a2, lien_a3, nom_a3, }) => {
    return (
        <>
            <div className='info__content'>
                <div className='card'>
                    <div className='text-center'>
                        {date !== undefined &&
                            <p><b>{date}</b></p>}

                        {competition !== undefined &&
                            <p><span>{competition}</span></p>}

                        {heure !== undefined &&
                            <p><b>{heure}</b></p>}

                        {lien_a1 !== undefined && nom_a1 !== undefined &&
                            <p>
                                <div className="services__action grey-bg-18 mb-15">
                                    <a
                                        href={`${lien_a1}`}
                                        target="_blank"
                                        rel="noreferrer">
                                        <i > <AiOutlineFilePdf /> </i>
                                        {nom_a1}</a>
                                </div>
                            </p>}

                        {lien_a2 !== undefined && nom_a2 !== undefined &&
                            <p>
                                <div className="services__action grey-bg-18 mb-15">
                                    <a
                                        href={`${lien_a2}`}
                                        target="_blank"
                                        rel="noreferrer">
                                        <i > <AiOutlineFilePdf /> </i>
                                        {nom_a2}</a>
                                </div>
                            </p>}

                        {lien_a3 !== undefined && nom_a3 !== undefined &&
                            <p>
                                <div className="services__action grey-bg-18 mb-15">
                                    <a
                                        href={`${lien_a3}`}
                                        target="_blank"
                                        rel="noreferrer">
                                        <i > <AiOutlineFilePdf /> </i>
                                        {nom_a3}</a>
                                </div>
                            </p>}
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleOrga;