import React from 'react';
import SingleNews from '../../../components/SingleNews/SingleNews';
import { CgArrowLongRight } from 'react-icons/cg';
import { Link } from 'react-router-dom';

const HomeNews = () => {
    return (
        <>
            <section className="blog__area grey-bg-15 pt-115 pb-135">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-5">
                            <div className="section__title section__title-3 mb-65">
                                <span>Dernières News</span>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <SingleNews date="28" image="1" name="Kiki" desc="Belle rentrée estival pour les BPM" />
                        <SingleNews date="23" image="2" name="Nico" desc="284 participants au Championnat Provincial BW !!!" />
                        <SingleNews date="11" image="3" name="Stou" desc="Championnats de Cross LBFA / BEL des jeunes" />

                    </div>
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="blog__more mt-60">
                                <Link to="/news" className="z-btn z-btn-border">Voir toutes les News
                                    <i > <CgArrowLongRight /> </i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default HomeNews;