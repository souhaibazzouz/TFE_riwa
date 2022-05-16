import React from 'react';
import { Link } from 'react-router-dom';

const LeftSideBar = () => {
    return (
        <>
            <div className="col-xl-4 col-lg-4">
                <div className="blog__sidebar">
                    <div className="sidebar__widget mb-75 ">
                        <div className="sidebar__widget-title mb-50">
                            <h4>Dernières News</h4>
                        </div>
                        <div className="sidebar__widget-content">
                            <div className="rc-post">
                                <ul>
                                    <li className="d-flex mb-20">
                                        <div className="rc-thumb mr-15">
                                            <Link to="/blogDetails"><img src="assets/img/blog/rc/rc-1.jpg"
                                                alt="rc-post" /></Link>
                                        </div>
                                        <div className="rc-text">
                                            <h6><Link to="/blogDetails">Belle rentrée estival pour les BPM</Link></h6>
                                            <div className="rc-meta"><span>28 avril 2022</span> </div>
                                        </div>
                                    </li>
                                    <li className="d-flex mb-20">
                                        <div className="rc-thumb mr-15">
                                            <Link to="/blogDetails"><img src="assets/img/blog/rc/rc-2.jpg"
                                                alt="rc-post" /></Link>
                                        </div>
                                        <div className="rc-text">
                                            <h6><Link to="/blogDetails">284 participants au Championnat Provincial BW !!!</Link>
                                            </h6>
                                            <div className="rc-meta"><span>25 avril 2022</span> </div>
                                        </div>
                                    </li>
                                    <li className="d-flex mb-20">
                                        <div className="rc-thumb mr-15">
                                            <Link to="/blogDetails"><img src="assets/img/blog/rc/rc-3.jpg"
                                                alt="rc-post" /></Link>
                                        </div>
                                        <div className="rc-text">
                                            <h6><Link to="/blogDetails">Championnats de Cross LBFA / BEL des jeunes</Link>
                                            </h6>
                                            <div className="rc-meta"><span>11 mars 2022</span> </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LeftSideBar;