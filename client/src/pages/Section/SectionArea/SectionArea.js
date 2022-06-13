import React from 'react';
import SectionSideBar from '../../../components/Sidebar/SectionSideBar';
import SectionInfo from './SectionAreaTab/SectionInfo';
import RFFInfo from './SectionAreaTab/RFFInfo';
import RFFK from './SectionAreaTab/RFFK';
import BPMEntraineur from './SectionAreaTab/BPMEntraineur';
import TCEntraineur from './SectionAreaTab/TCEntraineur';
import JTEntraineur from './SectionAreaTab/JTEntraineur';


const SectionArea = () => {
    return (
        <>
            <section className="table__area pt-115 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 order-lg-first">
                            <SectionSideBar />
                        </div>
                        <div className="col-xl-8 col-lg-8">
                            <div className="services__tab grey-bg-18">
                                <div className="tab-content">
                                    <div className="tab-pane fade show active" id="info_bpm" role="tabpanel" aria-labelledby="info_bpm-tab">
                                        <SectionInfo
                                            bpm="true" />
                                    </div>

                                    <div className="tab-pane fade" id="entraineur_bpm" role="tabpanel" aria-labelledby="entraineur_bpm-tab">
                                        <BPMEntraineur />
                                    </div>

                                    <div className="tab-pane fade" id="info_tc" role="tabpanel" aria-labelledby="info_tc-tab">
                                        <SectionInfo
                                            tc="true" />
                                    </div>

                                    <div className="tab-pane fade" id="entraineur_tc" role="tabpanel" aria-labelledby="entraineur_tc-tab">
                                        <TCEntraineur />
                                    </div>

                                    <div className="tab-pane fade" id="info_jt" role="tabpanel" aria-labelledby="info_jt-tab">
                                        <SectionInfo
                                            jt="true" />
                                    </div>

                                    <div className="tab-pane fade" id="entraineur_jt" role="tabpanel" aria-labelledby="entraineur_jt-tab">
                                        <JTEntraineur />
                                    </div>

                                    <div className="tab-pane fade" id="info_rff" role="tabpanel" aria-labelledby="info_rff-tab">
                                        <RFFInfo />
                                    </div>

                                    <div className="tab-pane fade" id="schema_5km_rff" role="tabpanel" aria-labelledby="schema_5km_rff-tab">
                                        <RFFK
                                            distance="5k"
                                        />
                                    </div>

                                    <div className="tab-pane fade" id="schema_10km_rff" role="tabpanel" aria-labelledby="schema_10km_rff-tab">
                                        <RFFK
                                            distance="10k"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default SectionArea;