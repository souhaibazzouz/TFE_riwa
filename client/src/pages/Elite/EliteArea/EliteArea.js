import React from 'react';
import SingleElite from '../../../components/SingleElite/SingleElite';
import { AiOutlineFilePdf, AiFillEdit } from 'react-icons/ai';
import { BsTrashFill } from 'react-icons/bs';
import { useState } from 'react';
import { useEffect } from 'react';
import Select from 'react-select';
import Axios from 'axios';
import Modal from 'react-bootstrap/Modal'


const EliteArea = () => {
   const [name, setName] = useState('');
   const [eliteType, setEliteType] = useState('');


   const [authState, setAuthState] = useState(false);
   const [showADD, setShowADD] = useState(false);
   const [showDEL, setShowDEL] = useState(false);
   const handleCloseADD = () => setShowADD(false);
   const handleShowADD = () => setShowADD(true);
   const handleCloseDEL = () => setShowDEL(false);
   const handleShowDEL = () => setShowDEL(true);

   const epreuve = [
      { value: '5', label: '100m' },
      { value: '7', label: '200m' },
      { value: '8', label: '300m' },
      { value: '9', label: '400m' },
      { value: '11', label: '800m' },
      { value: '13', label: '1500m' },
      { value: '21', label: '80mH' },
      { value: '22', label: '100mH' },
      { value: '23', label: '110mH' },
      { value: '25', label: '300mH' },
      { value: '26', label: '400mH' },
      { value: '16', label: '3000m' },
      { value: '17', label: '5000m' },
      { value: '18', label: '10000m' },
      { value: '27', label: '2000mST' },
      { value: '28', label: '3000mST' },
      { value: '40', label: 'Hauteur' },
      { value: '42', label: 'Perche' },
      { value: '41', label: 'Longueur' },
      { value: '43', label: 'Triple Saut' },
      { value: '45', label: 'Poids' },
      { value: '53', label: 'Disque' },
      { value: '60', label: 'Javelot' },
      { value: '66', label: 'Marteau' },
      { value: '75', label: 'Hexathlon' },
      { value: '76', label: 'Heptathlon' },
      { value: '77', label: 'Octathlon' },
      { value: '78', label: 'Nonathlon' },
      { value: '79', label: 'Décathlon' },
   ]

   useEffect(() => {
      Axios.get("https://riwa-ac.herokuapp.com/isUserAuth", {
         headers: {
            "x-access-token": localStorage.getItem("token"),
         },
      }).then((response) => {
         if (response.data.auth === true) {
            setAuthState(true);
         }
      })
   }, []);
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
                  <div className="col-xl-3 col-lg-4 col-md-6">
                     {authState === true &&
                        <div>
                           <div className='row mb-15'>
                              <div className='col-6'>
                                 <button onClick={handleShowADD} type="button" className="btn btn-primary"><i ><AiFillEdit /></i> Ajouter</button>
                              </div>
                              <div className='col-6'>
                                 <button onClick={handleShowDEL} type="button" className="btn btn-danger"><i ><BsTrashFill /></i> Supprimer</button>
                              </div>
                           </div>
                        </div>
                     }
                  </div>
               </div>
               <Modal
                  size="lg"
                  aria-labelledby="contained-modal-title-vcenter"
                  centered
                  show={showADD}
                  onHide={handleCloseADD}>
                  <Modal.Header closeButton>
                     <Modal.Title>Ajouter un Elite</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                     Veuillez remplir toutes les informations demandées:
                     <br />
                     <br />
                     <form>
                        <div className='row'>
                           <div className='col-xl-3 col-lg-4 col-md-6'>
                              <div className="form-group">
                                 <label for="comment">Nom :</label>
                                 <input
                                    className="form-control"
                                    type="text"
                                    name='name'
                                    onChange={(e) => {
                                       setName(e.target.value);
                                    }} />
                              </div>
                           </div>
                           <div className='col-xl-3 col-lg-4 col-md-6'>
                              <div className="form-group">
                                 <label>Type d'élite: </label>
                              </div>
                              <select
                                 name="select"
                                 className="form-control"
                                 onChange={(e) => {
                                    setEliteType(e.target.value)
                                 }}>
                                 <option value="1">A</option>
                                 <option value="2">B</option>
                                 <option value="3">Jogging & Trail</option>
                              </select>
                           </div>
                           {(eliteType === '1' || eliteType === '2') &&
                              <div className='col-xl-3 col-lg-4 col-md-6'>
                                 <div className="dropdown-container">
                                    <label for="comment">Choisir une épreuve:</label>
                                    <Select
                                       options={epreuve}
                                       placeholder="Choisir ..."
                                    />
                                 </div>
                              </div>
                           }
                        </div>
                        <br />
                        <div className="form-group">
                           <label for="comment">Palmares :</label>
                           <textarea className="form-control" rows="5"></textarea>
                        </div>
                     </form>
                  </Modal.Body>
                  <Modal.Footer>
                     <button onClick={handleCloseADD} type="button" className="btn btn-secondary">
                        Close
                     </button>
                     <button type="button" className="btn btn-primary">
                        <i ><AiFillEdit /></i> Ajouter
                     </button>
                  </Modal.Footer>
               </Modal>
               <div className='row'>
                  <SingleElite
                     image="emma_broze"
                     name="Emma Broze"
                     title="Elite A sur 100m, 200m et 300m Elite B sur 400m"
                     palmares={<p><b>Championne LBFA TC</b> sur 400m en <b>58″15</b> <br />
                        <b>Vice-Championne LBFA Espoir</b> sur 200m en <b>25″24</b><br />
                        <b>14e aux Championnat de Belgique TC</b> sur 400m en <b>57″97</b><br />
                     </p>} />
                  <SingleElite
                     image="lionel_cricus"
                     name="Lionel Cricus"
                     title="Élite B sur 200m, 300m & Longueur"
                     palmares="yolo" />
                  <SingleElite
                     image="gemma_delreux"
                     name="Gemma Delreux"
                     title="Élite B en Longueur"
                     palmares="yolo" />
                  <SingleElite
                     image="guillaume_demeulemeester"
                     name="Guillaume Demeulemeester"
                     title="Élite Jogging-Trail"
                     palmares="yolo" />
                  <SingleElite
                     image="arnaud_descampe"
                     name="Arnaud Descampe"
                     title="Élite Jogging-Trail"
                     palmares="yolo" />
                  <SingleElite
                     image="nicole_desille"
                     name="Nicole Desille"
                     title="Élite Jogging-Trail"
                     palmares="yolo" />
                  <SingleElite
                     image="denis_galerin"
                     name="Denis Galerin"
                     title="Élite Jogging-Trail"
                     palmares="yolo" />
                  <SingleElite
                     image="simon_genow"
                     name="Simon Genow"
                     title="Élite B en Disque"
                     palmares="yolo" />
                  <SingleElite
                     image="lionel_halleux"
                     name="Lionel Halleux"
                     title="Élite A sur 300m & 400m"
                     palmares="yolo" />
                  <SingleElite
                     image="jb_lejeune"
                     name="Jean-Baptiste Lejeune"
                     title="Élite A en Longueur"
                     palmares="yolo" />
                  <SingleElite
                     image="lois_makena"
                     name="Loïs Makena"
                     title="Élite A en Hauteur"
                     palmares="yolo" />
                  <SingleElite
                     image="niels_mallinger"
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