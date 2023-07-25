import React from 'react'
import '../css/footer.css'
import india from '../images/india.png'

import logo from '../images/lemo.png'
import call from '../images/call.png'
import location from '../images/location.png'
import mail from '../images/mail.png'
import dcma from '../images/dmca-badge.png'
import star from '../images/mystar.png'

const Footer = () => {
  return (
    <>
           {/* Footer  */}
           <footer>
                    <div className='footer-main py-5'>
                      <div className="container">  
                    <img src={logo} alt="" />
                    <div className="footer-services ">
                        <ul className='d-flex  flex-wrap justify-content-center mt-4 space'> 
                            <li>Services</li>
                            <li> About Us</li>
                            <li>News</li>
                            <li>Portfolio</li>
                            <li> Contact Us</li>
                            <li>Career</li>
                            <li>FAQ</li>
                            <li> Privacy Policy</li>
                            <li>Sitemap</li>
                        </ul>
                    </div>
                    <div className="footer-social">
                        <ul className='d-flex flex-wrap  justify-content-center mt-3 space-1'>
                            <li><i class="bi bi-facebook"></i></li>
                            <li><i class="bi bi-twitter"></i></li>
                            <li><i class="bi bi-linkedin"></i></li>
                            <li><i class="bi bi-instagram"></i></li>
                            <li><i class="bi bi-youtube"></i></li>
                            <li><i class="bi bi-google"></i></li>
                            <li><i class="bi bi-apple"></i></li>
                        </ul>
                    </div>


                    <div className='footer-details'>
                    <div className="row mt-5">
                        <div className="col-md-4 text-start ">
                        <img className='img-fluid mx-2 mt-4 ' src={call} alt="" />
                          <span className='smal'>Call Us</span>              
                             <div className='marg-lef'>
                           <img src={india} alt="" /> +91 (731) 409-1887
                             </div>
                          
                        </div>
                        <div className="col-md-4 text-start ">
                            <img className='img-fluid mx-1 mt-3 ' src={location} alt="" />
                          <span className='smal'>Head Office: Plot 169, Scheme 78,Part II,</span>              
                             <div className='marg-lef'>
                             Behind Kanak Hospital Indore,  
                             </div>
                            
                              </div>

                        <div className="col-md-4 text-start">
                           <img className='img-fluid mx-2 mt-3 ' src={mail} alt="" />
                          <span className='smal'>sales@lemosys.com </span>              
                             <div className='marg-lef'>
                             <i class="bi bi-skype"></i> lemosys_infotech
                             </div>
                        </div>
                    </div>
                    </div>

               

                    </div>
                    </div>
            </footer>
            

            {/* Footer part-2   */}
            <footer>
                <div className="footer-part-2 py-3">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 text-start">© 2023 Lemosys. All Rights Reserved.</div>
                            <div className="col-md-8 text-start">Website Development Company  Rating <img src={star} alt="" /> 4.9 out of 5 based on 33 Review <img src={dcma} alt="" /></div>
                        </div>
                    </div>
                </div>
            </footer>
    </>
  )
}

export default Footer