import React from 'react';
import { FaCheck } from 'react-icons/fa';

const RFFInfo = () => {
    return (
        <>
            <div className="col-xl-12 col-lg-12">
                <h3>Voici un défi à votre portée !</h3>
                <hr />
                <div className="services__content-3 pl-70 pr-70">
                    <p>
                        Apprendre à courir 5 ou 10 kilomètres en 10
                        semaines d’entraînement à raison de trois séances
                        par semaine <b>encadrées par 2 coachs du RIWA et cela à chaque séance.</b><br />

                        Les objectifs du <b>RIWA FOR FUN</b><sub>(ex Start To Run)</sub> sont la convivialité et la santé.
                    </p>
                    <ul>
                        <li ><span><i > <FaCheck /> </i>Les entraîneurs <b>« RIWA FOR FUN »</b> sont prêts à vous accueillir.</span></li>
                        <li ><span><i > <FaCheck /> </i><b>Deux sessions</b> sont organisées par an : une au <b>printemps</b> et l’autre en <b>automne</b>.</span></li>
                        <li ><span><i > <FaCheck /> </i>Vous serez <b>encadré à chaque séance</b> et assuré par le RIWA pour 50 € par session (6 mois).</span></li>
                        <li ><span><i > <FaCheck /> </i>Un <b>brevet d’aptitude</b> est décerné à la fin de la session.</span></li>
                        <li><span><h4><b>NOUVELLE  SESSION : Le lundi 14 MARS 2022 dès 18h00</b></h4></span></li>
                        <br />
                    </ul>
                </div>
                <h3>Rejoignez le programme <b>RIWA FOR FUN</b></h3>
                <hr />
                <div className="services__content-3">
                    <p>
                        <b>Tout le monde peut courir !</b><br />Vous manquez de courage
                        et d’énergie pour faire du sport ? <b>RIWA FOR FUN</b> est un programme
                        d’entraînement spécifique pour commencer à courir ! Après 10 semaines, vous
                        courrez 5 kilomètres ! Grâce aux conseils de nos spécialistes, vous apprendrez
                        à courir mieux, plus vite, plus longtemps. Et, tout en vous entraînant à votre
                        rythme, vous serez surpris de vos progrès et de vos performances. <br />

                        <b>Objectif 5 kilomètres</b> pour les débutants, <b>objectif 10 kilomètres</b> ou plus
                        pour ceux qui disposent déjà d’une expérience de la course.
                    </p>
                </div>
                <h3>Lieu des entrainements</h3>
                <hr />
                <div className="services__content-3">
                    <p>
                        Rendez-vous les <b>lundis</b>, <b>mercredis</b> et <b>vendredis</b>, à 18h00,
                        sur le Parking du Bois de Beumont à Wavre. <br />
                        Pour en savoir plus : appelez le <b>0477/94.75.63</b> ou <b>0495/33.77.88</b>.
                    </p>
                    <iframe title='contact' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10103.948439546723!2d4.581978789622482!3d50.72017830567108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c17d7dc880a96d%3A0x747fca3ff723c1b7!2sBois%20de%20Beumont!5e0!3m2!1sen!2sus!4v1653140624640!5m2!1sen!2sus"></iframe>
                </div>
            </div>
        </>
    );
};

export default RFFInfo;