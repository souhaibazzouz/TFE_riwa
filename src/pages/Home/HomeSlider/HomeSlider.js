import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';

const HomeSlider = () => {
   // slider data
   const homeSliderData = [
      {
         id: 1,
         bgImg: 'home_slider_1',
      },
      {
         id: 2,
         bgImg: 'home_slider_2',
      },
   ]
   // slick setting
   const settings = {
      autoplay: true,
      autoplaySpeed: 8000,
      speed: 500,
      infinite: true,
      dots: false,
      fade: true,
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
   };

   return (
      <>
         <section className="slider__area">
            <Slider className='slider-active' {...settings}>
               {
                  homeSliderData.map((slider, index) => {
                     return <div key={index}
                        className={`single-slider slider__height d-flex align-items-center ${slider.bgImg}`}                     >
                        <div className="slider__shape">
                           <img className="shape triangle" src="assets/img/icon/slider/triangle.png" alt="triangle" />
                           <img className="shape dotted-square" src="assets/img/icon/slider/dotted-square.png" alt="dotted-square" />
                           <img className="shape solid-square" src="assets/img/icon/slider/solid-square.png" alt="solid-square" />
                        </div>
                        <div className="container h1_slider_wrapper">
                           <div className="row">
                              <div className="col-xl-9 col-lg-9 col-md-10 col-sm-10">
                                 <div className="slider__content">
                                    <p>
                                       <h4>Riwa – Athetic Club Rixensart Wavre</h4>
                                       <h1>Athlétisme,<br />
                                          Jogging & Trail<br />
                                          Riwa For Fun
                                       </h1>
                                       <h2>Pour tout le monde à partir de 6 ans</h2>
                                    </p>
                                    <div className="slider__btn">
                                       <Link to="/infos" className="z-btn z-btn-transparent">Plus d'Informations</Link>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  })
               }
            </Slider>
         </section>
      </>
   );
};

export default HomeSlider;