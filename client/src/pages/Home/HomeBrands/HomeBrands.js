import Slider from "react-slick";
import SingleBrandItem from "../../../components/SingleBrandItem/SingleBrandItem";

const HomeBrands = () => {
   // slick setting
   const settings = {
      autoplay: false,
      autoplaySpeed: 10000,
      dots: false,
      arrows: false,
      slidesToShow: 6,
      slidesToScroll: 1,
      responsive: [
         {
            breakpoint: 1024,
            settings: {
               slidesToShow: 4,
               slidesToScroll: 1,
               infinite: true,
            }
         },
         {
            breakpoint: 767,
            settings: {
               slidesToShow: 3,
               slidesToScroll: 1,
            }
         },
         {
            breakpoint: 576,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 1,
            }
         },
      ]

   };
   return (
      <>
         <section className="brand__area p-relative pt-160 pb-50">
            <div className="brand__shape">
               <img className="square" src="assets/img/icon/brand/square.png" alt="" />
               <img className="circle" src="assets/img/icon/brand/circle.png" alt="" />
               <img className="circle-2" src="assets/img/icon/brand/circle-2.png" alt="" />
               <img className="triangle" src="assets/img/icon/brand/trianlge.png" alt="" />
            </div>
            <div className="container p-relative">
               <div className="row">
                  <div className="col-xl-4 offset-xl-1 col-lg-4 offset-lg-1">
                     <div className="section__title mb-30">
                        <h3><span>Nos Partenaires</span></h3>
                     </div>
                  </div>
               </div>
               <div className="row">

                  <Slider className='brand-active' {...settings}>
                     <SingleBrandItem
                        img_1="1"
                        a_1="https://www.rixensart.be/"

                     />
                     <SingleBrandItem
                        img_1="2"
                        a_1="https://www.wavre.be/"

                     />
                     <SingleBrandItem
                        img_1="3"
                        a_1="https://www.sport-adeps.be/"

                     />
                     <SingleBrandItem
                        img_1="4"
                        a_1="https://picking-graphic.be/"
                     />
                     <SingleBrandItem
                        img_1="5"
                        a_1="https://www.training7.com/"
                     />
                     <SingleBrandItem
                        img_1="6"
                        a_1="http://www.acsrs.be/"
                     />
                  </Slider>

               </div>
            </div>
         </section>

      </>
   );
};

export default HomeBrands;