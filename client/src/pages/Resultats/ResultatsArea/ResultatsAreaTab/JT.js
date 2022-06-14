import React from 'react';
import { AiOutlineFilePdf } from 'react-icons/ai';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import { API_URL } from '../../../../url';

const JT = () => {

    const [resultatList, setResultatList] = useState([])
    useEffect(() => {
        async function getResults() {
            const response = await axios(`${API_URL}/api/import/file/5`);
            setResultatList(response.data)
        }
        getResults()
    }, []);

    return (
        <>
            <h2>Résultats Jogging & Trail</h2>
            <div className="resultat__content">
                <hr />
                <ul>
                    {resultatList.map((val) => {
                        let an = val.date.substring(0, 4)
                        let mois = val.date.substring(5, 7)
                        let jour = val.date.substring(8, 10)
                        let date = jour + '/' + mois + '/' + an
                        if (val.compClub === 0) {
                            return (
                                <li>
                                    <a
                                        href={`${val.filePDF}`}
                                        target="_blank"
                                        rel="noreferrer">
                                        <span><i > <AiOutlineFilePdf /> </i>{`${date}`} – {`${val.nom}`}</span>
                                    </a>
                                </li>
                            )
                        } else {
                            return (
                                <li>
                                    <a
                                        href={`${val.filePDF}`}
                                        target="_blank"
                                        rel="noreferrer">
                                        <span><i > <AiOutlineFilePdf /> </i><b>{`${date}`} – {`${val.nom}`}</b></span>
                                    </a>
                                </li>
                            )
                        }
                    })}
                </ul>
            </div>
        </>
    );
};

export default JT;