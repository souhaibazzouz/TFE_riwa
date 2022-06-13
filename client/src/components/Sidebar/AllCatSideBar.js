import React from 'react';
import { Link } from 'react-router-dom';



const AllCatSideBar = () => {
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
                                                    École d'Athlétisme
                                                </button>
                                            </h5>
                                        </div>

                                        <div id="collapse_1" className="collapse" aria-labelledby="acc_1" data-bs-parent="#accordionExample">
                                            <div className="card-body accordion-body">
                                                <ul>
                                                    <li ><span><Link to="">Indoor Femmes</Link></span></li>
                                                    <li ><span><Link to="">Indoor Homme</Link></span></li>
                                                    <li ><span><Link to="">Outdoor Femmes</Link></span></li>
                                                    <li ><span><Link to="">Outdoor Homme</Link></span></li>
                                                    <li ><span><Link to="">Cross Femmes</Link></span></li>
                                                    <li ><span><Link to="">Cross Homme</Link></span></li>

                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="acc_2" >
                                            <h5 className="mb-0">
                                                <button className="btn btn-link collapsed" data-bs-toggle="collapse" data-bs-target="#collapse_2" aria-expanded="true" aria-controls="collapse_2">
                                                    Cadets à Seniors
                                                </button>
                                            </h5>
                                        </div>

                                        <div id="collapse_2" className="collapse" aria-labelledby="acc_2" data-bs-parent="#accordionExample">
                                            <div className="card-body accordion-body">
                                                <ul>
                                                    <li ><span><Link to="">Indoor Femmes</Link></span></li>
                                                    <li ><span><Link to="">Indoor Homme</Link></span></li>
                                                    <li ><span><Link to="">Outdoor Femmes</Link></span></li>
                                                    <li ><span><Link to="">Outdoor Homme</Link></span></li>
                                                    <li ><span><Link to="">Cross Femmes</Link></span></li>
                                                    <li ><span><Link to="">Cross Homme</Link></span></li>

                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="acc_3" >
                                            <h5 className="mb-0">
                                                <button className="btn btn-link collapsed" data-bs-toggle="collapse" data-bs-target="#collapse_3" aria-expanded="true" aria-controls="collapse_3">
                                                    Masters
                                                </button>
                                            </h5>
                                        </div>

                                        <div id="collapse_3" className="collapse" aria-labelledby="acc_3" data-bs-parent="#accordionExample">
                                            <div className="card-body accordion-body">
                                                <ul>
                                                    <li ><span><Link to="">Indoor Femmes</Link></span></li>
                                                    <li ><span><Link to="">Indoor Homme</Link></span></li>
                                                    <li ><span><Link to="">Outdoor Femmes</Link></span></li>
                                                    <li ><span><Link to="">Outdoor Homme</Link></span></li>
                                                    <li ><span><Link to="">Cross Femmes</Link></span></li>
                                                    <li ><span><Link to="">Cross Homme</Link></span></li>

                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="acc_4" >
                                            <h5 className="mb-0">
                                                <button className="btn btn-link collapsed" data-bs-toggle="collapse" data-bs-target="#collapse_4" aria-expanded="true" aria-controls="collapse_4">
                                                    Toutes Catégories
                                                </button>
                                            </h5>
                                        </div>

                                        <div id="collapse_4" className="collapse" aria-labelledby="acc_4" data-bs-parent="#accordionExample">
                                            <div className="card-body accordion-body">
                                                <ul>
                                                    <li ><span><Link to="">Indoor Femmes</Link></span></li>
                                                    <li ><span><Link to="">Indoor Homme</Link></span></li>
                                                    <li ><span><Link to="">Outdoor Femmes</Link></span></li>
                                                    <li ><span><Link to="">Outdoor Homme</Link></span></li>
                                                    <li ><span><Link to="">Cross Femmes</Link></span></li>
                                                    <li ><span><Link to="">Cross Homme</Link></span></li>

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

export default AllCatSideBar;