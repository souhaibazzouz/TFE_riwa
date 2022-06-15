import React from 'react';
import { CgArrowLongLeft, CgArrowLongRight } from 'react-icons/cg';
import { IoEllipsisHorizontal } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import SingleNewsItem from '../../../components/SingleNews/SingleNewsItem';
import LeftSideBar from './LeftSideBar';

const NewsArea = () => {
    return (
        <>
            <section className="blog__area pt-120 pb-120">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 col-lg-8">
                            <div className="blog__wrapper mr-50">

                                <SingleNewsItem
                                    image="1"
                                    nom_auteur="stou"
                                    date="28 avril 2022"
                                    titre="Belle rentrée estival pour les BPM"
                                    debut_article="Weekend chargé pour les athlètes du RIWA … Après
                                     le Championnat Provincial du BW pour les grands, 28 jeunes
                                      athlètes se sont rendus à Braine pour la 1ère Manche du"
                                />

                                <SingleNewsItem
                                    image="2"
                                    nom_auteur="Kiki"
                                    date="25 avril 2022"
                                    titre="284 participants au Championnat Provincial BW !!!"
                                    debut_article="On your mark … Get set … Go Go Go !!! La saison
                                     outdoor a officiellement commencé sur la piste du RIWA lors du
                                      Championnat Provincial du Brabant Wallon,"
                                />

                                <SingleNewsItem
                                    image="3"
                                    nom_auteur="Kiki"
                                    date="11 mars 2022"
                                    titre="Championnats de Cross LBFA / BEL des jeunes"
                                    debut_article="C’est sous la pluie et le vent que les Championnats
                                     LBFA à Hannut se sont déroulés le dimanche 20 février. Malgré
                                      les mauvaises conditions, pas moins de 26 athlètes de"
                                />

                                <SingleNewsItem
                                    image="4"
                                    nom_auteur="Kiki"
                                    date="8 février 2022"
                                    titre="Championnats Championnats … LBFA … BEL"
                                    debut_article="Pour ce début d'année 2022, quelques grandes compétitions
                                     ont eu lieu après les Championnats du Brabant Wallon … Samedi 15 janvier
                                      – 8 athlètes ont participé aux Championnats LBFA Cadets"
                                />

                                <div className="basic-pagination" >
                                    <ul>
                                        <li>
                                            <Link to="/news">
                                                <i > <CgArrowLongLeft /> </i>
                                                <i > <CgArrowLongLeft /> </i>
                                            </Link>
                                        </li>
                                        <li className="active">
                                            <Link to="/news">
                                                <span>1</span>
                                                <span>1</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/news">
                                                <span>2</span>
                                                <span>2</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/news">
                                                <span>3</span>
                                                <span>3</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/news">
                                                <i ><IoEllipsisHorizontal /></i>
                                                <i ><IoEllipsisHorizontal /></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/news">
                                                <i > <CgArrowLongRight /> </i>
                                                <i > <CgArrowLongRight /> </i>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <LeftSideBar />
                    </div>
                </div>
            </section>
        </>

    );
};

export default NewsArea;