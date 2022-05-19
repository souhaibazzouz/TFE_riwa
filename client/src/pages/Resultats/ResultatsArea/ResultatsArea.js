import React from 'react';
import CatSideBar from '../../../components/Sidebar/CatSideBar';

const ResultatsArea = () => {
    return (
        <>
            <section className="table__area pt-115 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 order-lg-first">
                            <CatSideBar />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ResultatsArea;