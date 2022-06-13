import React from 'react';
import BilanSideBar from '../../../components/Sidebar/BilanSideBar';
import { AiOutlineFilePdf } from 'react-icons/ai';


const BilanArea = () => {
    return (
        <>
            <section className="table__area pt-115 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 order-lg-first">
                            <BilanSideBar />
                        </div>
                        <div className="col-xl-8 col-lg-8">
                            <h2>Bilans par Catégorie</h2>
                            <div className="resultat__content">
                                <h3>2018-2019</h3>
                                <hr />
                                <ul>
                                    <li >
                                        <a
                                            href='https://www.riwa.be/WPRIWA/wp-content/uploads/2019/01/2018-2019-Bilans-Indoor-EA-F-01-BEN.pdf'
                                            target="_blank"
                                            rel="noreferrer">
                                            <span><i > <AiOutlineFilePdf /> </i><b>Benjamines</b></span>
                                        </a>
                                    </li>
                                    <li ><a
                                        href='https://www.riwa.be/WPRIWA/wp-content/uploads/2019/01/2018-2019-Bilans-Indoor-EA-F-02-PUP.pdf'
                                        target="_blank"
                                        rel="noreferrer"><span><i > <AiOutlineFilePdf /> </i><b>Pupilles Filles</b></span>
                                    </a>
                                    </li>
                                    <li ><a
                                        href='https://www.riwa.be/WPRIWA/wp-content/uploads/2019/01/2018-2019-Bilans-Indoor-EA-F-03-MIN.pdf'
                                        target="_blank"
                                        rel="noreferrer">
                                        <span><i > <AiOutlineFilePdf /> </i><b>Minimes Filles</b></span>
                                    </a>
                                    </li>
                                </ul>
                                <h3>2017-2018</h3>
                                <hr />
                                <ul>
                                    <li ><a
                                        href='https://www.riwa.be/WPRIWA/wp-content/uploads/2017/12/2017-2018-Bilans-Indoor-EA-F-01-BEN.pdf'
                                        target="_blank"
                                        rel="noreferrer">
                                        <span><i > <AiOutlineFilePdf /> </i><b>Benjamines</b></span>
                                    </a>
                                    </li>
                                    <li ><a
                                        href='https://www.riwa.be/WPRIWA/wp-content/uploads/2017/12/2017-2018-Bilans-Indoor-EA-F-02-PUP.pdf'
                                        target="_blank"
                                        rel="noreferrer">
                                        <span><i > <AiOutlineFilePdf /> </i><b>Pupilles Filles</b></span>
                                    </a>
                                    </li>
                                    <li ><a
                                        href='https://www.riwa.be/WPRIWA/wp-content/uploads/2017/12/2017-2018-Bilans-Indoor-EA-F-03-MIN.pdf'
                                        target="_blank"
                                        rel="noreferrer">
                                        <span><i > <AiOutlineFilePdf /> </i><b>Minimes Filles</b></span>
                                    </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default BilanArea;