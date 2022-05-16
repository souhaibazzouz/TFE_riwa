import { CgArrowLongRight } from 'react-icons/cg';
import { Link } from 'react-router-dom';

const SingleNews = ({ date, name, desc }) => {
   return (
      <>
         <div className="col-xl-4 col-lg-4 col-md-6">
            <div className="blog__item p-relative fix mb-30 white-bg">
               <div className="blog__thumb" style={{ background: `url(assets/img/blog/blog-1.jpg)`, backgroundPosition: 'center', backgroundSize: 'cover' }} ></div>
               <div className="blog__content">
                  <div className="blog__meta date mb-45">
                     <h4>{date}</h4>
                     <h6>Avril 2022</h6>
                  </div>
                  <div className="blog__meta user mb-15">
                     <span>Par <Link to="/newsDetails">{name}</Link></span>
                  </div>
                  <h3>
                     <Link to="/newsDetails">{desc}</Link>
                  </h3>
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

export default SingleNews;