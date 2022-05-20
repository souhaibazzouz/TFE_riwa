import React from 'react';

const SectionSideBar = () => {
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
                                <div className="accordion" id="accordionExample" >
                                    <div className="card accordion-item">
                                        <div className="card-header accordion-header" id="acc_1" >
                                            <h5 className="mb-0">
                                                <button className="btn btn-link collapsed" data-bs-toggle="collapse" data-bs-target="#collapse_1" aria-expanded="true" aria-controls="collapse_1">
                                                    Ecole D'athlétisme
                                                </button>
                                            </h5>
                                        </div>

                                        <div id="collapse_1" className="collapse" aria-labelledby="acc_1" data-bs-parent="#accordionExample">
                                            <div className="card-body accordion-body">
                                                <ul>
                                                    <li >
                                                        <a className="nav-link active" data-bs-toggle="pill" href="#info_bpm" role="tab" aria-controls="info_bpm" aria-selected="true">
                                                            Informations
                                                        </a>
                                                    </li>
                                                    <li >
                                                        <a className="nav-link" data-bs-toggle="pill" href="#entraineur_bpm" role="tab" aria-controls="entraineur_bpm" aria-selected="true">
                                                            Entraineur
                                                        </a>
                                                    </li>
                                                    <li >
                                                        <a className="nav-link" data-bs-toggle="pill" href="#cal_bpm" role="tab" aria-controls="cal_bpm" aria-selected="true">
                                                            Calendrier
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="acc_2" >
                                            <h5 className="mb-0">
                                                <button className="btn btn-link collapsed" data-bs-toggle="collapse" data-bs-target="#collapse_2" aria-expanded="true" aria-controls="collapse_2">
                                                    Toutes Catégories
                                                </button>
                                            </h5>
                                        </div>

                                        <div id="collapse_2" className="collapse" aria-labelledby="acc_2" data-bs-parent="#accordionExample">
                                            <div className="card-body accordion-body">
                                                <ul>
                                                    <li >
                                                        <a className="nav-link" data-bs-toggle="pill" href="#info_tc" role="tab" aria-controls="info_tc" aria-selected="true">
                                                            Informations
                                                        </a>
                                                    </li>
                                                    <li >
                                                        <a className="nav-link" data-bs-toggle="pill" href="#entraineur_tc" role="tab" aria-controls="entraineur_tc" aria-selected="true">
                                                            Entraineur
                                                        </a>
                                                    </li>
                                                    <li >
                                                        <a className="nav-link" data-bs-toggle="pill" href="#cal_tc" role="tab" aria-controls="cal_tc" aria-selected="true">
                                                            Calendrier
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="acc_3" >
                                            <h5 className="mb-0">
                                                <button className="btn btn-link collapsed" data-bs-toggle="collapse" data-bs-target="#collapse_3" aria-expanded="true" aria-controls="collapse_3">
                                                    Jogging & Trail
                                                </button>
                                            </h5>
                                        </div>
                                        <div id="collapse_3" className="collapse" aria-labelledby="acc_3" data-bs-parent="#accordionExample">
                                            <div className="card-body accordion-body">
                                                <ul>
                                                    <li >
                                                        <a className="nav-link" data-bs-toggle="pill" href="#info_jt" role="tab" aria-controls="info_jt" aria-selected="true">
                                                            Informations
                                                        </a>
                                                    </li>
                                                    <li >
                                                        <a className="nav-link" data-bs-toggle="pill" href="#entraineur_jt" role="tab" aria-controls="entraineur_jt" aria-selected="true">
                                                            Entraineur
                                                        </a>
                                                    </li>
                                                    <li >
                                                        <a className="nav-link" data-bs-toggle="pill" href="#cal_jt" role="tab" aria-controls="cal_jt" aria-selected="true">
                                                            Calendrier
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="acc_4" >
                                            <h5 className="mb-0">
                                                <button className="btn btn-link collapsed" data-bs-toggle="collapse" data-bs-target="#collapse_4" aria-expanded="true" aria-controls="collapse_4">
                                                    Riwa For Fun - RFF
                                                </button>
                                            </h5>
                                        </div>
                                        <div id="collapse_4" className="collapse" aria-labelledby="acc_4" data-bs-parent="#accordionExample">
                                            <div className="card-body accordion-body">
                                                <ul>
                                                    <li >
                                                        <a className="nav-link" data-bs-toggle="pill" href="#info_rff" role="tab" aria-controls="info_rff" aria-selected="true">
                                                            Informations
                                                        </a>
                                                    </li>
                                                    <li >
                                                        <a className="nav-link" data-bs-toggle="pill" href="#inscription_rff" role="tab" aria-controls="inscription_rff" aria-selected="true">
                                                            Inscription au RFF
                                                        </a>
                                                    </li>
                                                    <li >
                                                        <a className="nav-link" data-bs-toggle="pill" href="#schema_5km_rff" role="tab" aria-controls="schema_5km_rff" aria-selected="true">
                                                            Schéma 5 km
                                                        </a>
                                                    </li>
                                                    <li >
                                                        <a className="nav-link" data-bs-toggle="pill" href="#schema_10km_rff" role="tab" aria-controls="schema_10km_rff" aria-selected="true">
                                                            Schéma 10 km
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
};

export default SectionSideBar;