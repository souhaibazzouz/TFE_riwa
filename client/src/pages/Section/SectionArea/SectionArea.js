import React from 'react';
import SectionSideBar from '../../../components/Sidebar/SectionSideBar';

const SectionArea = () => {
    return (
        <>
            <section className="table__area pt-115 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 order-lg-first">
                            <SectionSideBar />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default SectionArea;