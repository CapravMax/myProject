import React from 'react'
import './Header.scss'

function Header () {
    
return (
<header className="header">

        <div className="header_top">
              <div className="header_top_close">
              <button type="button">
              <i className="las la-times"></i>
              </button>
            </div>
                          
                <div className="header_top_left">
                  <div className="contact-item">
                    <i className="flaticon-call"></i>
                    Make A Call:
                    <a href="tel:+7800">+7 (800) 255-5511</a>
                  </div>
                  <div className="contact-item">
                    <i className="flaticon-envelope-1"></i>
                    Send Message:
                    <a href="/cdn-cgi/l/email-protection#2645494852474552664d404a49510845494b">
                    <span className="__cf_email__">[email&#160;protected]</span>
                    </a>
                  </div>
                </div>
              
              
                <div className="header_top_right">
                  <div className="user-login">
                    <a href="my-account.html"
                      ><i className="flaticon-user-3"></i> My Account</a>
                  </div>
                  <div className="select-lang">
                    <i className="flaticon-planet-earth"></i>
                    <div
                      className="navbar-option-item navbar-language dropdown language-option"
                    >
                      <button
                        className="dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <span className="lang-name"></span>
                      </button>
                      
                    </div>
                  </div>
                </div>
              
            
          
        </div>
          <div className="header_bottom">
            <div className="row align-items-center">
              <div className="col-xl-2 col-lg-6 col-md-6 col-5">
                <a href="index.html" className="logo">
                  <img className="logo-light"  src="..\assets\img\logo-white.png" alt="logo"/>

                  <img
                    className="logo-dark"
                    src="..\assets\img\logo.png"
                    alt="logo"
                  />
                </a>
              </div>
              <div className="col-xl-10 col-lg-6 col-md-6 col-7">
                <div className="header-bottom-right">
                  <div className="main-menu-wrap">
                    <div className="menu-close xl-none">
                      {/* <a href='{javascript:void(0)}'>
            
                        <i className="las la-times"></i>
                        </a> */}
                    </div>
                    <div className="menu">
                      <ul className="main-menu list-style">
                        <li className="has-children">
                          {/* <a className="active" href="#">Home</a> */}

                          <ul className="sub-menu list-style">
                            <li>
                              <a className="active" href="index.html">Home 1</a>
                            </li>

                            <li>
                                <a href="index-2.html">Home 2</a>
                            </li>

                            <li><a href="index-3.html">Home 3</a></li>
                          </ul>
                        </li>
                        <li className="has-children">
                          {/* <a href="#">Services</a> */}
                          <ul className="sub-menu list-style">
                            <li>
                              <a href="services-one.html">Service Style One</a>
                            </li>

                            <li>
                              <a href="service-details.html">Service Single</a>
                            </li>
                          </ul>
                        </li>
                        <li className="has-children">
                          {/* <a href="#">Projects</a> */}
                          <ul className="sub-menu list-style">
                            <li>
                              <a href="project-one.html">Project Style One</a>
                            </li>
                            <li>
                              <a href="project-two.html">Project Style Two</a>
                            </li>
                            <li>
                              <a href="project-details.html">Project Single</a>
                            </li>
                          </ul>
                        </li>
                        <li className="has-children">
                          {/* <a href="#">Pages</a> */}
                          <ul className="sub-menu list-style">
                            <li><a href="about.html">About us</a></li>
                            <li><a href="team.html">Team</a></li>
                            <li>
                              <a href="testimonials.html">Testimonials</a>
                            </li>
                            <li><a href="faq.html">FAQ</a></li>
                            <li>
                              <a href="pricing-plan.html">Pricing Table</a>
                            </li>
                            <li className="has-children">
                              {/* <a href="#">User</a> */}
                              <ul className="sub-menu list-style">
                                <li>
                                  <a href="my-account.html">My Account</a>
                                </li>
                                <li>
                                  <a href="login.html">Login</a>
                                </li>
                                <li>
                                  <a href="register.html">Register</a>
                                </li>
                                <li>
                                  <a href="forgot-password.html"
                                    >Forgot Password</a>
                                  
                                </li>
                              </ul>
                            </li>
                            <li>
                              <a href="privacy-policy.html">Privacy Policy</a>
                            </li>
                            <li>
                              <a href="terms-conditions.html"
                                >Terms &amp; Conditions</a>
                              
                            </li>
                            
                          </ul>
                        </li>
                        <li className="has-children">
                          {/* <a href="#">Shop</a> */}
                          <ul className="sub-menu list-style">
                            <li className="has-children">
                              {/* <a href="#">Shop Layout</a> */}
                              <ul className="sub-menu list-style">
                                <li>
                                  <a href="shop-no-sidebar.html">Shop Grid </a>
                                </li>
                                <li>
                                  <a href="shop-left-sidebar.html"
                                    >Shop Left Sidebar</a>
                                
                                </li>
                                <li>
                                  <a href="shop-right-sidebar.html"
                                    >Shop Right Sidebar</a>
                                
                                </li>
                              </ul>
                            </li>
                            <li>
                              <a href="shop-details.html">Shop Single</a>
                            </li>
                            <li>
                              <a href="cart.html">Cart</a>
                            </li>
                            <li>
                              <a href="wishlist.html">Wishlist</a>
                            </li>
                            <li>
                              <a href="checkout.html">Checkout</a>
                            </li>
                          </ul>
                        </li>
                        <li className="has-children">
                          {/* <a href="#">Blog</a> */}
                          <ul className ="sub-menu list-style">

                            <li className ="has-children">
                              {/* <a href="#">Blog Layout</a> */}
                              

                              <ul className="sub-menu list-style">

                                <li>
                                  <a href="blog-no-sidebar.html">Blog Grid</a>
                                </li>

                                <li>
                                  <a href="blog-left-sidebar.html">Blog Left Sidebar</a>
                                </li>

                                <li>
                                  <a href="blog-right-sidebar.html">Blog Right Sidebar</a>
                                  
                                </li>

                              </ul>

                            </li>

                            <li className ="has-children">
                              {/* <a href="#">Blog Single</a> */}

                              <ul className ="sub-menu list-style">
                                <li>
                                  <a href="blog-details-no-sidebar.html"
                                    >Blog Single No Sidebar</a>
                                  
                                </li>
                                <li>
                                  <a href="blog-details-left-sidebar.html"
                                    >Blog Single Left Sidebar</a>
                                  
                                </li>
                                <li>
                                  <a href="blog-details-right-sidebar.html"
                                    >Blog Single Right Sidebar</a>
                                  
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="contact.html">Contact</a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="searchbox lg-none">
                    <input type="search" placeholder="Search" />
                    <button type="submit">
                      <i className="flaticon-loupe"></i>
                    </button>
                  </div>
                </div>
                <div className="mobile-bar-wrap">
                  <button className="searchbtn xl-none" type="button">
                    <i className="flaticon-loupe"></i>
                  </button>
                  <div className="mobile-top-bar xl-none">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <div className="mobile-menu xl-none">
                    {/* //<a href='javascript:void(0)'> */}
                    {/* <i class="las la-bars"></i> */}
                    {/* </a> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
    
      </header>
)
};

export default Header


