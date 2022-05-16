import React from 'react';
import { FaEnvelope } from 'react-icons/fa';


const SingleTeamInfo = ({ image, name, mail, titre }) => {
    return (
        <>
            <div className='singletaille'>
                <div className='row'>
                    <img src={`assets/img/team/${image}.jpg`} alt={name} />
                </div>
                <div className='row'>
                    <span>
                        {name}
                        {mail !== undefined &&
                            <a href={`mailto:${mail}`}>
                                <i > <FaEnvelope /> </i>
                            </a>
                        }
                    </span>
                </div>
                <p>{titre !== undefined && titre}</p>
            </div>
        </>

    );
};

export default SingleTeamInfo;