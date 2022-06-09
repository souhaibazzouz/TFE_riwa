import React from 'react';
import CatSideBar from '../../../components/Sidebar/CatSideBar';
import { AiFillEdit } from 'react-icons/ai';
import { useState } from 'react';
import { useEffect } from 'react';
import Axios from 'axios';
import Modal from 'react-bootstrap/Modal'
import TC from './ResultatsAreaTab/TC';
import BPM from './ResultatsAreaTab/BPM';
import JT from './ResultatsAreaTab/JT';


const ResultatsArea = () => {
    const [date, setDate] = useState('');
    const [name, setName] = useState('');
    const [filePDF, setFilePDF] = useState('');
    const [compClub, setCompClub] = useState(false);
    const [cat, setCat] = useState('');


    const [authState, setAuthState] = useState(false);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const upload = () => {
        try {
            Axios.post('http://localhost:3001/upload/file', {
                date: date,
                name: name,
                filePDF: filePDF,
                compClub: compClub,
                cat: cat,
            }).then((response) => {
            })
            setShow(false)
            alert("Bien joué\nVous avez correctement ajouté le résultat");
        } catch (error) {
            alert("Zuuut!!!\nUne erreur est arrivé lors de l'ajout du résultat");
            console.log(error)
        }


    }

    useEffect(() => {
        Axios.get("http://localhost:3001/isUserAuth", {
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
            <section className="table__area pt-115 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 order-lg-first">
                            <CatSideBar />
                        </div>
                        <div className="col-xl-8 col-lg-8">
                            {authState === true &&
                                <div>
                                    <button onClick={handleShow} type="button" className="btn btn-primary"><i ><AiFillEdit /></i> Ajouter</button>
                                </div>
                            }
                            <Modal
                                size="lg"
                                aria-labelledby="contained-modal-title-vcenter"
                                centered
                                show={show}
                                onHide={handleClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Ajouter un résultat</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    Veuillez remplir toutes les informations liées à la compétition que vous voulez ajouter
                                    <br />
                                    <br />
                                    <form>
                                        <div className='row'>
                                            <div className='col-xl-3 col-lg-4 col-md-6'>
                                                <label>Date :</label>
                                                <input
                                                    type="date"
                                                    name="date"
                                                    onChange={(e) => {
                                                        setDate(e.target.value);
                                                    }} />
                                            </div>
                                            <div className='col-xl-3 col-lg-4 col-md-6'>
                                                <label>Nom :</label>
                                                <input
                                                    type="text"
                                                    name='name'
                                                    onChange={(e) => {
                                                        setName(e.target.value);
                                                    }} />
                                            </div>
                                            <div className='col-xl-3 col-lg-4 col-md-6'>
                                                <label>Lien du fichier :</label>
                                                <input
                                                    type="text"
                                                    name='filePDF'
                                                    accept="application/pdf"
                                                    onChange={(e) => {
                                                        setFilePDF(e.target.value)
                                                    }}
                                                />
                                            </div>
                                        </div>
                                        <br />
                                        <div className='row'>
                                            <div className='col-xl-5 col-lg-6 col-md-12'>
                                                <label>Compétition du club :</label>
                                                <input
                                                    type="checkbox"
                                                    name='compClub'
                                                    onChange={(e) => {
                                                        setCompClub(e.target.checked)
                                                    }}
                                                />
                                            </div>
                                            <div className='col-xl-5 col-lg-6 col-md-12'>
                                                <div className="input-group mb-3">
                                                    <div className="input-group-prepend">
                                                        <label className="input-group-text">Catégorie</label>
                                                    </div>
                                                    <select
                                                        className="custom-select"
                                                        onChange={(e) => {
                                                            setCat(e.target.value)
                                                        }}>
                                                        <option value="1">Ecole d'Athlétisme</option>
                                                        <option value="4">Toutes Catégories</option>
                                                        <option value="5">Jogging et Trail</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </Modal.Body>
                                <Modal.Footer>
                                    <button onClick={handleClose} type="button" className="btn btn-secondary">
                                        Close
                                    </button>
                                    <button onClick={upload} type="button" className="btn btn-primary">
                                        <i ><AiFillEdit /></i> Ajouter
                                    </button>
                                </Modal.Footer>
                            </Modal>
                            <div className="tab-content">
                                <div className="tab-pane fade show active" id="resultat_bpm" role="tabpanel" aria-labelledby="resultat_bpm-tab">
                                    <BPM />
                                </div>
                                <div className="tab-pane fade" id="resultat_tc" role="tabpanel" aria-labelledby="resultat_tc-tab">
                                    <TC />
                                </div>
                                <div className="tab-pane fade" id="resultat_jt" role="tabpanel" aria-labelledby="resultat_jt-tab">
                                    <JT />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ResultatsArea;