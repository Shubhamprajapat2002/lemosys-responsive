import React from 'react'
import '../css/page1.css'
import india from '../images/india.png'
import img1 from '../images/Layer 1.png'
import img2 from '../images/Layer 1 (1).png'
import img3 from '../images/Layer 1 (3).png'
import img4 from '../images/Layer 1 (2).png'
import img5 from '../images/Layer 1 (4).png'
import img6 from '../images/feedback-app.webp'
import img7 from '../images/img3.jpg'
import img8 from '../images/trade_it.jpg'
import img9 from '../images/2tour.jpg'
import img10 from '../images/know_number.jpg'
import img11 from '../images/Taxi-App.webp'
import img12 from '../images/alnoor.jpg'
import img13 from '../images/samadhan-app.webp'
import img14 from '../images/cup.png'
import img15 from '../images/phonesw.png'
import img16 from '../images/poeple1.png'
import img17 from '../images/madel 1 (4).png'
import img18 from '../images/achieve.png'
import img19 from '../images/pepole.png'
import img20 from '../images/cliwent.png'
import img21 from '../images/magic.png'
import img22 from '../images/1.png'
import img23 from '../images/2.png'
import img24 from '../images/3.png'
import img25 from '../images/4.png'
import img26 from '../images/5.png'
import img27 from '../images/6.png'
import img28 from '../images/7.png'
import img29 from '../images/8.png'
import img30 from '../images/9.png'
import img31 from '../images/10.png'
import logo from '../images/lemo.png'
import call from '../images/call.png'
import location from '../images/location.png'
import mail from '../images/mail.png'
import dcma from '../images/dmca-badge.png'
import star from '../images/mystar.png'
const Page1 = () => {
    return (
        <>
            {/* SECTION1  */}
            <section>
                <div className="section-1">
                    <div className="sec-1-main">
                        <div className="sec-1-text">
                            <p class="h1 sec-1-font">Convert your Great ideas into real world business success</p>
                            <div className="sec-1-button">
                                <button className='btn sec-1-button-edit'>Get Started</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION-2  */}
            <section>
                <div className="section-2">
                    <h2 className='sec-2-heading'>OUR UTILITY</h2>

                    <div className="paragraph">
                        <p className='sec-2-para'>Lemosys Infotech is a distinguished website development and web designing company serving to global clients. We provide highly professional services of the latest technology for web services to make your business more efficient and unique. We believe client service is not just a department but it’s a responsible job hence we maintain all possible high quality standard.</p>
                    </div>

                    <div className="pt-3">
                        <div className="container ">
                            <div className="row justify-content-between">
                                <div className="col-md-2 d-flex flex-md-row">
                                    <p><img src={img1} alt="" /></p>
                                    <p className='mx-3'>  Web Designing & Development</p>
                                </div>
                                <div className="col-md-2 d-flex flex-md-row">
                                    <p> <img src={img2} alt="" /></p>
                                    <p className="mx-2">   Graphic Design</p>
                                </div>
                                <div className="col-md-2 d-flex flex-md-row">
                                    <p>    <img src={img3} alt="" /> </p>
                                    <p className="mx-3">      Digital Marketing</p>
                                </div>
                                <div className="col-md-2 d-flex flex-md-row">
                                    <p>  <img src={img4} alt="" /></p>
                                    <p className="mx-2">  Mobile App Development</p>
                                </div>
                                <div className="col-md-2 d-flex flex-md-row">
                                    <p> <img src={img5} alt="" /></p>
                                    <p className="mx-2">  Software Testing</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* SECTION3  */}

            <section>
                <div className="section-3">
                    <div className="bg-blue">
                        <div className="blue-box"></div>
                        <div className="container">
                            <h2 className='sec-3-heading'>WE ARE GIVING <strong className='sec-3-strong'>wow</strong> FACTOR TO YOUR BUSINESS</h2>

                            <div className="development mt-5 ">
                                <ul className='d-flex sec-developement justify-content-center  '>
                                    <li className='develop-1'>DEVELOPMENT</li>
                                    <li className='develop-2'>GRAPHIC DESIGN</li>
                                    <li className='develop-3'>MOBILE APP</li>
                                </ul>
                            </div>



                            <div className="row g-0 mt-5 ">

                                <div className="col-md-6">   <img className='img-fluid' src={img6} alt="" /></div>
                                <div className="col-md-3">  <img className='img-fluid' src={img7} alt="" /></div>
                                <div className="col-md-3">   <img className='img-fluid' src={img8} alt="" /></div>



                                <div className="col-md-3">
                                    <div>
                                        <img className='img-fluid' src={img9} alt="" />
                                        <img className='img-fluid' src={img10} alt="" />
                                    </div>
                                </div>
                                <div className="col-md-6">  <img className='img-fluid' src={img11} alt="" /></div>
                                <div className="col-md-3">
                                    <div>
                                        <img className='img-fluid' src={img12} alt="" />
                                        <img className='img-fluid' src={img13} alt="" />
                                    </div>
                                </div>
                            </div>


                            <button className='sec-3-button'>TAKE A TOUR</button>

                        </div>
                    </div>

                </div>
            </section>


            {/* section4 */}
            <section>
                <div className="section-4  mt-5">
                    <div className="section-4-mian py-5">
                        <div className="container">

                            <h1 >HIRE WEBSITE DEVELOPMENT COMPANY IN INDIA</h1>
                            <h2>WITH MOST IN-DEMAND SKILLS</h2>



                            <div className="row mt-5">
                                <div className="col-md-3 circle ">
                                    <img src={img14} alt="" />
                                    <div className='mt-2'>
                                        12+ YEARS
                                    </div>
                                    COMPLETED
                                </div>
                                <div className="col-md-3 circle">
                                    <img src={img15} alt="" />
                                    <div className='mt-2'>
                                        60+ APPS
                                    </div>
                                    LIVE
                                </div>
                                <div className="col-md-3 circle">
                                    <img src={img16} alt="" />
                                    <div className='mt-2'>
                                        45 + DEVELOPER
                                    </div>
                                    TEAM
                                </div>
                                <div className="col-md-3 circle">
                                    <img src={img17} alt="" />
                                    <div className='mt-2'>
                                        5 STAR RATING
                                    </div>
                                    IN UPWORK
                                </div>
                            </div>

                            <div className="row mt-5">
                                <div className="col-md-3 circle ">
                                    <img src={img18} alt="" />
                                    <div className='mt-2'>
                                        +22000 HOURS
                                    </div>
                                    ONLINE WORKING
                                    <div>RECORD</div>
                                </div>
                                <div className="col-md-3 circle">
                                    <img src={img19} alt="" />
                                    <div className='mt-2'>
                                        250 + SATISFIED
                                    </div>
                                    CLIENT
                                </div>
                                <div className="col-md-3 circle">
                                    <img src={img20} alt="" />
                                    <div className='mt-2'>
                                        95% CLIENT
                                    </div>
                                    RETENTION
                                </div>
                                <div className="col-md-3 circle">
                                    <img src={img21} alt="" />
                                    <div className='mt-2'>
                                        BEST CREATIVE
                                    </div>
                                    DESIGNERS
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* section5  */}

            <section>
                <div className="section-5 mt-5">
                    <h2 className='sec-5-heading'>OUR TRUSTED CLIENTS</h2>
                    <div class="sec-5-paragraph mt-3">
                        <p class="sec-5-para">Lemosys Infotech strives to cater the needs of clients in the best possible manner. What we practically do is pretty simple as an experienced website development and web designing company in India. But in the same time incredibly complex and professional. Hire Lemosys to create your company website in minutes</p>
                    </div>
                    <div className="container">
            <div class="ticker">
              <div class="ticker__list">
                <div class="ticker__item"><img src="https://www.lemosys.com/images/Result.png" alt='/' /></div>
              </div>
              <div class="ticker__list">
                <div class="ticker__item"><img src="https://www.lemosys.com/images/Result.png" alt='/' /></div>
              </div>
              </div>
          </div>


                </div>
            </section>


            {/* section6  */}
            <section>
                <div className="section-6 mt-5" >
                    <div className="container">
                <h2 className='sec-6-heading'>AWARDS & ACHIEVEMENT</h2>

                <div className="logos">
                    <ul className='d-flex flex-wrap justify-content-around'>
                        <li><img src={img22} alt="" /></li>
                        <li><img src={img23} alt="" /></li>
                        <li><img src={img24} alt="" /></li>
                        <li><img src={img25} alt="" /></li>
                        <li><img src={img26} alt="" /></li>
                    </ul>

                    <ul className='d-flex flex-wrap justify-content-around mt-5'>
                        <li><img src={img27} alt="" /></li>
                        <li><img src={img28} alt="" /></li>
                        <li><img src={img29} alt="" /></li>
                        <li><img src={img30} alt="" /></li>
                        <li className='mt-4'><img src={img31} alt="" /></li>
                    </ul>
                </div>
                </div>
                </div>
            </section>



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
                        <img className='mx-2 mt-4 img-fluid' src={call} alt="" />
                          <span className='smal'>Call Us</span>              
                             <div className='marg-lef'>
                           <img src={india} alt="" /> +91 (731) 409-1887
                             </div>
                          
                        </div>
                        <div className="col-md-4 text-start ">
                            <img className='mx-1 mt-3 img-fluid' src={location} alt="" />
                          <span className='smal'>Head Office: Plot 169, Scheme 78,Part II,</span>              
                             <div className='marg-lef'>
                             Behind Kanak Hospital Indore,  
                             </div>
                            
                              </div>

                        <div className="col-md-4">
                           <img className='mx-2 mt-3 img-fluid' src={mail} alt="" />
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

export default Page1