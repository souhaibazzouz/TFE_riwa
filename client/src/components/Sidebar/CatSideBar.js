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
                                <div className="card accordion-item">
                                    <h5 className="mb-0">
                                        <button className="btn btn-link collapsed" data-bs-toggle="collapse" data-bs-target="#collapse_1" aria-expanded="true" aria-controls="collapse_1">
                                            Ecole D'athlétisme
                                        </button>
                                    </h5>
                                </div>
                                <div className="card">
                                    <div className="card-header" id="acc_2" >
                                        <h5 className="mb-0">
                                            <button className="btn btn-link collapsed" data-bs-toggle="collapse" data-bs-target="#collapse_2" aria-expanded="true" aria-controls="collapse_2">
                                                Toutes Catégories
                                            </button>
                                        </h5>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header" id="acc_3" >
                                        <h5 className="mb-0">
                                            <button className="btn btn-link collapsed">
                                                Jogging & Trail
                                            </button>
                                        </h5>
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