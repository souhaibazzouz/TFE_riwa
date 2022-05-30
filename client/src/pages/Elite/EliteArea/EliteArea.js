import React from 'react';
import SingleElite from '../../../components/SingleElite/SingleElite';
import { AiOutlineFilePdf } from 'react-icons/ai';


const EliteArea = () => {
   return (
      <>
         <section className="team__area">
            <div className="container">
               <div className="row">
                  <div className="col-xl-3 col-lg-4 col-md-6">
                     <div className="team__titre">
                        <h4>Statut et Minimas: </h4>
                     </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6">
                     <div className="team__action">
                        <a
                           href='assets/pdf/Statut-Elites-RIWA.pdf'
                           target="_blank"
                           rel="noreferrer">
                           <i > <AiOutlineFilePdf /> </i>
                           Athlétisme</a>
                     </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6">
                     <div className="team__action grey-bg-18 mb-15">
                        <a
                           href='assets/pdf/Statut_Elites_Jog-Trail.pdf'
                           target="_blank"
                           rel="noreferrer">
                           <i > <AiOutlineFilePdf /> </i>
                           Jogging-Trail</a>
                     </div>
                  </div>
               </div>
               <div className='row'>
                  <SingleElite
                     image="1"
                     name="Emma Broze"
                     title="Elite A sur 100m, 200m et 300m Elite B sur 400m"
                     palmares={<p><b>Championne LBFA TC</b> sur 400m en <b>58″15</b> <br />
                        <b>Vice-Championne LBFA Espoir</b> sur 200m en <b>25″24</b><br />
                        <b>14e aux Championnat de Belgique TC</b> sur 400m en <b>57″97</b><br />
                     </p>} />
                  <SingleElite
                     image="2"
                     name="Lionel Cricus"
                     title="Élite B sur 200m, 300m & Longueur"
                     palmares="yolo" />
                  <SingleElite
                     image="3"
                     name="Gemma Delreux"
                     title="Élite B en Longueur"
                     palmares="yolo" />
                  <SingleElite
                     image="4"
                     name="Guillaume Demeulemeester"
                     title="Élite Jogging-Trail"
                     palmares="yolo" />
                  <SingleElite
                     image="5"
                     name="Arnaud Descampe"
                     title="Élite Jogging-Trail"
                     palmares="yolo" />
                  <SingleElite
                     image="6"
                     name="Nicole Desille"
                     title="Élite Jogging-Trail"
                     palmares="yolo" />
                  <SingleElite
                     image="7"
                     name="Denis Galerin"
                     title="Élite Jogging-Trail"
                     palmares="yolo" />
                  <SingleElite
                     image="8"
                     name="Simon Genow"
                     title="Élite B en Disque"
                     palmares="yolo" />
                  <SingleElite
                     image="9"
                     name="Lionel Halleux"
                     title="Élite A sur 300m & 400m"
                     palmares="yolo" />
                  <SingleElite
                     image="10"
                     name="Jean-Baptiste Lejeune"
                     title="Élite A en Longueur"
                     palmares="yolo" />
                  <SingleElite
                     image="11"
                     name="Loïs Makena"
                     title="Élite A en Hauteur"
                     palmares="yolo" />
                  <SingleElite
                     image="12"
                     name="Niels Mallinger"
                     title="Élite A en Hauteur"
                     palmares="yolo" />
                  <SingleElite
                     image="12"
                     name="Niels Mallinger"
                     title="Élite A en Hauteur"
                     palmares="yolo" />
               </div>
            </div >
         </section >
      </>
   );
};

export default EliteArea;