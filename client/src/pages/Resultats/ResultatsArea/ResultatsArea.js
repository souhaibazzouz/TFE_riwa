import React from 'react';
import CatSideBar from '../../../components/Sidebar/CatSideBar';
import { AiFillEdit } from 'react-icons/ai';
import { useState, useEffect } from 'react';
import Alert from 'react-bootstrap/Alert';
import Axios from 'axios';
import Modal from 'react-bootstrap/Modal'
import TC from './ResultatsAreaTab/TC';
import BPM from './ResultatsAreaTab/BPM';
import JT from './ResultatsAreaTab/JT';
import Select from 'react-select';


const ResultatsArea = () => {
    const [date, setDate] = useState('');
    const [name, setName] = useState('');
    const [filePDF, setFilePDF] = useState('');
    const [compClub, setCompClub] = useState(false);
    const [cat, setCat] = useState('');

    const [loginError, setloginError] = useState('');
    const [isError, setIsError] = useState(false);
    const [isValid, setIsValid] = useState(false);

    const [authState, setAuthState] = useState(false);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const catSelect = [
        { value: '1', label: "École d'Athlétisme" },
        { value: '4', label: "Toutes Catégories" },
        { value: '5', label: "Jogging et Trail" },
    ]

    const upload = () => {
        try {
            Axios.post('http://localhost:3001/upload/file', {
                date: date,
                name: name,
                filePDF: filePDF,
                compClub: compClub,
                cat: cat,
            }).then((response) => {
                if (!response.data.auth) {
                    setloginError(response.data.message)
                    setIsValid(false)
                    setIsError(true)
                } else {
                    setIsError(false)
                    setIsValid(true)
                    setTimeout(function () {
                        window.location.reload(1);
                    }, 5000);
                }
            })
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
                                    {isValid === true &&
                                        <Alert variant="success">Bien joué, le résultat a été ajouté!!</Alert>
                                    }
                                    {isError === true &&
                                        <Alert variant="danger">{`${loginError}`}</Alert>
                                    }
                                    Veuillez remplir toutes les informations liées à la compétition que vous voulez ajouter
                                    <br />
                                    <br />
                                    <form>
                                        <div className='row'>
                                            <div className='col-xl-3 col-lg-4 col-md-6'>
                                                <div className="form-group">
                                                    <label for="comment">Date :</label>
                                                    <input
                                                        className="form-control"
                                                        type="date"
                                                        name="date"
                                                        onChange={(e) => {
                                                            setDate(e.target.value);
                                                        }} />
                                                </div>
                                            </div>
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
                                                    <label for="comment">Lien du fichier :</label>
                                                    <input
                                                        className="form-control"
                                                        type="text"
                                                        name='filePDF'
                                                        accept="application/pdf"
                                                        onChange={(e) => {
                                                            setFilePDF(e.target.value)
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <br />
                                        <div className='row'>
                                            <div className='col-xl-5 col-lg-6 col-md-12'>
                                                <div className="form-check">
                                                    <label className="form-check-label">Compétition du club</label>
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        name='compClub'
                                                        onChange={(e) => {
                                                            setCompClub(e.target.checked)
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                            <div className='col-xl-5 col-lg-6 col-md-12'>
                                                <div className="dropdown-container">
                                                    <label for="comment">Choisir une catégorie:</label>
                                                    <Select
                                                        options={catSelect}
                                                        placeholder="Choisir ..."
                                                        onChange={(e) => setCat(e.value)}
                                                    />
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