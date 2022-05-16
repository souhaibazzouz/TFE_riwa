import React from 'react';
import LeftSideBar from './LeftSideBar';

const NewsArea = () => {
    return (
        <>
            <section className="blog__area pt-120 pb-120">
                <div className="container">
                    <div className="row">

                        <LeftSideBar />
                    </div>
                </div>
            </section>
        </>

    );
};

export default NewsArea;