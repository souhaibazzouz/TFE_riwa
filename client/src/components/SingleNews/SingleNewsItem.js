import React from 'react';
import { CgArrowLongRight } from 'react-icons/cg';
import { Link } from 'react-router-dom';

const SingleNewsItem = ({ image, date, titre, debut_article }) => {
    return (
        <>
            <div className="blog__item-2 mb-50 fix" >
                <div className="blog__thumb-2 w-img fix">
                    <Link to="/newsDetails">
                        <img src={`assets/img/blog/item/${image}.jpg`} alt="" />
                    </Link>
                </div>
                <div className="blog__content-2">
                    <div className="blog__meta-2 mb-15 d-sm-flex align-items-center">
                        <div className="blog__user pr-20 mr-20">
                        </div>
                        <div className="blog__date">
                            <span>{date}</span>
                        </div>
                    </div>
                    <h3>
                        <Link to="/newsDetails">{titre}</Link>
                    </h3>
                    <p>{debut_article}[...]</p>
                    <div className="blog__btn d-sm-flex justify-content-between">
                        <div className="blog__btn">
                            <Link to="/newsDetails" className="link-btn-2">
                                Lire Plus
                                <i > <CgArrowLongRight /> </i>
                                <i > <CgArrowLongRight /> </i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleNewsItem;