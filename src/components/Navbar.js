import React from 'react'
import '../css/navbar.css'
import india from '../images/india.png'
import logo from '../images/logoemosys-logo.png'

const Navbar = () => {
    return (
        <div className='sticky'>
            <div className="nav-1">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 text-start py-2"><i class="bi bi-telephone-fill mx-2"></i>Call us-  <img className='mx-2' src={india} alt="" /> +91 (731) 409-1887</div>
                        <div className="col-md-6 text-end my-auto "><i class="bi bi-envelope mx-2"></i>sales@lemosys.com <i class="bi bi-skype mx-2"></i>lemosys_infotech</div>
                    </div>
                </div>
            </div>
            <div className="nav-2">
                <div className="container">
                    <nav class="navbar navbar-expand-lg navbar-light">
                        <a class="navbar-brand" href="/"><img src={logo} alt="" /></a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>

                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav mr-auto">
                                <li class="nav-item ">
                                    <a class="nav-link" href="/">ABOUT US </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/">PORTFOLIO</a>
                                </li>

                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                       SERVICES </a>
                                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <a class="dropdown-item" href="/">WEBSITE DEVELOPMENT</a>
                                        <a class="dropdown-item" href="/">ECOMMERCE DEVELOPMENT</a>
                                        <a class="dropdown-item" href="/">WEBSITE DESIGNING</a>
                                        <a class="dropdown-item" href="/">MOBILE APP DEVELOPMENT</a>
                                        <a class="dropdown-item" href="/">AFFORDABLE SEO SERVICES</a>
                                        <a class="dropdown-item" href="/">WEBSITE & MOBILE APP TESTING</a>
                                    </div>
                                </li>


                                <li class="nav-item">
                                    <a class="nav-link " href="/">PRODUCTS</a>
                                </li>

                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        HIRE US
                                    </a>
                                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <a class="dropdown-item" href="/">HIRE WORDPRESS DEVELOPER</a>
                                        <a class="dropdown-item" href="/">HIRE MAGENTO DEVELOPER</a>
                                        <a class="dropdown-item" href="/">HIRE ANDROID DEVELOPER</a>
                                    </div>
                                </li>

                                <li class="nav-item">
                                    <a class="nav-link " href="/">BLOG</a>
                                </li>

                                <li class="nav-item">
                                    <a class="nav-link " href="/">CONTACT US</a>
                                </li>
                                
                                <div className="button-nav">
                                    <button className='btn nav-btn-edit mx-2'>START A PROJECT</button>
                                </div>

                            </ul>

                        </div>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Navbar