import React from 'react';


const CatSideBar = () => {
    return (
        <>
            <div className="services__sidebar mr-50">
                <div className="services__widget grey-bg-18 mb-40">
                    <div className="services__widget-title">
                        <h4>Catégories</h4>
                    </div>
                    <div className="services__widget-content">
                        <div className="services__link">
                            <div className="statut__accordion p-relative">
                                <div className="nav" role="tablist" >
                                    <div className="card accordion-item">
                                        <a className="nav-link btn btn-link collapsed" data-bs-toggle="pill" href="#resultat_bpm" role="tab" aria-controls="resultat_bpm" aria-selected="true">
                                            Ecole D'athlétisme
                                        </a>
                                        <a className="nav-link btn btn-link collapsed" data-bs-toggle="pill" href="#resultat_tc" role="tab" aria-controls="resultat_tc" aria-selected="true">
                                            Toutes Catégories
                                        </a>
                                        <a className="nav-link btn btn-link collapsed" data-bs-toggle="pill" href="#resultat_jt" role="tab" aria-controls="resultat_jt" aria-selected="true">
                                            Jogging & Trail
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CatSideBar;