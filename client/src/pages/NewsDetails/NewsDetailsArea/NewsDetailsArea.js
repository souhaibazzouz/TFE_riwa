import React from 'react';
import { FaFacebookF, FaTwitter } from 'react-icons/fa';
import LeftSideBar from '../../News/NewsArea/LeftSideBar';

const NewsDetailsArea = () => {
   return (
      <>
         <section className="blog__area pt-120 pb-120">
            <div className="container">
               <div className="row">
                  <div className="col-xl-8 col-lg-8">
                     <div className="blog__details-wrapper mr-50">
                        <div className="blog__text mb-45">
                           <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium velit luctus lorem malesuada, sed dignissim dolor imperdiet. Duis et nisi in est porta efficitur. Aenean a rhoncus velit, nec condimentum magna. Duis nec congue nisl, sit amet blandit massa. Vestibulum <span>quis tortor at metus pulvinar</span> scelerisque. Quisque condimentum lectus vel nisl efficitur pharetra. Ut lacinia dui ultricies porta tincidunt. Nunc dapibus nulla semper eros rhoncus, aliquet dictum leo consectetur. Aenean in nisl commodo lectus gravida placerat id a dolor. Quisque quis elementum sem. Morbi at cursus quam, in sagittis eros. Nunc ullamcorper ligula laoreet, lobortis felis eu, hendrerit risus. Duis vel tortor sodales, posuere ipsum at, vestibulum velit. Curabitur varius ex sit amet condimentum condimentum. <span>Mauris eget </span>enim ac neque vestibulum condimentum sodales vel enim. Morbi sit amet vestibulum ante.</p>                        </div>
                        <div className="blog__quote mb-40 p-relative white-bg fix">
                           <div className="blog__quote-line">
                              <img className="line-1" src="assets/img/icon/blog/line-1.png" alt="" />
                              <img className="line-2" src="assets/img/icon/blog/line-2.png" alt="" />
                           </div>
                           <div className="quote mb-10">
                              <img src="assets/img/icon/blog/quote-1.png" alt="" />
                           </div>
                           <div className="quote-2 p-absolute">
                              <img src="assets/img/icon/blog/quote-2.png" alt="" />
                           </div>
                           <blockquote>
                              <p>Tosser argy-bargy mush loo at public school Elizabeth up the duff buggered chinwag on your bike mate don't get shirty with me super, Jeffrey bobby Richard cheesed off spend a penny a load of old tosh blag horse.</p>
                           </blockquote>
                           <h4>Shahnewaz Sakil</h4>
                        </div>
                        <div className="blog__text mb-40">
                           <p>Cheeky bugger cracking goal starkers lemon squeezy lost the plot pardon me no biggie the BBC burke gosh boot so I said wellies, zonked a load of old tosh bodge barmy skive off he legged it morish spend a penny my good sir wind up hunky-dory. Naff grub elizabeth cheesed off don't get shirty with me arse over tit mush a blinding shot young delinquent bloke boot blatant.</p>
                        </div>
                        <div className="blog__details-thumb w-img mb-45">
                           <img src="assets/img/blog/details/b-d-1.jpg" alt="" />
                        </div>
                        <div className="blog__text mb-40">
                           <h3>Les news du RIWA</h3>
                           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultrices posuere ante, in elementum ante mattis a. Curabitur volutpat finibus lobortis. Phasellus eget est ac quam pharetra fringilla. Proin ut eros vitae est elementum tempor vitae ut mauris. Suspendisse at tempus risus. Nulla id justo porta, auctor justo sit amet, suscipit leo. Nunc tristique lacus neque. Curabitur ultricies justo nisl, at ultrices ligula fermentum in. Fusce et volutpat enim. Aliquam accumsan sem non est auctor sollicitudin. Duis convallis dui eu molestie consectetur. Nulla facilisi. Suspendisse potenti.</p>

                           <p> <span>Suspendisse vitae congue sem, a vestibulum nisi.</span> Cras sollicitudin, eros non fermentum feugiat, neque lorem efficitur lorem, a condimentum nulla nisl sit amet justo. Suspendisse libero tellus, mattis nec cursus at, egestas et nunc. Maecenas sit amet iaculis ex. Integer et porttitor est. Integer sit amet molestie nibh. Integer finibus fringilla lorem, ut commodo turpis congue eu. Maecenas a risus vel risus accumsan ultrices. Sed finibus, massa sed tincidunt euismod, quam arcu sodales neque, pellentesque feugiat diam erat sed elit. Nullam vitae luctus magna, eget auctor nulla. Integer et pharetra elit, in egestas lorem.</p>
                        </div>
                        <div className="blog__share d-flex align-items-center mb-30">
                           <span>Share : </span>
                           <div className="blog__social theme-social d-inline-block">
                              <ul>
                                 <li>
                                    <a
                                       href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.youtube.com/watch?v=chpEqbXH3_A"
                                       target="_blank"
                                       rel="noreferrer"
                                    >
                                       <i ><FaFacebookF /></i>
                                       <i ><FaFacebookF /></i>
                                    </a>
                                 </li>
                                 <li>
                                    <a
                                       href="https://twitter.com/intent/tweet"
                                       target="_blank"
                                       rel="noreferrer"
                                    >
                                       <i ><FaTwitter /> </i>
                                       <i ><FaTwitter /> </i>
                                    </a>
                                 </li>
                              </ul>
                           </div>
                        </div>
                        <div className="blog__author mb-95 d-sm-flex">
                           <div className="blog__author-img mr-30">
                              <img src="assets/img/blog/author/author-1.jpg" alt="" />
                           </div>
                           <div className="blog__author-content">
                              <h5>Kiki</h5>
                              <span>Autheur</span>
                           </div>
                        </div>
                        <div className="post-comments mb-95" data-wow-delay=".6s">
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

export default NewsDetailsArea;